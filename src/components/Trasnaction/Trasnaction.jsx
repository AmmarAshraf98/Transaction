import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateEle from "../CreateEle/CreateEle";
import ChartUSer from "../ChartUser/ChartUser";

export default function Trasnaction() {
  const [customers, setcustomers] = useState([]);
  const [transactions, settransactions] = useState([]);
  const [filterTransaction, setfilterTransaction] = useState([]);

  const [isClicked, setClicked] = useState(false);

  const [user, setuser] = useState(null);

  const [name, setName] = useState("");

  // get customer
  const getData = async (x) => {
    const { data } = await axios.get(`${x}`);

    x == "http://localhost:3000/customers"
      ? setcustomers(data)
      : settransactions(data);
  };

  useEffect(() => {
    getData("http://localhost:3000/customers");
    getData("http://localhost:3000/transactions");
  }, []);

  // search bu name
  function searchByName(name) {
    setName(name);

    // filtraion customres By search name
    const x = customers.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );

    const y = transactions.filter((process) => {
      return x.find((e) => e.id === process.customer_id);
    });

    setfilterTransaction(y);
  }

  // search by amount
  function searchByAmount(amount) {
    setAmount(amount);
    const y = transactions.filter((e) => e.amount == amount);
    setfilterTransaction(y);
  }

  // get date array
  function getDates() {
    const dateArray = transactions.map((e) =>
      new Date(e.date).toLocaleString("en-Us", { weekday: "long" })
    );
    return Array.from(new Set(dateArray));
  }

  // get all user amount
  function getUserAmount() {
    const allTRansiaction = transactions.filter(
      (x) => x.customer_id === user.customer_id
    );

    const amountsByDay = allTRansiaction.reduce((acc, item) => {
      const date = item.date;
      const amount = parseFloat(item.amount);

      if (!acc[date]) {
        acc[date] = 0;
      }

      acc[date] += amount;
      return acc;
    }, {});

    const [dates, values] = [
      Object.keys(amountsByDay),
      Object.values(amountsByDay),
    ];
    return [dates, values];
  }

  return (
    <div className="constiner">
      <div className="row gy-5">
        <div>
          <div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-0"
                id="floatingInput1"
                placeholder="name@example.com"
                value={name}
                onChange={(e) => searchByName(e.target.value)}
              />
              <label htmlFor="floatingInput1">Search by name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-0"
                id="floatingInput"
                onChange={(e) => searchByAmount(e.target.value)}
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Search by Amount</label>
            </div>
            <table className="table table-hover table-dark">
              <thead>
                <tr className="text-center ">
                  <th>Customer_id</th>
                  <th>Name</th>
                  <th>Transaction_id</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <CreateEle
                  customers={customers}
                  transactions={transactions}
                  filterd={filterTransaction}
                  name={name}
                  setuser={setuser}
                  setClicked={setClicked}
                />
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {isClicked && (
            <ChartUSer
              user={user}
              transactions={transactions}
              array={getDates()}
              userAmount={getUserAmount()}
            />
          )}
        </div>
      </div>
    </div>
  );
}

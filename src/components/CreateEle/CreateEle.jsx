import React, { useState } from "react";

export default function CreateEle({
  customers,
  filterd,
  setuser,
  setClicked,
  transactions,
}) {
  return (
    <>
      {filterd.length
        ? filterd.map((process, index) => (
            <tr
              className="table-active text-center"
              key={index}
              onClick={() => {
                setuser(process);
                setClicked(true);
              }}>
              <td>{process?.customer_id}</td>
              <td>
                {
                  customers?.find((user) => user?.id === process?.customer_id)
                    ?.name
                }
              </td>
              <td>{process?.id}</td>
              <td>{process?.amount}</td>
              <td>{process?.date}</td>
            </tr>
          ))
        : transactions.map((process, index) => (
            <tr
              className="table-active text-center"
              key={index}
              onClick={() => {
                setuser(process);
                setClicked(true);
              }}>
              <td>{process?.customer_id}</td>
              <td>
                {
                  customers?.find((user) => user?.id === process?.customer_id)
                    ?.name
                }
              </td>
              <td>{process?.id}</td>
              <td>{process?.amount}</td>
              <td>{process?.date}</td>
            </tr>
          ))}
    </>
  );
}

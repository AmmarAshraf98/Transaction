import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Trasnaction from "./components/Trasnaction/Trasnaction";
import Navbar from "./components/Navbar/Navbar";
import ChartUSer from "./components/ChartUser/ChartUser";

function App() {
  return (
    <>
      <Navbar />
      <div className="main py-5">
        <div className="container py-5">
          <Trasnaction />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

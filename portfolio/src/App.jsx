import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePageA from "./components/HomePageA";
import HomePageB from "./components/HomePageB";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div id="pageContainer">
        <NavBar />
        <div id="flexContainer">
          <HomePageA />
          <div>
            <HomePageB />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

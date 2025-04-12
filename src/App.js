import './App.css';
import HeaderWrapper from "./Components/Header/HeaderWrapper";
import Banner from "./Components/Banner/Banner";
import React from "react";
import GetInvolved from "./Components/GetInvolved/GetInvolved";
import Cards from "./Components/Cards/Cards";
import FAQ from "./Components/FAQ/Faq";

function App() {
  return (
    <div className="App container">
        <HeaderWrapper/>
        <Banner/>
        <GetInvolved/>
        <Cards/>
        <FAQ/>
    </div>
  );
}

export default App;

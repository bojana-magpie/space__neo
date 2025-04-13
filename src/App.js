import './App.css';
import HeaderWrapper from "./Components/Header/HeaderWrapper";
import Banner from "./Components/Banner/Banner";
import React from "react";
import GetInvolved from "./Components/GetInvolved/GetInvolved";
import Cards from "./Components/Cards/Cards";
import FAQSection from "./Components/FAQ/FAQSection"
import FooterWrapper from "./Components/Footer/FooterWrapper";

function App() {
  return (
    <div className="App container">
        <HeaderWrapper/>
        <Banner/>
        <GetInvolved/>
        <Cards/>
        <FAQSection/>
        <FooterWrapper/>
    </div>
  );
}

export default App;

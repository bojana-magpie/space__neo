import './App.css';
import HeaderWrapper from "./Components/Header/HeaderWrapper";
import Banner from "./Components/Banner/Banner";
import React from "react";
import GetInvolved from "./Components/GetInvolved/GetInvolved";
import Cards from "./Components/Cards/Cards";
import FooterWrapper from "./Components/Footer/FooterWrapper";
import FAQSectionWrapper from "./Components/FAQ/FAQSectionWrapper";

function App() {
  return (
    <div className="App container">
        <HeaderWrapper/>
        <Banner/>
        <GetInvolved/>
        <Cards/>
        <FAQSectionWrapper/>
        <FooterWrapper/>
    </div>
  );
}

export default App;

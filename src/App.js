import './App.css';
import HeaderWrapper from "./Components/Header/HeaderWrapper";
import Banner from "./Components/Banner/Banner";
import React from "react";
import GetInvolved from "./Components/GetInvolved/GetInvolved";
import FooterWrapper from "./Components/Footer/FooterWrapper";
import FAQSectionWrapper from "./Components/FAQ/FAQSectionWrapper";
import CardsWrapper from "./Components/Cards/CardsWrapper";

function App() {
  return (
    <div className="App">
        <HeaderWrapper/>
        <Banner/>
        <GetInvolved/>
        <CardsWrapper/>
        <FAQSectionWrapper/>
        <FooterWrapper/>
    </div>
  );
}

export default App;

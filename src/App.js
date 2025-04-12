import './App.css';
import HeaderWrapper from "./Components/Header/HeaderWrapper";
import Banner from "./Components/Banner/Banner";
import React from "react";
import GetInvolved from "./Components/GetInvolved/GetInvolved";

function App() {
  return (
    <div className="App container">
        <HeaderWrapper/>
        <Banner/>
        <GetInvolved/>
    </div>
  );
}

export default App;

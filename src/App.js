import './App.css';
import HeaderWrapper from "./Components/Header/HeaderWrapper";
import Banner from "./Components/Banner/Banner";
import Button from "./Components/Common/Button/Button";

function App() {
  return (
    <div className="App container">
        <HeaderWrapper/>
        <Banner>
            <Button title="WATCH THE REPLAY" link="watchthereplay" shape="white"/>
        </Banner>
    </div>
  );
}

export default App;

import './App.css';
import Header from "./Components/Header/Header";
import Logo from "./Components/Header/Logo/Logo";
import Menu from "./Components/Header/Menu/Menu";
import MenuItem from "./Components/Header/Menu/MenuItem/MenuItem";

function App() {
  return (
    <div className="App container">
        <Header>
            <Logo/>
            <Menu>
                <MenuItem title="OUR MISSION"/>
                <MenuItem title="RIDESHARE"/>
                <MenuItem title="ENGINES"/>
                <MenuItem title="CAREERS"/>
                <MenuItem title="SHOP"/>
            </Menu>
        </Header>
    </div>
  );
}

export default App;

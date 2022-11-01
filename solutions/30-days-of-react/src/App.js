import logo from './images/logo.svg';
import './App.css';
import React, {useState} from "react";
import ToggleDisplayMode from './components/ToggleDisplayMode'
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Calculator from "./components/calculator/Calculator";
import CalculatorClass from "./components/calculator_class/Calculator";
import Clock from "./components/Clock"

const randomHex = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const hexaStyles = {
    backgroundColor: randomHex(),
    display: 'flex',
    width: '90%',
    margin: '5px',
    padding: '5px',
  }
  return (<div style={hexaStyles}><center style={{width:'100%'}}>{randomHex()}</center></div>)
}

const HexaContainer =() => {
  const [ clickNumber, makeClick ] = useState(0)
  return (
      <div>
        <button onClick={()=>makeClick(clickNumber+1)}>RELOAD COLORS</button>
        <HexaColor />
        <HexaColor />
      </div>
  )
}

const LogoImage = ({settings}) => {
  // console.log({props})
  const logoStyles = {
    width: (typeof settings.width !== 'undefined' ? settings.width +'px' : '60px'),
    height: (typeof settings.width !== 'undefined' ? settings.width +'px' : '60px'),
  }
  return (<div style={logoStyles}><img src={logo} alt="logo" /></div>)
}

const LogoContainer = () => {
  const logoContainerStyles = {
    display:'flex'
  }
  const logoProps = {
    width:100
  }
  return (
      <div style={logoContainerStyles}>
        <LogoImage settings={logoProps} />
        <LogoImage settings={logoProps} />
        <LogoImage settings={logoProps} />
      </div>
  )
}

const Navbar = ({ username }) => (
    <ul className="Menu">
        <li>
            <NavLink to='/Calculator'>Calculator</NavLink>
        </li>
        <li>
            <NavLink to='/Clock'>Clock</NavLink>
        </li>
        <li>
            <NavLink to='/HexaContainer'>HexaContainer</NavLink>
        </li>
        <li>
            <NavLink to='/LogoContainer'>LogoContainer</NavLink>
        </li>
        <li>
            <NavLink to={`/user/${username}`}>User</NavLink>
        </li>
    </ul>
)




function App() {
  return (
      <Router>
            <div className="App">
              <header className="App-header">
                <div>
                    <Navbar username="maciek" />
                </div>
                <div className="Tools">
                  <ToggleDisplayMode />
                </div>
              </header>

              <main className="Main">
                  <Routes>
                      <Route path='/LogoContainer' element={<LogoContainer/>} />
                      <Route path='/HexaContainer' element={<HexaContainer/>} />
                      <Route path='/Calculator' element={<CalculatorClass/>} />
                      <Route path='/Clock' element={<Clock/>} />
                      <Route path='/' element={<CalculatorClass/>} />
                  </Routes>
              </main>
            </div>
      </Router>
  );
}

export default App;

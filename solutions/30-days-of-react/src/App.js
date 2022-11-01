import logo from './images/logo.svg';
import './App.css';
import React from "react";
import ToggleDisplayMode from './components/ToggleDisplayMode'

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleDisplayMode />
        <LogoContainer />
        <HexaColor />
        <HexaColor />
      </header>
    </div>
  );
}

export default App;

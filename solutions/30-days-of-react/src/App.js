import logo from './images/logo.svg';
import './App.css';
import React from "react";

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

const LogoImage = (props) => {
  // Check if argument is settings object or common props, then use only settings if available
  if (typeof props?.settings === 'object') props = props.settings
  // console.log({props})
  const logoStyles = {
    width: (typeof props?.width !== 'undefined' ? props.width +'px' : '60px'),
    height: (typeof props?.width !== 'undefined' ? props.width +'px' : '60px'),
  }
  return (<div style={logoStyles}><img src={logo} /></div>)
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
        <LogoImage width='100' />
        <LogoImage />
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoContainer />
        <HexaColor />
        <HexaColor />
      </header>
    </div>
  );
}

export default App;

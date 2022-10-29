import React from "react";
import ReactDOM from "react-dom";


const randomHex = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

const HexaColor = () => <div><h1>{randomHex()}</h1></div>

const rootElement = document.getElementById('root');
ReactDOM.render(<HexaColor />, rootElement)

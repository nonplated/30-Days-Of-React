import React, {useState} from 'react'
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButton from "./CalculatorButton";

const Calculator = () => {

    const [ displayInput, setDisplayInput ] = useState('0')

    const addChar = (char ='A') => {
        let newDisplay = displayInput + char
        // let char ='A'
        console.log('addChar(', char ,')')
        setDisplayInput( newDisplay )
    }

    //            <__CalculatorDisplay displayInput={displayInput}/>
    return (
        <div>
            <div className="Buttons">
                <CalculatorButton name="1" callback={addChar}/>
                <CalculatorButton name="2" callback={addChar}/>
                <CalculatorButton name="3" callback={addChar}/>
            </div>
        </div>
    )
}

export default Calculator;
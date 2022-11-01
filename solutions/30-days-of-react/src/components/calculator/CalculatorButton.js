import React from 'react'

const CalculatorButton = ({name, callback}) => {

    return (
        <button onClick={callback}>{name}</button>
    )
}

export default CalculatorButton;
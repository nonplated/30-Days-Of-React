import React, { Component } from "react"

export default class CalculatorDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="DisplayInput">{(this.props.data.displayInput === '' ? '0' : this.props.data.displayInput)}</div>
                <div className="DisplayOutput">{this.props.data.displayOutput}</div>
            </div>
        )
    }
}
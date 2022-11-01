import React, { Component } from "react"

export default class CalculatorButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = props.onClick.bind(this);
    }
    render() {
        return (
            <button columns={this.props.columns} className={this.props.class} onClick={this.onClick}>{this.props.name}</button>
        )
    }
}
import React, {Component} from 'react'
import CalculatorButton from "../calculator_class/CalculatorButton"
import CalculatorDisplay from "../calculator_class/CalculatorDisplay";
import './Calculator.css'
import {useDispatch} from "react-redux";
import {increment} from "../../actions";

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayInput: '',
            displayOutput: '',
        }
        this.maxCharsInput = 20;
    }


    addChar(char) {
        if (this.state.displayInput.length<=this.maxCharsInput) {
            this.setState({displayInput: this.state.displayInput + char});
        } else {
            console.log('You cannot reach '+ this.maxCharsInput +' chars in input.')
        }
    }



    summarize() {
        let displayOutput = ''
        try {
            displayOutput = eval(this.state.displayInput);
        } catch (err) {
            displayOutput = 'ERROR'
            console.warn(err)
        }
        this.setState({displayOutput: displayOutput})
    }

    clearOutput() {
        this.setState({
            displayInput: '',
            displayOutput: ''
        })
    }

    removeLastChar() {
        let displayInput = (this.state.displayInput.length > 0 ? this.state.displayInput.slice(0,-1) : '')
        this.setState({
            displayInput: displayInput
        })
    }

    render() {
        return (
            <div className="Calculator">
                <div className="Header">
                    <div className="Name">DMX2000</div>
                    <div className="BatteryContainer">
                        <div className="Battery"></div>
                        <div className="Battery"></div>
                        <div className="Battery"></div>
                        <div className="Battery"></div>
                    </div>
                </div>
                <div className="Display">
                    <CalculatorDisplay data={this.state}/>
                </div>
                <div className="Buttons">
                    <div className="Row">
                        <CalculatorButton name="CE" onClick={()=>this.clearOutput()} class="Danger" />
                        <CalculatorButton name="DEL" onClick={()=>this.removeLastChar()} class="Danger" />
                        <CalculatorButton name="." onClick={()=>this.addChar('.')} />
                        <CalculatorButton name="*" onClick={()=>this.addChar('*')} class="Functional" />
                    </div>
                    <div className="Row">
                        <CalculatorButton name="1" onClick={()=>this.addChar('1')}/>
                        <CalculatorButton name="2" onClick={()=>this.addChar('2')} />
                        <CalculatorButton name="3" onClick={()=>this.addChar('3')} />
                        <CalculatorButton name="/" onClick={()=>this.addChar('/')} class="Functional" />
                    </div>

                    <div className="Row">
                        <CalculatorButton name="4" onClick={()=>this.addChar('4')}/>
                        <CalculatorButton name="5" onClick={()=>this.addChar('5')} />
                        <CalculatorButton name="6" onClick={()=>this.addChar('6')} />
                        <CalculatorButton name="-" onClick={()=>this.addChar('-')} class="Functional" />
                    </div>

                    <div className="Row">
                        <CalculatorButton name="7" onClick={()=>this.addChar('7')} />
                        <CalculatorButton name="8" onClick={()=>this.addChar('8')} />
                        <CalculatorButton name="9" onClick={()=>this.addChar('9')} />
                        <CalculatorButton name="+" onClick={()=>this.addChar('+')} class="Functional" />
                    </div>

                    <div className="Row">
                       <CalculatorButton name="0" onClick={()=>this.addChar('0')} />
                        <CalculatorButton name="=" onClick={()=>this.summarize()} columns='3' class="Functional" />
                    </div>
                </div>
            </div>
        )
    }
}

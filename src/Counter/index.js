import React, {Component} from 'react';

import './counter.scss';
import Num1 from './Num1.js';
import Num2 from './Num2.js';

// stateful component
class Counter extends Component {
    state = {
        value: 0,
        num1: 0,
        num2: 0
    };

    render() {
        let {value, num1, num2} = this.state;
        return (
            <div className='counter-style'>
                <div>{value}</div>
                <Num1 num1={num1} handleChangeNum1={this.handleChangeNum1} />
                <Num2 num2={num2} handleChangeNum2={this.handleChangeNum2} />
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMul}>×</button>
                <button onClick={this.handleDiv}>÷</button>
            </div>
        );
    }

    handleChangeNum1 = event => this.setState({
        num1: parseInt(event.target.value)
    });

    handleChangeNum2 = event => this.setState({
        num2: parseInt(event.target.value)
    });

    handlePlus = () => this.setState({
        value: this.state.num1 + this.state.num2
    });

    handleMinus = () => this.setState({
        value: this.state.num1 - this.state.num2
    });

    handleMul = () => this.setState({
        value: this.state.num1 * this.state.num2
    });

    handleDiv = () => this.setState({
        value: this.state.num1 / this.state.num2
    });
}

export default Counter;
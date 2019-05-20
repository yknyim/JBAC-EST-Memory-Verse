import React, { Component } from 'react';
import '../index.css';

export class MemoryVerse extends Component {
    constructor(props){
        super(props);
        this.state = {
            hidden1: '____',
            hidden2: '__',
            hidden3: '________ ___ ____',
            hidden4: '______',
            hidden5: '_',
            hidden6: '_'
        }
    }
    render() {
        return (
        <div>
            <div className="MemoryVerse">
                {`...the ${this.state.hidden1} your ${this.state.hidden2} is with you ${this.state.hidden3}." ( ${this.state.hidden4} ${this.state.hidden5}:${this.state.hidden6} )`}
            </div>
            <br />
            <div>
                <ol className="Questions">
                    <div className="Test">
                        <li style={{marginLeft: '10px'}}>What goes in the first 2 blanks?
                            <br />
                            <ul>
                            <br />
                                <li className="AnswerChoice" onClick={this._answer1}>LORD, GOD</li>
                                <li className="AnswerChoice" onClick={this._notAnswer1}>LORD, FATHER</li>
                            </ul>
                            <br />
                            <button className='button' onClick={this._answer1} style={{marginRight: '50px'}}>Answer</button>
                        </li>
                    </div>
                    <div className="Test2">
                        <li style={{marginLeft: '100px'}}>What goes in the next 3 blanks?
                            <br />
                            <ul>
                            <br />
                                <li className="AnswerChoice" onClick={this._answer2}>WHEREVER YOU GO</li>
                                <br />
                                <li className="AnswerChoice" onClick={this._notAnswer2}>WHEREVER YOU ROAM</li>
                            </ul>
                            <br />
                            <button className='button' onClick={this._answer2} style={{marginRight: '50px'}}>Answer</button>
                        </li>
                    </div>
                    <div className="Test3">
                        <li style={{marginLeft: '100px'}}>What book goes in the blank?
                            <br />
                            <ul>
                            <br />
                                <li className="AnswerChoice" onClick={this._notAnswer3}>DEUTERONOMY</li>
                                <li className="AnswerChoice" onClick={this._answer3}>JOSHUA</li>
                            </ul>
                            <br />
                            <button className='button' onClick={this._answer3} style={{marginRight: '50px'}}>Answer</button>
                        </li>
                    </div>

                    <div className="Test4">
                        <li style={{marginLeft: '100px', marginRight: '30px'}}>What chapter and verse goes in the blanks?
                            <br />
                            <ul>
                            <br />
                                <li className="AnswerChoice" onClick={this._notAnswer4}>9:1</li>
                                <li className="AnswerChoice" onClick={this._answer4}>1:9</li>
                            </ul>
                            <br />
                            <button className='button' onClick={this._answer4}>Answer</button>
                        </li>
                    </div>
                </ol>
            </div>
        </div>
        )
    }

    _answer1 = () => {
        this.setState({
            hidden1: 'LORD',
            hidden2: 'GOD'
        })
    };

    _notAnswer1 = () => {
        this.setState({
            hidden1: 'LORD',
            hidden2: 'FATHER'
        })
    };

    _answer2 = () => {
        this.setState({
            hidden3: 'WHEREVER YOU GO'
        })
    };

    _notAnswer2 = () => {
        this.setState({
            hidden3: 'WHEREVER YOU ROAM'
        })
    };

    _answer3 = () => {
        this.setState({
            hidden4: 'JOSHUA'
        })
    };

    _notAnswer3 = () => {
        this.setState({
            hidden4: 'DEUTERONOMY'
        })
    };

    _answer4 = () => {
        this.setState({
            hidden5: '1',
            hidden6: '9'
        })
    };

    _notAnswer4 = () => {
        this.setState({
            hidden5: '9',
            hidden6: '1'
        })
    };
}

export default MemoryVerse

import React, { Component } from 'react';
import '../App.css'

export default class ToDoList extends Component {
    constructor() {
        super();

        this.getText = this.getText.bind(this);
        this.addDiv = this.addDiv.bind(this);
        this.updateInput = this.updateInput.bind(this);

        this.state = {
            inp: '',
            inputs: [],
        };
    }

    getText(e) {
        this.setState({
            inp: e.target.value,
        });
    }

    addDiv() {
        if (this.state.inp === '') {
            return;
        }
        let oldVal = this.state.inp;
        let oldInputs = [...this.state.inputs];

        oldInputs.push(oldVal);

        this.setState({
            inp: '',
            inputs: oldInputs,
        });
    }

    updateInput(e, ind) {
        let oldInputArr = [...this.state.inputs];
        oldInputArr[ind] = e.target.value;

        this.setState({
            inputs: oldInputArr,
        });
    }

    deleteData = (ind) => {
        let oldIns = [...this.state.inputs];
        oldIns.splice(ind, 1);

        this.setState({
            inp: '',
            inputs: oldIns,
        });
    };

    render() {
        return (
            <>
                <div className='bigbody'>
                    <h1 className='heading'>To-Do App</h1>
                    <img
                        src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/todo-app-bot.png"
                    />
                    <div className='Body'>
                        <div className='ADiv'>
                            <input
                                type='text'
                                className='input'
                                onChange={this.getText}
                                value={this.state.inp}
                                placeholder='Type here..'
                            />
                            <button onClick={this.addDiv}>ADD</button>
                        </div>
                    </div>
                    <br />
                    <div className='textarea'>{this.state.inp} </div>
                    <br />

                    {this.state.inputs.map((item, ind) => {
                        return (
                            <div key={ind}>
                                <input
                                    className='outputs'
                                    type='text'
                                    value={item}
                                    onChange={(e) => this.updateInput(e, ind)}
                                />
                                <button className='deletebutton' onClick={() => this.deleteData(ind)}>Delete</button>
                                <br />
                            </div>
                        );
                    })}
                </div>
            </>
        )
    }
}

import React, { Component } from 'react';
import '../App.css';

class TaskInput extends Component {
    render() {
        const { value, onChange, onAdd } = this.props;
        return (
            <div className='ADiv'>
                <input
                    type='text'
                    className='input'
                    value={value}
                    onChange={onChange}
                    placeholder='Type here..'
                />
                <button onClick={onAdd}>ADD</button>
            </div>
        );
    }
}

class TaskItem extends Component {
    render() {
        const { value, onChange, onDelete } = this.props;
        return (
            <div>
                <input
                    className='outputs'
                    type='text'
                    value={value}
                    onChange={onChange}
                />
                <button className='deletebutton' onClick={onDelete}>Delete</button>
                <br />
            </div>
        );
    }
}

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            inp: '',
            inputs: [],
        };
    }

    getText = (e) => {
        this.setState({
            inp: e.target.value,
        });
    };

    addDiv = () => {
        if (this.state.inp === '') {
            return;
        }

        const { inp, inputs } = this.state;
        this.setState({
            inp: '',
            inputs: [...inputs, inp],
        });
    };

    updateInput = (e, ind) => {
        const oldInputArr = [...this.state.inputs];
        oldInputArr[ind] = e.target.value;

        this.setState({
            inputs: oldInputArr,
        });
    };

    deleteData = (ind) => {
        const oldIns = [...this.state.inputs];
        oldIns.splice(ind, 1);

        this.setState({
            inp: '',
            inputs: oldIns,
        });
    };

    render() {
        return (
            <div className='bigbody'>
                <h1 className='heading'>To-Do App</h1>
                <img
                    src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/todo-app-bot.png"
                    alt="ToDo App Bot"
                />
                <div className='Body'>
                    <TaskInput
                        value={this.state.inp}
                        onChange={this.getText}
                        onAdd={this.addDiv}
                    />
                </div>
                <br />

                {this.state.inputs.map((item, ind) => (
                    <TaskItem
                        key={ind}
                        value={item}
                        onChange={(e) => this.updateInput(e, ind)}
                        onDelete={() => this.deleteData(ind)}
                    />
                ))}
            </div>
        );
    }
}

export default ToDoList;

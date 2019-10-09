import React, { Component } from "react";
import FieldForAdd from "./FieldForAdd";
import List from "./List";
import '../style/todo-list.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement;
        this.state = {
            list:[]
        }

        this.addNewTask = this.addNewTask.bind(this);
    }

    addNewTask() {
        const list = this.state.list.slice();
        list.push(this.inputElement.value);
        this.setState({
            list: list
        });
        this.inputElement.value = "";
    }

    removeTask(value) {
        let list = this.state.list.slice();
        list = list.filter(item => item != value);
        this.setState({
            list: list
        });
    }

    render(){
        return (
            <div className="todo-list">
                <div className="todo-list__title">Todoshka</div>
                <FieldForAdd onClick={this.addNewTask} inputRef={el => this.inputElement = el}/>
                <List allTasks={this.state.list} onComplete={this.removeTask.bind(this)}/>
            </div>
        );
    }
}

export default TodoList;
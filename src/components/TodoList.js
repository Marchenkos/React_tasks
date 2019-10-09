import React, { Component } from "react";
import FieldForAdd from "./FieldForAdd";
import List from "./List";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }

        this.addNewTask = this.addNewTask.bind(this);
    }

    addNewTask() {
        const element = document.querySelector(".current-task__name");
        const list = this.state.list.slice();
        list.push(element.value);
        this.setState({
            list: list
        });
        element.value = "";

        console.log(this.state.list);
    }

    removeTask(id) {
        const element = document.getElementById(id);
        element.remove();
    }

    render(){
        return (
            <div className="todo-list">
                <div className="todo-list__title">Todoshka</div>
                <FieldForAdd onClick={this.addNewTask}/>
                <List allTasks={this.state.list} onComplete={this.removeTask}/>
            </div>
        );
    }
}

export default TodoList;
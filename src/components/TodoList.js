import React from "react";
import FieldForAdd from "./FieldForAdd";
import Task from "./Task"
import '../style/todo-list.css'

class TodoList extends React.Component {
    addNewTask = (e, value) => {
        e.preventDefault();
        this.props.addItemInList(value);
    }

    removeTask = (value) => {
        this.props.removeItemInList(value);
    }

    render(){
        const listItems = this.props.list.map((task, index) =>
            <Task key={index} id={index} value={task} onComplete={this.removeTask}/>
        );

        return (
            <div className="todo-list">
                <div className="todo-list__title">Todoshka</div>
                <FieldForAdd handleSubmit={this.addNewTask} />
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default TodoList;
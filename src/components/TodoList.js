import React from "react";
import FieldForAdd from "./FieldForAdd";
import Task from "./Task"
import '../style/todo-list.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    addNewTask = (e, value) => {
        e.preventDefault();
        const list = this.state.list;
        list.push(value);
        this.setState({list});
    }

    removeTask = (value) => {
        let list = this.state.list;
        list = list.filter(item => item != value);
        this.setState({list});
    }

    render(){
        const listItems = this.state.list.map((task, index) =>
            <Task key={index} value={task} onComplete={this.removeTask}/>
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
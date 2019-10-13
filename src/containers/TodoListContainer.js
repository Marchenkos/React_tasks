import React from "react";
import { connect } from "react-redux";
import { addItemInList } from "../actions/addItemInList";
import { removeItemInList } from "../actions/removeItemInList";
import TodoList from "../components/TodoList";

class TodoListContainer extends React.Component {
    render() {
        return (
            <TodoList
                list={this.props.list}
                addItemInList={this.props.addItemInList}
                removeItemInList={this.props.removeItemInList}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addItemInList: task => dispatch(addItemInList(task)),
        removeItemInList: list => dispatch(removeItemInList(list))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
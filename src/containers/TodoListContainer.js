import React from "react";
import { connect } from "react-redux";
import { addItemInList, removeItemInList } from "../actions/changeList";
import TodoList from "../components/TodoList";

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

export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
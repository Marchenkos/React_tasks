import React, { Component } from "react";
import Task from "./Task"

function List(props){
    const allTasks = props.allTasks;
    const listItems = allTasks.map((task, index) =>
        <Task key={index} value={task} onComplete={props.onComplete}/>
    );
  return (
    <ul>
        {listItems}
    </ul>
  );
}

export default List;
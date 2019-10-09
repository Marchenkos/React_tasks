import React, { Component } from "react";
import Task from "./Task"

function List(props){
    const allTasks = props.allTasks;
    console.log(props.allTasks);
    const listItems = allTasks.map((task, index) =>
        <Task key={index} id={index} value={task} onComplete={props.onComplete}/>
    );

    console.log(listItems);
  return (
    <ul>
        {listItems}
    </ul>
  );
}

export default List;
import React, { Component } from "react";
import '../style/comments-field.css'

function Comments(props) {
    return (
        <div className="comments-field">
            <button className="comments-field__comment" onClick={() => props.onClick("countComment")}>Comments</button>
            <div className="comments-field__count">{props.count}</div>
        </div>
    );
}
export default Comments;
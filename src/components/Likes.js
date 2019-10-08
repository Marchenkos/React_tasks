import React, { Component } from "react";
import '../style/likes-field.css'

function Likes(props) {
    return (
        <div className="likes-field">
            <button className="likes-field__like" onClick={() => props.onClick("countLike")}>Likes</button>
            <div className="likes-field__count">{props.count}</div>
        </div>
    );
}
export default Likes;
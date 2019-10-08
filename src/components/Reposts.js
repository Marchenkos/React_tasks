import React, { Component } from "react";
import '../style/reposts-field.css'

function Reposts(props) {
    return (
        <div className="reposts-field">
            <button className="reposts-field__repost" onClick={() => props.onClick("countReposts")}>Reposts</button>
            <div className="reposts-field__count">{props.count}</div>
        </div>
    );
}
export default Reposts;
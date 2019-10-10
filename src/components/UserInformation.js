import React from "react";
import "../style/user.css";

function UserInformation(props) {
    return (
        <div className="user">
            <img className="user__avatar" src={props.avatarUrl} alt={props.userName}></img>
            <div className="user__name">{props.userName}</div>
            {props.children}
        </div>
    );
}

export default UserInformation;
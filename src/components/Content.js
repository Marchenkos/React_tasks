import React from "react";
import "../style/content.css"

function Content(props) {
    return (
        <div className="post-content">
            <div className="post-content__description">{props.text}</div>
            <img className="post-content__img" src={props.imgUrl} />
        </div>
    );
}

export default Content;
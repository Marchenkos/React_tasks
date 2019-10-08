import React from "react";
import ReactDOM from "react-dom";
import Post from "./components/Post";

const post = {
    date: new Date(),
    user: {
        name: "Kseniya",
        avatarUrl: "./src/img/avatar.jpg",
    },
    postContent: {
        text:"I love dogs",
        imgUrl: "./src/img/korgy.jpg",
    }
}
ReactDOM.render(<Post 
    user={post.user}
    postContent={post.postContent}
    date={post.date}
    />,
    document.getElementById("root")
);
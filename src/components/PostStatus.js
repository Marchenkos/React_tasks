import React, { Component } from "react";
import Comments from "./Comments";
import Likes from "./Likes"
import Reposts from "./Reposts"
import '../style/post-status.css'

class PostStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countLike: 0,
            countComment: 0,
            countReposts: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(property) {
        this.setState({
            [property]: this.state[property] + 1
        })
    }

    render(){
        return (
            <div className="post-status">
                <Likes count={this.state.countLike} onClick={this.handleClick}/>
                <Comments count={this.state.countComment} onClick={this.handleClick}/>
                <Reposts count={this.state.countReposts} onClick={this.handleClick}/>
            </div>
        );
    }
}

export default PostStatus;
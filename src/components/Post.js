import React, { Component } from "react";
import UserInformation from "./UserInformation";
import Content from "./Content";
import Assessment from "./Assessment";
import "../style/post.css";
import "../style/post-status.css";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0,
            comment: 0,
            repost: 0,
            assessmentType: ["like", "comment", "repost"]
        }
    }

    formatDate(date) {
        return date.toLocaleDateString();
    }

    handleClick = (property) => {
        console.log(property);
        this.setState({
            [property]: this.state[property] + 1
        })
    }

    render() {
        const state = this.state;

        return (
            <div className="post">
                <UserInformation userName={this.props.user.name} avatarUrl={this.props.user.avatarUrl}>
                    <div className="post__date">
                        {this.formatDate(this.props.date)}
                    </div>
                </UserInformation>
                <Content text={this.props.postContent.text} imgUrl={this.props.postContent.imgUrl}/>
                <div className="post-status">
                    <Assessment count={state.like} type={state.assessmentType[0]} onClick={this.handleClick}/>
                    <Assessment count={state.comment} type={state.assessmentType[1]} onClick={this.handleClick}/>
                    <Assessment count={state.repost} type={state.assessmentType[2]} onClick={this.handleClick}/>
                </div>
        </div>
        );
    }
}

export default Post;

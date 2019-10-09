import React, { Component } from "react";
import UserInformation from "./UserInformation";
import Content from "./Content";
import PostStatus from "./PostStatus";
import "../style/post.css";

class Post extends React.Component {
    formatDate(date) {
        return date.toLocaleDateString();
    }

    render() {
        return (
            <div className="post">
                <UserInformation userName={this.props.user.name} avatarUrl={this.props.user.avatarUrl}>
                    <div className="post__date">
                        {this.formatDate(this.props.date)}
                    </div>
                </UserInformation>
                <Content text={this.props.postContent.text} imgUrl={this.props.postContent.imgUrl}/>
                <PostStatus />
            </div>
        );
    }
}

export default Post;

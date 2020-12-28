import { Avatar, Divider } from "@material-ui/core";
import React from "react";
import "./Post.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Post = ({ profileURL, user, time, imageURL, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profileURL} />
        <div className="post__topInfo">
          <h4>{user}</h4>
          <h5>{time}</h5>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__message">{message}</div>
      <div className="post__image">
        <img src={imageURL} />
      </div>
      <Divider />
      <div className="post__bottom">
        <div className="post__bottomLike">
          <ThumbUpAltIcon />
          <h5>Like</h5>
        </div>
        <div className="post__bottomComment">
          <ChatBubbleOutlineIcon />
          <h5>Comment</h5>
        </div>
        <div className="post__bottomShare">
          <SendIcon />
          <h5>Share</h5>
        </div>
        <div className="post__bottomAcc">
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;

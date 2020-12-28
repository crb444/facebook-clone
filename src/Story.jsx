import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

const Story = ({ image, profileSrc, title }) => {
  return (
    <div className="story">
      <img src={image} />
      <div className="story__avatar">
        <Avatar src={profileSrc} />
      </div>

      <h4>{title}</h4>
    </div>
  );
};

export default Story;

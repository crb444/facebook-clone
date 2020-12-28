import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageCreator from "./MessageCreator";
import Post from "./Post";
import db from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageCreator />

      {posts.map((post) => {
        return (
          <Post
            user={post.user}
            message={post.message}
            profileURL={post.profileURL}
            time={new Date(post?.time?.toDate()).toUTCString()}
            imageURL={post.imageURL}
          />
        );
      })}
    </div>
  );
};

export default Feed;

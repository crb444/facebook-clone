import { Avatar } from "@material-ui/core";
import React, { useState, useContext } from "react";
import "./MessageCreator.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoodIcon from "@material-ui/icons/Mood";
import { UserContext } from "./UserContext";
import db from "./firebase";
import firebase from "firebase";

const MessageCreator = () => {
  const [message, setMessage] = useState("");
  const [url, setURL] = useState("");
  const [user, setUser] = useContext(UserContext);

  const userPost = (e) => {
    e.preventDefault();
    db.collection("posts")
      .add({
        user: user.user.displayName,
        message: message,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        imageURL: url,
        profileURL: user.user.photoURL,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    setMessage("");
    setURL("");
  };

  return (
    <div className="messageCreator">
      <div className="messageCreator__top">
        <Avatar src={user.user.photoURL} />
        <form>
          <div className="messageCreator__inputMessage">
            <input
              type="text"
              placeholder={`Whats on your mind, ${user?.user?.displayName} ?`}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className="messageCreator__inputImageUrl">
            <input
              type="text"
              placeholder="Image URL (optional)"
              value={url}
              onChange={(e) => setURL(e.target.value)}
            />
          </div>
          <button type="submit" onClick={userPost} />
        </form>
      </div>
      <div className="messageCreator__bottom">
        <div className="messageCreator__bottomVideoCam">
          <VideocamIcon />
          <h4>Live Video</h4>
        </div>
        <div className="messageCreator__bottomPhotoLib">
          <PhotoLibraryIcon />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageCreator__bottomMood">
          <MoodIcon />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default MessageCreator;

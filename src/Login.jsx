import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { UserContext } from "./UserContext";

const Login = () => {
  const [user, setUser] = useContext(UserContext);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => setUser(result))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__box">
        <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" />
        <h4>Welcome</h4>
        <Button onClick={signIn}>Login</Button>
      </div>
    </div>
  );
};

export default Login;

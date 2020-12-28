import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StoreIcon from "@material-ui/icons/Storefront";
import UsersIcon from "@material-ui/icons/SupervisedUserCircle";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Header.css";
import { UserContext } from "./UserContext";

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="header">
      <div className="header__left">
        <img src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" />
        <div className="header__leftInput">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__centerOption header__centerOption--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__centerOption">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__centerOption">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__centerOption">
          <StoreIcon fontSize="large" />
        </div>
        <div className="header__centerOption">
          <UsersIcon fontSize="large" />
        </div>
      </div>
      <div className="header__end">
        <Avatar src={user?.user?.photoURL} />
        <h4>{user?.user?.displayName}</h4>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;

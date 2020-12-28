import React, { useContext } from "react";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import MessageIcon from "@material-ui/icons/Message";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Sidebar.css";
import { UserContext } from "./UserContext";

const Sidebar = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="sidebar">
      <SidebarRow title={user?.user?.displayName} src={user?.user?.photoURL} />
      <SidebarRow
        title="COVID-19 Information Centre"
        Icon={LocalHospitalIcon}
      />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleAltIcon} />
      <SidebarRow title="Messenger" Icon={MessageIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="Marketplace" Icon={ExpandMoreIcon} />
    </div>
  );
};

export default Sidebar;

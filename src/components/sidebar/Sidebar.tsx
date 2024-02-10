import React from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetOffIcon from "@mui/icons-material/HeadsetOff";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordIcon.png"></img>
        </div>
        <div className="serverIcon">
          <img src="./icon.png"></img>
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h1>Discord</h1>
          <ExpandMoreIcon />
        </div>
        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>ふなばしごはんちゃんねる</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
          <div className="sidebarFooter">
            <div className="sidebarAccont">
              <img src="./icon.png" alt="" />
              <div className="accountName">
                <h4>やまだたろう</h4>
                <span>#123456</span>
              </div>
            </div>
            <div className="sidebarVoice">
              <MicIcon />
              <HeadsetOffIcon />
              <SettingsRoundedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

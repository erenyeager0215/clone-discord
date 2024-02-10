import React from "react";
import "./ChatHeader.scss";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeaderHash">#</span>
          Udemy
        </h3>
      </div>
      <div className="chatHeaderRight">
        <NotificationsRoundedIcon />
        <PushPinRoundedIcon />
        <PeopleRoundedIcon />
        <div className="chatHeaderSearch">
          <input type="text" placeholder="検索" />
          <SearchRoundedIcon />
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
};

export default ChatHeader;

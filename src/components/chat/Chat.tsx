import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import GifRoundedIcon from "@mui/icons-material/GifRounded";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";

function Chat() {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chatInput */}
      <div className="chatInput">
        <AddCircleOutlineRoundedIcon />
        <form action="">
          <input type="text" placeholder="#Udemyへメッセージを送信" />
          <button type="submit" className="chatInputbutton">
            送信
          </button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardRoundedIcon />
          <GifRoundedIcon />
          <SentimentSatisfiedAltRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;

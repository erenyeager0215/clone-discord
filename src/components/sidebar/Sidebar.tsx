import React from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png"></img>
        </div>
        <div className="serverIcon">
          <img src="./logo192.png"></img>
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h1>Discord</h1>
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

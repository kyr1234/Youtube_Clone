import React from "react";
import "./Sidebar.css";
import SidebarModal from "./SidebarModal";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import WatchLaterRoundedIcon from "@material-ui/icons/WatchLaterRounded";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarModal title="HOME" selected Icon={HomeIcon} />
      <SidebarModal title="Trending" Icon={WhatshotIcon} />
      <SidebarModal title="Subscriptions" Icon={SubscriptionsIcon} />
      <hr />

      <SidebarModal title="Library" Icon={VideoLibraryIcon} />
      <SidebarModal title="History" Icon={HistoryIcon} />
      <SidebarModal title="Your Videos" Icon={VideocamRoundedIcon} />
      <SidebarModal title="Watch Later" Icon={WatchLaterRoundedIcon} />
      <SidebarModal title="Liked Videos" Icon={ThumbUpRoundedIcon} />
      <SidebarModal title="Show More" Icon={ArrowDropDownRoundedIcon} />
      <hr />
    </div>
  );
}

export default Sidebar;

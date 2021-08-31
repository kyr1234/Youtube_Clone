import React from "react";
import "./ChannelDESC.css";
import { Avatar } from "@material-ui/core";

function Channel_desc({ src, channelname, descp }) {
  return (
    <div className="Channel_desc">
      <Avatar className="avatar" src={src} />
      <div className="details">
        <h2>{channelname}</h2>
        <h4>{descp}</h4>
      </div>
    </div>
  );
}

export default Channel_desc;

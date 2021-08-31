import React from "react";
import "./VideoSearchModal.css";
import { Avatar } from "@material-ui/core";

function VideoSearchModal({ imgsrc, src, title, views, timestamp }) {
  return (
    <div className="VideoSearchModal">
      <img src={imgsrc} className="img" />

      <div className="Contents">
        <h3>{title}</h3>

        <div className="channel_desc">
          <Avatar src={src} />
          <h3>KYR</h3>
        </div>

        <div className="views">
          <h3>{views}</h3>
          <h3 className="timestamp">{timestamp}</h3>
        </div>
      </div>
    </div>
  );
}

export default VideoSearchModal;

import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import VideoSearchModal from "./VideoSearchModal";
import ChannelRow from "./ChannelDESC";

function SearchPage() {
  return (
    <div className="SearchPage">
      <div className="filter_tag">
        <TuneIcon />
        <h5>FILTER</h5>
      </div>
      <hr />

      <ChannelRow
        className="channelrow"
        src="data:image/jpeg;base64,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"
        channelname="KYR"
        descp="The Channel Brings you the best and latest technology with hands on project that can be put on your portfolio website So join me at my channel and subscribe it so get regular updates"
      />
      <hr />

      <h2 className="heading">ENJOY MY VIDEOS</h2>

      <div className="videocoll">
        <VideoSearchModal
          imgsrc="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
          src="https://www.w3schools.com/howto/img_avatar.png"
          title="LEARN FROM THE GOOD TEACHERS ACROSS TH WORLD"
          views="200M"
          timestamp="3 days Ago"
        />
        <VideoSearchModal
          imgsrc="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
          src="https://www.w3schools.com/howto/img_avatar.png"
          title="LEARN FROM THE GOOD TEACHERS ACROSS TH WORLD"
          views="200M"
          channel="TECH GURU"
          timestamp="3 days Ago"
        />
        <VideoSearchModal
          imgsrc="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
          src="https://www.w3schools.com/howto/img_avatar.png"
          title="LEARN FROM THE GOOD TEACHERS ACROSS TH WORLD"
          views="200M"
          channel="TECH GURU"
          timestamp="3 days Ago"
        />
        <VideoSearchModal
          imgsrc="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
          src="https://www.w3schools.com/howto/img_avatar.png"
          title="LEARN FROM THE GOOD TEACHERS ACROSS TH WORLD"
          views="200M"
          channel="TECH GURU"
          timestamp="3 days Ago"
        />
        <VideoSearchModal
          imgsrc="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
          src="https://www.w3schools.com/howto/img_avatar.png"
          title="LEARN FROM THE GOOD TEACHERS ACROSS TH WORLD"
          views="200M"
          channel="TECH GURU"
          timestamp="3 days Ago"
        />
        <VideoSearchModal
          imgsrc="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
          src="https://www.w3schools.com/howto/img_avatar.png"
          title="LEARN FROM THE GOOD TEACHERS ACROSS TH WORLD"
          views="200M"
          channel="TECH GURU"
          timestamp="3 days Ago"
        />
        <VideoSearchModal
          imgsrc="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
          src="https://www.w3schools.com/howto/img_avatar.png"
          title="LEARN FROM THE GOOD TEACHERS ACROSS TH WORLD"
          views="200M"
          channel="TECH GURU"
          timestamp="3 days Ago"
        />
        <VideoSearchModal
          imgsrc="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
          src="https://www.w3schools.com/howto/img_avatar.png"
          title="LEARN FROM THE GOOD TEACHERS ACROSS TH WORLD"
          views="200M"
          channel="TECH GURU"
          timestamp="3 days Ago"
        />
        <VideoSearchModal
          imgsrc="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
          src="https://www.w3schools.com/howto/img_avatar.png"
          title="LEARN FROM THE GOOD TEACHERS ACROSS TH WORLD"
          views="200M"
          channel="TECH GURU"
          timestamp="3 days Ago"
        />
      </div>
    </div>
  );
}
export default SearchPage;

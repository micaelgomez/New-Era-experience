import React from "react";
import "./video.scss";
import ReactPlayer from "react-player";
import golDelMes from "../../assets/golDelMes.mp4";

function Video() {
  return (
    <div className="video" >
      <ReactPlayer className="video" url={golDelMes} controls loop />
    </div>
  );
}

export default Video;

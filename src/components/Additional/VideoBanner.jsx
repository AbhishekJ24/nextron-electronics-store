import React from "react";

function VideoBanner({ video_url }) {
  return <video autoPlay className="min-w-full" src={video_url}></video>;
}

export default VideoBanner;

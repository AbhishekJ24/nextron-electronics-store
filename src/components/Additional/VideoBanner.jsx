import React from "react";

function VideoBanner({ video_url }) {
  return <video autoPlay loop className="min-w-full" src={video_url}></video>;
}

export default VideoBanner;

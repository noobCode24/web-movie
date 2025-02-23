/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";

const VideoPlay = ({ url }) => {
  return <ReactPlayer width={"100%"} height={"100%"} url={url} controls />;
};

export default VideoPlay;

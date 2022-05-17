import "./VideoList.css";
import VideoListItem from "components/VideoListItem/VideoListItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const foundVideos = videos.map((video, index) => {
    return (
    <VideoListItem 
      onVideoSelect={onVideoSelect} 
      video={video} 
      key={index} 
    />);
  });
  // TODO Left off at 131
  return (
    <div className="container videoList__container">
      {foundVideos}  
    </div>
  );
}

export default VideoList;
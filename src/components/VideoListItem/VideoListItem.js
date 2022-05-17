import "./VideoListItem.css"

const VideoListItem = ({ video, onVideoSelect }) => {
  const thumbnail = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  
  // TODO Left off at 131
  return (
    <div onClick={() => onVideoSelect(video.title)} className="container video__container">
      <div>
        <img className="video__thumbnail" src={thumbnail} alt={title} />
      </div>
      <h4 className="video__title">{video.snippet.title}</h4>
    </div>
  )
}

export default VideoListItem;
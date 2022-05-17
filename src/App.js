import SearchBar from "./components/SearchBar/SearchBar";
import youtube from "./apis/youtube";
import { useState } from "react";
import VideoList from "components/VideoList/VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onQuerySubmit = async query => {
    const res = await youtube.get("/search", { params: { q: query } })
    setVideos(res.data.items);
  };

  const onVideoSelect = (video) => {
    console.log("From App.js", video);
  };
  // TODO Left off at 131
  return (
    <div className="app__container">
      <SearchBar onQuerySubmit={onQuerySubmit} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
}

export default App;
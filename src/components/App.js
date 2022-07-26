import React, { useState, useEffect } from "react";
import SeachBar from "./SearchBar";
import VideoList from "./ VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null); //selection
  const [videos, search] = useVideos('Tennis 2022');

  useEffect(() => {
    setSelectedVideo(videos[0]); // select first video in list
  }, [videos]);
  //
  return (
    <div className="ui container">
      <SeachBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {/* <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} /> */}
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};;

export default App;
import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (search) => {
  const [videos, setVideos] = useState([]); //videos with output

  useEffect(() => {
    // videos
    onTermSubmit(search); //input
  }, []);

  // video state with output
  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items); // videos
  };

  return [videos, search];
};

export default useVideos;
import axios from 'axios';

const KEY = "AIzaSyCzDURrzZ3A84AOg-vImY69e3G3Ay7qY-Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
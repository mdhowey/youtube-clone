import axios from "axios";

const KEY = "AIzaSyAYB0ONARha64Dt1IpXBNjEj5par-V1c5o";

export default axios.create({
  baseURL:  "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 100,
    key: KEY,
  }
});
import axios from "axios";
const urlServer = "https://api.musixmatch.com/ws/1.1/";

const instance = axios.create({
  baseURL: urlServer,
});

const options = {
  params: {
    apikey: "5c022eb9a8afe50c7e0a7417da0948d9",
  },
};

// GET all users by pages
export const searchTrack = (songName) =>
  instance.get(`track.search?q_track=${songName}`, options);

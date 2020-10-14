import axios from "axios";
const urlServer = "https://songs-io.herokuapp.com/";

const instance = axios.create({
  baseURL: urlServer,
});

// GET all users by pages
export const searchTrack = (songName, sort) =>
  instance.get(`/searchTracks/${songName}/${sort}`);

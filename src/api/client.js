import axios from "axios";
const urlServer = "http://localhost:3000";

const instance = axios.create({
  baseURL: urlServer,
});

// GET all users by pages
export const searchTrack = (songName, sort) =>
  instance.get(`/searchTracks/${songName}/${sort}`);

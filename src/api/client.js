import axios from "axios";
// const urlServer = "http://localhost:3000";
const urlServer = "https://songs-io.herokuapp.com";

const instance = axios.create({
  baseURL: urlServer,
});

export const searchTrack = (songName, sort) =>
  instance.get(`/search-tracks/${songName}/${sort}`);

export const getLyric = (id) => instance.get(`/track-liryc/id/${id}`);

import axios from "axios";

const isDev = process.env.ENV === "development";

const urlServer = isDev
  ? "http://localhost:3000"
  : "https://songs-io.herokuapp.com";

// const urlServer = "http://localhost:3000";
const instance = axios.create({
  baseURL: urlServer,
});

export const searchTrack = (songName, sort) =>
  instance.get(`/search-tracks/${songName}/${sort}`);

export const getLyric = (id) => instance.get(`/track-liryc/id/${id}`);

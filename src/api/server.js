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

export const searchTrack = (songName, sort) =>
  instance.get(
    `track.search?q_track=${songName}&page_size=12&s_track_rating=${sort}`,
    options
  );

export const getLyric = (id) =>
  instance.get(`track.lyrics.get?track_id=${id}`, options);

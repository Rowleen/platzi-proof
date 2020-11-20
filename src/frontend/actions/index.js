export const setLyrics = (payload) => ({
  type: "SET_LYRICS_LIST",
  payload,
});

export const setLyric = (payload) => ({
  type: "SET_LYRIC",
  payload,
});

export const isLoading = (payload) => ({
  type: "IS_LOADING",
  payload,
});

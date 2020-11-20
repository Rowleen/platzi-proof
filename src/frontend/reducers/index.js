const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LYRICS_LIST":
      return {
        ...state,
        lyricsList: [...action.payload],
      };

    case "SET_LYRIC":
      return {
        ...state,
        lyric: action.payload,
      };

    case "SET_GENRES_LIST":
      return {
        ...state,
        genresList: action.payload,
      };

    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

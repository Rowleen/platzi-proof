const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LYRICS":
      return {
        ...state,
        lyrics: [action.payload],
      };
    default:
      return state;
  }
};

export default reducer;

const weatherReducer = (state = {}, action) => {
  if (action.type === "LOAD_DATA") {
    return action.payload;
  }
  return state;
};

export default weatherReducer;

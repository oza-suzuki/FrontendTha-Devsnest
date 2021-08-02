const initialName = {
  name: "",
  email: "",
};

const nameReducer = (state = initialName, action) => {
  console.log(state);
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      name: action.payload,
    };
  } else if (action.type === "CHANGE_EMAIL") {
    return {
      ...state,
      email: action.payload,
    };
  }
  return state;
};

export default nameReducer;

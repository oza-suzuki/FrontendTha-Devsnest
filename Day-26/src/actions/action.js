const changeName = (input) => {
  return {
    type: "CHANGE_NAME",
    payload: input,
  };
};

const changeEmail = (input) => {
  return {
    type: "CHANGE_EMAIL",
    payload: input,
  };
};

export { changeName, changeEmail };

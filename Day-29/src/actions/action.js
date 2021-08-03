const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const loadData = (place) => {
  return (dispatch) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=50de925b3daa9f647dbad7228c7264e0`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.list[0].main.temp);
        dispatch({
          type: "LOAD_DATA",
          payload: data,
        });
      });
  };
};

const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  };
};

export { updatePlace, loadData, toggleTheme };

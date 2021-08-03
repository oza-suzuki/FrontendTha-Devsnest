import weatherReducer from "./weatherReducer";
import placeReducer from "./placeReducer";
import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  place: placeReducer,
  weather: weatherReducer,
  theme: themeReducer,
});

export default rootReducer;

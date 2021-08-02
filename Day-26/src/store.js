import nameReducer from "./reducers/nameReducer";
import { createStore } from "redux";

const store = createStore(nameReducer);
export default store;

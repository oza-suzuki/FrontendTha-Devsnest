import { useSelector, useDispatch } from "react-redux";
import "./WeatherApp.css";
import { updatePlace, loadData } from "../../actions/action";
// import { ToggleTheme } from "../ToggleTheme";

const WeatherApp = () => {
  const place = useSelector((state) => state.place);
  const placeData = useSelector((state) => state.weather);
  // console.log("placeData", placeData);
  // const theme = useSelector((state) => state.theme);
  // console.log(theme);
  const dispatch = useDispatch();

  return (
    <div className="weatherapp">
      <div className="box">
        <div className="input">
          <input
            type="search"
            placeholder="Enter City Name"
            className="inputField"
            onChange={(e) => {
              dispatch(updatePlace(e.target.value));
            }}
          />
          <button
            className="btn btn-secondary"
            onClick={() => {
              dispatch(loadData(place));
            }}
          >
            Submit
          </button>
        </div>
      </div>
      {placeData.list ? (
        <div>
          <div className="info">
            <img
              className="desc"
              src={`http://openweathermap.org/img/w/${placeData.list[0].weather[0].icon}.png`}
              alt="imgicon"
            />
            <h2 className="location">
              <i className="fas fa-search-location">
                <h3>{place}</h3>
              </i>
            </h2>

            <h1>{placeData.list[0].main.temp}°Cel</h1>
            <h3 className="temp_max">
              Min : {placeData.list[0].main.temp_min}
              °Cel | Max : {placeData.list[0].main.temp_max}
              °Cel
            </h3>
            <h4> Humidity : {placeData.list[0].main.humidity}%</h4>
          </div>
        </div>
      ) : (
        <p id="nodata">No Data Found</p>
      )}
    </div>
  );
};

export default WeatherApp;

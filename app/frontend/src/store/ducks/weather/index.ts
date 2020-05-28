import { Reducer } from "redux";
import { IWeatherState } from "./types";

const INITIAL_STATE: IWeatherState = {
  main: {
    feels_like: 0,
    temp: 0,
    humidity: 0
  },
  sys: {
    country: ""
  },
  weather: [
    {description: "", main: ""}
  ],
  name: "",
  loading: false,
  error: {
    got: false,
    searchedCity: "",
  },
  searched: false
};

const reducer: Reducer<IWeatherState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...INITIAL_STATE,
        searched: true,
        loading: true,
      }
    case "SUCESS":
      return {
        ...INITIAL_STATE,
        error: {
          got: false,
          searchedCity: "..."
        },
        ...action.payload
      }
    case "FAIL":
      return {
        ...INITIAL_STATE,
        error: {
          got: true,
          searchedCity: action.payload.cityName
        },
        searched: true
      }
    default:
      return state;
  }
}

export default reducer;

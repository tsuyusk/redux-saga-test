interface IWeather {
  main: string;
  description: string;
}

export interface IWeatherState {
  weather: IWeather[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  name: string;
  loading: boolean;
  error: {
    got: boolean;
    searchedCity: string;
  };
  searched: boolean;
}
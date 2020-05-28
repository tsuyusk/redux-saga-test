import { useState, useEffect } from "react";
import axios, { Canceler } from "axios";

import { IWeatherState } from "../../../store/ducks/weather/types";

const useWeatherApi = (cityName: string)  => {
  const [data, setData] = useState<IWeatherState>();
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setData(undefined);
  }, [cityName]);

  useEffect(() => {
    setError(false);
    if (cityName.trim().length === 0) return;
    let cancel: Canceler;
    axios({
      url: `https://openweathermap.org/data/2.5/weather?q=${cityName}&appid=439d4b804bc8187953eb36d2a8c26a02`,
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => setData({
      ...res.data,
      searched: true
    }))
    .catch(err =>{
      if (axios.isCancel(err)) return;
      setError(true);
    });
  }, [cityName]);

  return {
    data,
    error
  };
}

export default useWeatherApi;

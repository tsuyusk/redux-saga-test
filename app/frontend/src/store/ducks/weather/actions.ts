import { action } from "typesafe-actions";

import { IWeatherState } from "./types";

export const requestKey = () => action("REQUEST_KEY");

export const request = () => action("REQUEST");

export const sucess = (data: IWeatherState) => action("SUCESS", data);

export const fail = (cityName: string) => action("FAIL", { cityName });

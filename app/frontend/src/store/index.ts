import { createStore,applyMiddleware , Store } from "redux";
import createSagaMiddleWare from "redux-saga";

import rootReducer from "./ducks/rootReducer";
import { IWeatherState } from "./ducks/weather/types";
import { watchInput } from "./ducks/weather/sagas";

export interface ApplicationState {
  weather: IWeatherState;
}

const sagaMiddleWare = createSagaMiddleWare();

const store: Store<ApplicationState> =
  createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(watchInput)

export default store;

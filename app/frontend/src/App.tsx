import React from 'react';
import { Provider } from "react-redux";

import store from "./store";
import WeatherBox from "./components/weatherBox";

function App() {
  return (
    <div>
    <Provider store={store}>
      <WeatherBox />
    </Provider>
    </div>
  );
}

export default App;

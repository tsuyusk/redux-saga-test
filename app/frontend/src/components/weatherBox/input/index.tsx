import React, { useState, useRef, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch, Action } from "redux";
import { Input as BootstrapInput } from "reactstrap";

import * as WeatherActions from "../../../store/ducks/weather/actions";
import useApi from "./useApi";
import { IWeatherState } from '../../../store/ducks/weather/types';

interface Props {
  requestKey(): Action;
  sucess(data: IWeatherState): Action;
  fail(cityName: string): Action;
}

const Input: React.FC<Props> = ({ requestKey, sucess, fail }) => {
  let userTimeout = useRef<number>();
  const [inputVal, setInputVal] = useState("");
  const [query, setQuery] = useState("");
  
  const { data, error } = useApi(query);

  const handleQueryChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(ev.target.value)
  }
  
  useEffect(() => {
  if(inputVal.trim().length !== 0) {
    if (userTimeout.current) clearTimeout(userTimeout.current);
      userTimeout.current = setTimeout(() => {
      requestKey();
      setQuery(inputVal);
    }, 500);
  }
  }, [inputVal, requestKey]);

  useEffect(() => {
    if (error) {
      fail(inputVal);
    }
  }, [error, fail, inputVal]);
  

  useEffect(() => {
    if(data && data.searched) {
      sucess(data);
    }
  }, [data, sucess]);
  return (
    <div>
      <BootstrapInput className="w-50 center mx-auto" value={inputVal} onChange={handleQueryChange}/>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(WeatherActions, dispatch);

export default connect(null, mapDispatchToProps)(Input);

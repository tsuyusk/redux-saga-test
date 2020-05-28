import React from 'react';
import { connect } from "react-redux";

import { Container } from "./styled";
import { ApplicationState } from '../../store';
import Input from "./input";
import Data from "./data";
import Loading from './loading';
import Error from "./error";
import Instructions from "./instructions";

interface Props {
  loaded: boolean;
  error: {
    got: boolean;
    searchedCity: string;
  };
  searched: boolean;
}

const WeatherBox: React.FC<Props> = ({ loaded, error, searched }) => {
  return (
    <Container>
      <Input />
      {
      searched
      ?
      loaded
      ?
      <Loading />
      :
      error.got
      ?
      <Error />
      :
      <Data />
      :
      <Instructions />
      }
    </Container>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  loaded: state.weather.loading,
  error: state.weather.error,
  searched: state.weather.searched
})

export default connect(mapStateToProps)(WeatherBox);

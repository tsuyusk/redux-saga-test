import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

import { ApplicationState } from "../../../store";
import { IWeatherState } from "../../../store/ducks/weather/types";

interface Props {
  data: IWeatherState
}

const { round } = Math;

const Data: React.FC<Props> = ({ data }) => {
  return (
    <Container className="mt-2">
      <Row>
        <h3 className="text-secondary">{data.name}, {data.sys.country}</h3>
      </Row>
      <Row>
        <h6 className="text-muted">{data.weather[0].main}</h6>
      </Row>
      <Row >
        <Col xs="9">
          <h1 className="text-dark">{round(data.main.temp)}°C</h1>
        </Col>
        <Col xs="3">
          <h6 className="text-muted">Humidade: {data.main.humidity}%</h6>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  data: state.weather
})

export default connect(mapStateToProps)(Data);
import React from 'react';
import { connect } from "react-redux";
import { Alert } from "reactstrap";

import { ApplicationState } from "../../../store";

interface Props {
  cityName: string;
}

const Error: React.FC<Props> = ({ cityName }) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Alert color="danger">
        <h2 className="text-danger">'' {cityName} '' was not found.</h2>
        <h6 className="text-danger">
          Be sure that the city you inserted exists.
        </h6>
      </Alert>
    </div>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  cityName: state.weather.error.searchedCity
});

export default connect(mapStateToProps)(Error);
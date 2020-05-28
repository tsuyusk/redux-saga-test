import React from 'react';
import { Spinner } from "reactstrap";

const Loading: React.FC = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Spinner color="primary"/>
    </div>
  );
}

export default Loading;
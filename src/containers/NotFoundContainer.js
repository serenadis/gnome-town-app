import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = props => {
  return (
    <div>
      <h1>Oooops! Wrong Route</h1>
      <h1>
        404 -
        <Link to="/">Go home</Link>
      </h1>
    </div>
  );
};

export default NotFoundPage;

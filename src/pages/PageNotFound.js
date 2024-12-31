import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>PageNotFound</h1>
      <h3>
        GO TO THE HOMEPAGE: <Link to="/"> Home Page</Link>
      </h3>
    </div>
  );
}

export default PageNotFound;

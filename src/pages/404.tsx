import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container">
      <h1>An error occured</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>Sorry! The page that you're looking for doesn't exist..</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default NotFound;

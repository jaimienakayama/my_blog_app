import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <h1>Jaimie's Blog</h1>
      <ul>
        <li>
          <Link to="/">Blogs</Link>
        </li>
        <li>
          <Link to="create">Create</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import { fetchBlogs } from "./utils/request";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [max, setMax] = useState(6);
  const [toShow, setToShow] = useState([]);

  useEffect(() => {
    fetchBlogs().then((r) => {
      setBlogs(r.data);
      setToShow(r.data.slice(0, max));
    });
  }, []);

  useEffect(() => {
    setToShow(blogs.slice(0, max));
  }, [max]);

  return (
    <div className="blog-list">
      {toShow &&
        toShow.map((d) => (
          <Link to={`blogs/${d.id}`} key={d.id}>
            <Blog blog={d} />
          </Link>
        ))}
      <div className="show-more">
        {toShow.length === blogs.length && blogs.length > 6 && (
          <button
            className="btn back-to-top-btn"
            onClick={() => {
              window.scrollTo(0, 0);
              setMax(6);
            }}
          >
            Back To Top
          </button>
        )}
        {toShow.length > 5 && toShow.length < blogs.length && (
          <button
            className="btn show-more-btn"
            onClick={() => setMax((prev) => prev + 2)}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogList;

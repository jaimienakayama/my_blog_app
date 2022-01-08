import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBlog, deleteBlog } from "./utils/request.js";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState("");
  const { title, author, body } = blog;
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlog(id)
      .then((r) => {
        setBlog(r.data);
      })
      .catch((err) => {
        navigate("/not_found");
      });
  }, []);

  return (
    <div className="blog-details">
      <h2>{title}</h2>
      <p>Written by {author}</p>
      <p>{body}</p>
      <div className="delete">
        <button
          className="btn delete-btn"
          onClick={() => {
            deleteBlog(id);
            navigate("/");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;

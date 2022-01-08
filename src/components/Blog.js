import React from "react";

const Blog = ({ blog }) => {
  const { title, author } = blog;
  return (
    <div className="blog-preview">
      <h3>{title}</h3>
      <p>Written by {author}</p>
    </div>
  );
};

export default Blog;

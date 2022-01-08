import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postBlog } from "./utils/request";

const Create = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  return (
    <div className="create">
      <h2>Create New Blog</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postBlog(author, title, body).then((r) => {
            navigate("/");
          });
        }}
      >
        <div className="form-section">
          <div>
            <label>Title:</label>
          </div>
          <div>
            <input
              type="text"
              value={title}
              maxLength={60}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="form-section">
          <div>
            <label>Author:</label>
          </div>
          <div>
            <input
              type="text"
              value={author}
              maxLength={60}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
        <div className="form-section">
          <div>
            <label>Body:</label>
          </div>
          <div>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
        </div>
        <button className="btn submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Create;

import axios from "axios";

export const fetchBlogs = () => {
  return axios.get("/blogs");
};

export const postBlog = (author, title, body) => {
  return axios.post("/blogs", { author, title, body });
};

export const fetchBlog = (id) => {
  return axios.post("/blog", { id });
};

export const deleteBlog = (id) => {
  return axios.delete("/blog", { params: { id } });
};

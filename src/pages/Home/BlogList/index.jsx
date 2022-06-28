import React from "react";
import BlogItem from "./BlogItem";
import './styles.css'

const BlogList = ({ blogs }) => {
  return (
    <div className="bloglist-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.title}/>
      ))}
    </div>
  );
};

export default BlogList;

import React from "react";
import BlogItem from "./BlogItem";
import './styles.css'

const BlogList = ({ blog }) => {
  return (
    <div className="bloglist-wrap">
      {blog.map((blog) => (
        <BlogItem blog={blog} key={blog.title}/>
      ))}
    </div>
  );
};

export default BlogList;

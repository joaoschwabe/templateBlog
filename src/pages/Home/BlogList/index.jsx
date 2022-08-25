import React from "react";
import BlogItem from "./BlogItem";
import './styles.css'

const BlogList = ({ blog }) => {
  return (
    <div className="bloglist-wrap">
      {
      blog?.map((blog, index) => (
        <BlogItem blog={blog} id={index} key={index}/>
      ))
      }
    </div>
  );
};

export default BlogList;

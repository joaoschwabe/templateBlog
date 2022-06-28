import React from "react";
import { Link } from "react-router-dom";
import { blogList } from "../../../../config/data";
import "./styles.css";

const BlogItem = ({
  blog: { id, description, title, publishedAt, author, authorAvatar, urlToImage },
}) => {




  return (
    <div className="blogItem-wrap">
      <img src={urlToImage} alt="cover" className="blogItem-cover" />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} />
          <div>
            <h6>{author}</h6>
            <p>{publishedAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          Veja mais ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;

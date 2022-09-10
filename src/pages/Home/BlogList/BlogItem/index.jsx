import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const BlogItem = ( props ) => {
  const { blog: { description, title, thumbImageAltText, postDate, profileName, authorAvatar, thumbImage }} = props
  const { id } = props
  return (
    <div className="blogItem-wrap">
      <img src={`https://api-fake-blog.herokuapp.com${thumbImage}`} alt={thumbImageAltText} className="blogItem-cover" />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
        <img src="https://api-fake-blog.herokuapp.com/img/profile-1.jpg" />
          <div>
            <h6>{profileName}</h6>  
            <p>{postDate}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/post/${id}`}>
          Veja mais ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;

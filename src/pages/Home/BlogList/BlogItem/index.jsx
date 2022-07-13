import React from "react";
import "./styles.css";

const BlogItem = ({
  blog: { description, title, thumbImageAltText, postDate, profileName, authorAvatar, thumbImage },
}) => {
  return (
    <div className="blogItem-wrap">
      <img src={`./assets${thumbImage}`} alt={thumbImageAltText} className="blogItem-cover" />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <div>
            <h6>{profileName}</h6>  
            <p>{postDate}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogItem;

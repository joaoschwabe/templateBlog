import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "../../config/data";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.css";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);
  return (
    <div>
      <Header />
      <Link className="blog-goBack" to="/">
        Voltar
      </Link>

      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Publicado no dia {blog.createdAt}</p>
            <h1>{blog.title}</h1>
          </header>

          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Blog;

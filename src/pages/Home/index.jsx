import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import axios from 'axios'
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState([])

    useEffect(() => {
      axios
        .get(
          "https://api-fake-blog.herokuapp.com/postagens"
        )
        .then((response) => {
          let data = response.data 
            setBlogs(data)
        });
    }, []);

  return (
    <div>
      <Header/>
      
      <BlogList blog={blogs}/>
    </div>
  );
}

export default Home;

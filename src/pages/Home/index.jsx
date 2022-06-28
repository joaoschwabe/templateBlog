import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import BlogList from "./BlogList";
import { blogList } from '../../config/data'
import axios from 'axios'

function Home() {
  const [blogs, setBlogs] = useState([])

    useEffect(() => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7741e217067f487c8be07faf709738b3"
        )
        .then((response) => {
            setBlogs(response.data.articles)
            console.log(response.data.articles);
        });
    }, []);
  // const [blogs, setBlogs] = useState(blogList)


  return (
    <div>
      <Header/>
      
      <BlogList blogs={blogs}/>
    </div>
  );
}

export default Home;

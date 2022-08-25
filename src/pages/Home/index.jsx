import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useApi } from "../../data/api";
import BlogList from "./BlogList";

const Home = () => {
  const { data } = useApi();

  console.log(data);
  return (
    <div>
      <Header />
      <BlogList blog={data} />
    </div>
  );
};

export default Home;

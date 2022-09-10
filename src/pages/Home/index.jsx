import React from "react";
import { useApi } from "../../data/api";
import BlogList from "./BlogList";

const Home = () => {
    const { data } = useApi();

    return (
        <>
            <div>
                {data ? <BlogList blog={data} /> : 
                <h1>Carregando...</h1>
                }
            </div>
        </>
    );
};

export default Home;

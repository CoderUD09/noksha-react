import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/home.css"

export const HomeProduct = (props) => {
    const [data, setData] = useState([]);
    const category = props.category;

    const loadData = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/?limit=20&category=${category}`);
            const response = await res.json();
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadData();
    }, [category]);

    console.log(data);

    return (
        <React.Fragment>
            <div className="Wrapper container">
                <h1 className="titleProduct text-white text-uppercase">{category}</h1>
                <Splide
                    options={{
                        perPage: 4,
                        arrows: true,
                        pagination: false,
                        drag: "free",
                        gap: "1rem",
                    }}
                >
                    {data.map((item) => {
                        return (
                            <SplideSlide key={item._id}>
                                <div className="card cardHome">
                                    <p className="cardText">
                                        <div className="row">
                                            <div className="col-md-auto cat">{item.subcategory}</div>
                                            <div className="col-md-auto price">${item.current_price}</div>
                                        </div>
                                    </p>
                                    <img id='img-home' src={item.image_url} alt={item.name} />
                                </div>
                            </SplideSlide>
                        );
                    }
                    )}
                    <SplideSlide>
                        <div className="card cardHome">
                            <p className="cardText">
                                <div className="row">
                                    <Link to={`/${category}`}>Show More {">>"}</Link>
                                </div>
                            </p>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </React.Fragment>
    );
}
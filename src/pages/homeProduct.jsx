import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/home.css"

export const HomeProduct = (props) => {
    const [data, setData] = useState([]);
    const category = props.category;
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (id) => {
        const { from } = location.state || { from: { pathname: `/product/${id}` } };
        navigate(from);
    }

    const loadData = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/?limit=20&category=${category}`);
            const response = await res.json();
            // const imgFilter = response.data.filter((item) => {
            //     const img = new Image();
            //     img.src = item.image_url;
            //     return img.height != 0;
            // });
            // setData(imgFilter);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadData();
    }, [category]);

    return (
        <>
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
                                <div className="card cardHome" onClick={() => { handleClick(item._id) }} >
                                    <p className="cardText">
                                        <div className="row">
                                            <div className="col-md-auto cat">{item.subcategory}</div>
                                            <div className="col-md-auto price">BDT {item.current_price}</div>
                                        </div>
                                    </p>
                                    <img id='img-home' src={item.image_url} alt="No Image" />
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
        </>
    );
}
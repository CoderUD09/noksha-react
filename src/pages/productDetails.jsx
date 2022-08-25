import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { useCart } from "react-use-cart";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export const ProductDetails = () => {
    const [item, setItem] = useState([]);
    // const [subCatItem, setSubCatItem] = useState();
    const [menSubCatItem, setMenSubCatItem] = useState([]);
    const { id } = useParams();
    const { addItem } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const fetchSubCat = async (subcat, limit) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/search?input=${subcat}&pageNo=1&productPerPage=${limit}`);
            const response = await res.json();
            setMenSubCatItem(response.data);
            console.log(menSubCatItem);
        } catch (error) {
            console.log(error.message);
        }
    }

    const fetchItem = async () => {
        try {
            // console.log(id);
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/product/one?pid=${id}`);
            const respone = await res.json();
            setItem({ ...respone.data, id: respone.data._id, price: respone.data.current_price });
            fetchSubCat(item.subcategory, 20);
            // setSubCatItem(item.subcategory);
            // console.log(respone.data);
            // setSizeList(respone.size.split(','));
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleClick = (id) => {
        const { from } = location.state || { from: { pathname: `/product/${id}` } };
        navigate(from);
    }

    useEffect(() => {
        fetchItem();
    });


    return (
        <>
            <br />
            <div className="container">
                <table className="table table-light m-0">
                    <tbody>
                        <tr>
                            <td>
                                <img src={item.image_url} />
                            </td>
                            <td>
                                <h1>{item.subcategory}</h1>
                                <br />
                                <h3>{item.name}</h3>
                                <br />
                                <h3>{item.brand}</h3>
                                <br />
                                {/* {item.stock=== 0 ? <h3><em>Out of Stock</em></h3> : <h3> <b>{item.stock}</b> in Stock</h3>}
                                <br /> */}
                                <h2>BDT {item.raw_price === item.current_price ? '' : <del>{item.raw_price}</del>} {"  "} {item.current_price}</h2>
                                <br />
                                <Dropdown size="sm" variant="secondary">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Size
                                    </Dropdown.Toggle>
                                    {/* <Dropdown.Menu>
                            {sizeList.map((s) => {
                                return (
                                    <Dropdown.Item onClick={() => { setSize(s) }}>{s}</Dropdown.Item>
                                );
                            })}
                        </Dropdown.Menu> */}
                                </Dropdown>
                                <br />
                                <button className="btn btn-success" onClick={() => addItem(item)}>
                                    <b>ADD TO CART</b>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <br />
                <br />
                <h1 className="titleProduct">Related Products</h1>
                <br />
                <div className="Wrapper container" style={{ marginBottom: '5vh' }}>
                    {menSubCatItem.length == 0 ? "" :
                        <Splide
                            options={{
                                perPage: 4,
                                arrows: true,
                                pagination: false,
                                drag: "free",
                                gap: "1rem",
                            }}
                        >
                            {menSubCatItem.map((item) => {
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
                                            <Link to={`/men`}>Show More {">>"}</Link>
                                        </div>
                                    </p>
                                </div>
                            </SplideSlide>
                        </Splide>}
                </div>
            </div>
        </>
    );
}
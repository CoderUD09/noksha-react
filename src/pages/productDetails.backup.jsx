import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from "react";

export const ProductDetails = () => {
    let { id } = useParams();
    const [item, setItem] = useState();
    const [size, setSize] = useState("Size");
    const [sizeList, setSizeList] = useState([]);

    const fetchItem = async () => {
        console.log(id);
        const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/product/one/?pid=${id}`);
        const respone = await res.json();
        setItem(respone);
        setSizeList(respone.size.split(','));
    }

    useEffect(() => {
        fetchItem();
    }, [id]);

    return (
        <>
            <div className="container">
                <div className="card-image">
                    <img src={item.img_url} alt="No Image" />
                </div>
                <div className="card-right">
                    <div className="item-title">{item.subcategory}</div>
                    <h5 className="item-price">BDT {item.current_price}</h5>
                    <h3>Selected Size: {size !== 'Size' ? size : '*'} </h3>
                    <p className="item-desc">{item.name}</p>
                    <Dropdown size="sm" variant="secondary">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {size}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {sizeList.map((s) => {
                                return (
                                    <Dropdown.Item onClick={() => { setSize(s) }}>{s}</Dropdown.Item>
                                );
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <button className="btn-add">
                        <b>ADD TO CART</b>
                    </button>
                </div>
            </div>
        </>
    );
}
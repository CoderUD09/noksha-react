import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Card.css";

export default function Card(props) {
    let item = props.item;
    return (
        <div className="card cardProduct" style={{ width: '280px', height: '550px', marginBottom: '5vh', marginRight: '2vh' }} >

            <div className="card-header">
                <div className="profile">
                    <span className="letter">{item.category[0]}</span>
                </div>
                <div className="card-title-group">
                    <h5 className="card-title">{item.subcategory}</h5>
                    <div className="card-date"><b>BDT</b> {item.current_price}</div>
                </div>
            </div>
            <img className="card-image" src={item.image_url} alt="Not Avaiable" />
            <div className="card-text">{item.name}</div>
            <div className="card-like-bar container">
                {item.likes_count > 0 ? (
                    <i class="bi bi-hand-thumbs-up-fill"></i>
                ) : (
                    <i class="bi bi-hand-thumbs-up"></i>
                )}
                <div className="like-text">
                    <b>{item.likes_count}</b> people(s) like this.
                </div>
            </div>

        </div>
    );
}
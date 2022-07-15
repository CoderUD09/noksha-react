import React from "react";
import "../styles/Card.css";

export default function Card(props) {
    let item = props.item;
    return (
        <div className="card cardProduct">
            <div className="card-header">
                <div className="profile">
                    <span className="letter">{item.category[0]}</span>
                </div>
                <div className="card-title-group">
                    <h5 className="card-title">{item.subcategory}</h5>
                    <div className="card-date"><b>BDT</b> {item.current_price}</div>
                </div>
            </div>
            <img className="card-image" src={item.image_url} alt="Logo" />
            <div className="card-text">{item.name}</div>
            <div className="card-like-bar">
                {item.likes_count > 0 ? (
                    <i className="fa-solid fa-thumbs-up"></i>
                ) : (
                    <i className="fa-light fa-thumbs-up"></i>
                )}
                <div className="like-text">
                    <b>{item.likes_count}</b> people(s) like this {item.subcategory}.
                </div>
            </div>
        </div>
    );
}
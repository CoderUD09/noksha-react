import React from "react";
import '../styles/sideBar.css';
import Button from "react-bootstrap/Button";

export const SideBar = function (props) {

    let subCats = props.subCats;
    let heading = props.heading;

    return (
        <>
            <div id="sidebar">
                <header> {heading} </header>
                {subCats.map((item => {
                    return (
                        <div className="container">
                            <div className="nav-item" onClick={() => {
                                props.sendToParent(item)
                            }}>{item}</div>
                        </div>
                    );
                }))}
            </div>
        </>
    );
}
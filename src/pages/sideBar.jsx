import React from "react";
import { useState } from "react";
import '../styles/sideBar.css';
import Button from "react-bootstrap/Button";

export const SideBar = function (props) {

    let subCats = props.subCats;

    return (
        <>
            <div id="sidebar">
                <header> Categories </header>
                {subCats.map((item => {
                    return (
                        <div>
                            <Button onClick={() => {
                                props.sendToParent(item)
                            }}>{item}</Button>
                        </div>
                    );
                }))}
            </div>
        </>
    );
}
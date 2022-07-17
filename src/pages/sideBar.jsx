import React from 'react';
import '../styles/sideBar.css';

export const SideBar = function (props) {

    let subCats = props.subCats;

    return (
        <>
            <div id="sidebar">
                <header> Categories </header>
                {subCats.map((item => {
                    return (
                        <ul class="nav">
                            <li>
                                <a className="AnchorSideBar" href="#">
                                    {item}
                                </a>
                            </li>
                        </ul>
                    );
                }))}
            </div>
        </>
    );
}
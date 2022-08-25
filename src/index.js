import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
} from 'react-router-dom';
import "jquery";
import "bootstrap/dist/js/bootstrap.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./styles/style.css";
import "./styles/flower.css";
import "./styles/noksha.css";
import "./styles/adminPage.css";
import App from "./App";
import { UserContextProvider } from "./states/userContext";
import { CartProvider } from "react-use-cart";

// ReactDOM.render(<App/>, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CartProvider>
        <UserContextProvider>
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        </UserContextProvider>
    </CartProvider>
);
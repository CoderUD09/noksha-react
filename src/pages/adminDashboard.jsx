import React, { useEffect } from "react";
export const Men = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    useEffect(() => {

    });


    return (
        <>
            <div class="container">
                <div class="navigation">
                    <ul>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <img src="assets/imgs/flower.svg" />
                                </span>
                                <span class="title">Noksha</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="home-outline"></ion-icon>
                                </span>
                                <span class="title">Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="people-outline"></ion-icon>
                                </span>
                                <span class="title">Users</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                </span>
                                <span class="title">New Products</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span class="icon">
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                </span>
                                <span class="title">Update Products</span>
                            </a>
                        </li>

                    </ul>
                </div>

                <div class="main">
                    <div class="topbar">
                        <div class="toggle">
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>
                    </div>


                    <div class="container">
                        <form onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col-lg-4">
                                    <label for="fname">Subcategory</label>
                                    <input type="text" id="subcategory" name="fname" class="form-control" />
                                </div>
                                <div class="col-lg-4">
                                    <label for="lname">Name</label>
                                    <input type="text" id="name" name="lname" class="form-control" />
                                </div>
                                <div class="col-lg-4">
                                    <label for="lname">Current Price</label>
                                    <input type="integer" id="current_price" name="lname" class="form-control" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <label for="fname">Raw Price</label>
                                    <input type="integer" id="raw_price" name="fname" class="form-control" />
                                </div>
                                <div class="col-lg-4">
                                    <label for="lname">Discount</label>
                                    <input type="integer" id="discount" name="lname" class="form-control" />
                                </div>
                                <div class="col-lg-4">
                                    <label for="lname">Brand</label>
                                    <input type="text" id="brand" name="lname" class="form-control" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <label for="image">Image</label>
                                    <input type="file" id="file_input" class="form-control" />
                                </div>
                                <div class="col-lg-6">
                                    <label for="lname">Product Id</label>
                                    <input type="disabled" id="disabled" class="form-control" />
                                </div>
                            </div>
                        </form>
                        <div class="col-md-12 text-center" style="margin-top: 15px;">
                            <button type="button" class="btn btn-primary" style="width: 150px;">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
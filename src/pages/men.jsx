import React, { Component, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { SideBar } from "./sideBar";
import Card from "./card";

export const Men = (props) => {
    const [subCat, setsubCat] = useState([]);
    const [newItems, setnewItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 6;
    let category = props.category;

    const fetchCat = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/category?category=${category}`);
            const response = await res.json();
            setsubCat(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchNewItems = async (pageNo) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/category/new?category=${category}&pageNo=${pageNo}&productPerPage=${limit}`);
            const response = await res.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);
        let currentPage = data.selected + 1;
        const newItemsCollected = await fetchNewItems(currentPage);
        setnewItems(newItemsCollected.data);
    };

    useEffect(() => {
        const fetchPageNo = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/category/new?category=${category}&pageNo=1&productPerPage=${limit}`);
                const respone = await res.json();
                const totalres = await fetch(`${process.env.REACT_APP_BASE_API_URL}/category/new/count?category=${category}`);
                const totalresponse = await totalres.json();
                const total = totalresponse.data;
                console.log(total);
                setpageCount(Math.ceil(total / limit));
                setnewItems(respone.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCat();
        fetchPageNo();
    }, [limit]);

    return (
        <React.Fragment style={{ display: 'flex' }}>
            <SideBar subCats={subCat} />
            <div className="container" style={{ height: '700vh', width: 'auto', paddingLeft: '15%' }}>
                <div className="container" style={{ height: '350vh', width: 'auto', }}>
                    <h1 className="titleProduct text-info">New Arrival</h1>
                    <div className="row m-2">
                        {newItems.map((item) => {
                            return (
                                <Card item={item} />
                            );
                        })}
                    </div>
                </div>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />

                <div className="container" style={{ height: '350vh', overflowY: 'auto', width: 'auto', scrollbarWidth: 'none' }}>
                    <h1 className="titleProduct text-danger">Most Liked</h1>
                </div>
            </div>
        </React.Fragment>
    );
}
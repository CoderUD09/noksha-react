import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Spinner from 'react-bootstrap/Spinner';
import Card from "./card";
import { useParams } from "react-router-dom";

export const SelectedSubCat = ({ category, subcategory }) => {

    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [laod, setLaod] = useState(false)
    // const { category } = useParams();
    // const { subcategory } = useParams();
    let limit = 18;

    async function fetcItems(pageNo) {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/category/subcategory?category=${category}&pageNo=${pageNo}&productPerPage=${limit}&subcategory=${subcategory}`);
            const response = await res.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    const fetchPageNo = async () => {
        try {
            setLaod(true);
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/category/subcategory?category=${category}&pageNo=1&productPerPage=${limit}&subcategory=${subcategory}`);
            const respone = await res.json();
            const totalres = await fetch(`${process.env.REACT_APP_BASE_API_URL}/category/subcategory/count?category=${category}&subcategory=${subcategory}`);
            const totalresponse = await totalres.json();
            const total = totalresponse.data;
            setLaod(false);
            setpageCount(Math.ceil(total / limit));
            setItems(respone.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        const newItemsCollected = await fetcItems(currentPage);
        setItems(newItemsCollected.data);
    };

    useEffect(() => {
        fetchPageNo();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    }, [limit, category, subcategory]);

    return (
        <>
            <div className="container right-pan col-lg">
                <div className="container right-pan-1" style={{ height: 'inherit', width: 'auto' }}>
                    <h1 className="titleProduct text-info">{subcategory}</h1>
                    <div className="row m-2">
                        {laod ? (<Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>) : items.map((item) => {
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
            </div>
        </>
    )
}
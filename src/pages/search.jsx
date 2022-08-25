import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Card from "./card";

export const SearchResult = () => {

    const { inp } = useParams();
    const [item, setItem] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 12;

    const fetchSearchItem = async (pageNo) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/search?input=${inp}&pageNo=${pageNo}productPerPage=${limit}`);
            const response = await res.json();
            setItem(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchPageNo = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/search?input=${inp}&pageNo=1&productPerPage=${limit}`);
            const respone = await res.json();
            const totalres = await fetch(`${process.env.REACT_APP_BASE_API_URL}/search/count?input=${inp}`);
            const totalresponse = await totalres.json();
            const total = totalresponse.data;
            setpageCount(Math.ceil(total / limit));
            setItem(respone.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        const newItemsCollected = await fetchSearchItem(currentPage);
        setItem(newItemsCollected.data);
    };

    useEffect(() => {
        console.log(inp);
        fetchPageNo();
    }, [inp, limit]);

    return (
        <React.Fragment>
            <div className="container right-pan col-lg">
                <div className="container right-pan-1" style={{ height: 'inherit', width: 'auto' }}>
                    <h1 className="titleProduct text-info">{inp}</h1>
                    <div className="row m-3">
                        {item.map((itm) => {
                            return (
                                <Card key={itm._id} item={itm} />
                            );
                        })}
                    </div>
                </div>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={4}
                    pageRangeDisplayed={4}
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
        </React.Fragment>
    );
}

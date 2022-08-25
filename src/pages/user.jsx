import React, { useContext } from "react";
import Avatar from '../components/avatar';
import { UserContext } from "../states/userContext";

export const UserProfile = () => {

    const { user } = useContext(UserContext);

    return (
        <>
            <div className="row" style={{ marginTop: '30px' }}>
                <div className="col-md-4 mt-1" style={{ width: '25rem', marginLeft: '10rem' }}>
                    <div className="card text-center sidebar" style={{ alignItems: 'center' }}>
                        <div className="card-body">
                            <div style={{ width: "20rem" }}><Avatar /></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mt-1">
                    <div className="card mb-3 content">
                        <h1 className="m-3 pt-3"> About</h1>
                        <div className="card-body">
                            <hr />
                            <div className="row">
                                <div className="col-md-3">
                                    <h5>User Name</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                    {user.name}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-3">
                                    <h5> Email</h5>
                                </div>
                                <div className="col-md-9 text-secondary">
                                    {user.email}
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="card-mb-3 content" style={{ marginTop: '30px' }}>
                    <h1 className="m-3">Recent Products</h1>
                    <div className="card-body">
                        <div className="row" style={{ marginLeft: '10px' }}>
                            <div className="col-md-3"></div>
                            <h5>Products Name</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                            Product Descriptions
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
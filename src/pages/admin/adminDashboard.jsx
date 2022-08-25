import React, { useState, useEffect } from "react";
import { SideBar } from "../sideBar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

export const AdminDashboard = () => {

    const navItem = ["Dashboard", "Add New Product"];
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [selectedOption, setSelectedOption] = useState("Dashboard");
    const [id, setId] = useState();

    const [state, setState] = useState({
        category: '',
        subcategory: '',
        name: '',
        raw_price: '',
        current_price: '',
        brand: '',
        image_url: '',
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state);
        const obj = {
            category: state.category,
            subcategory: state.subcategory,
            name: state.name,
            raw_price: state.raw_price,
            current_price: state.current_price,
            brand: state.brand,
            image_url: state.image_url,
            discount: state.raw_price - state.current_price,
            likes_count: 0,
            is_new: true,
            variation_0_color: "",
            variation_1_color: "",
            variation_0_thumbnail: "",
            variation_0_image: "",
            variation_1_thumbnail: "",
            variation_1_image: "",
            size: "S/M/L",
            quality: "",
        }
        // console.log(obj);
        // console.log(JSON.stringify(obj));
        try {
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/addproduct`, settings);
            const data = await response.json();
            setId(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="row">
                <div className="left-pan col-lg-3"><SideBar subCats={navItem} heading={"Dashboard"} sendToParent={setSelectedOption} /></div>
                <div className="container right-pan col-lg">
                    <br />
                    <br />
                    {selectedOption == ("" || "Dashboard") ? (
                        <div class="main">
                            <div className="container right-pan col-lg" style={{ marginTop: '6%', marginLeft: '6%' }}>
                                <div class="cardBox">
                                    <Row xs={1} md={2} className="g-4">
                                        <Col>
                                            <Card style={{ width: '35rem', height: '20rem' }} bg="primary">
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: '3rem' }}>Registered Users</Card.Title>
                                                    <Card.Subtitle style={{ fontSize: '4rem', marginTop: '1rem', fontWeight: 'bold' }}>{users.length}</Card.Subtitle>
                                                    <Card.Text style={{ marginTop: '3rem' }}><ion-icon name="eye-outline" size='large'></ion-icon></Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col>
                                            <Card style={{ width: '35rem', height: '20rem' }} bg="primary">
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: '3rem' }}>Sales</Card.Title>
                                                    <Card.Subtitle style={{ fontSize: '4rem', marginTop: '1rem', fontWeight: 'bold' }}>{orders.length}</Card.Subtitle>
                                                    <Card.Text style={{ marginTop: '3rem' }}><ion-icon name="eye-outline" size='large'></ion-icon></Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>

                                <Row xs={1} md={2} className="g-4">
                                    <Col>
                                        <div class="details">
                                            <div class="recentOrders">
                                                <div class="cardHeader">
                                                    <h2>Recent Orders</h2>
                                                </div>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                        <th>Payment</th>
                                                        <th>Status</th>
                                                    </thead>

                                                    <tbody>
                                                        {orders.map((order, index) => {
                                                            <tr key={index}>
                                                                <td>{order.subcategory}</td>
                                                                <td>BDT {order.price}</td>
                                                                <td>{order.payment_status}</td>
                                                                <td><span className="status {order.delivary_satus}">{order.delivary_satus}</span></td>
                                                            </tr>
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div class="recentCustomers" style={{ marginTop: "20px", transform: "translate(20%)" }}>
                                            <Card style={{ width: '25rem' }}>
                                                <Card.Header>Customers</Card.Header>
                                                <ListGroup variant="flush">
                                                    {users.map((user, index) => {
                                                        <ListGroup.Item key={index}>{user.name}</ListGroup.Item>
                                                    })}
                                                </ListGroup>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>) : (
                        <div className="main">
                            <div className="container">
                                <Form onSubmit={handleSubmit}>
                                    <Row xs={1} md={2} className="g-4">
                                        <Col>
                                            <Form.Group className="mb-3" controlId="category">
                                                <Form.Label>Category</Form.Label>
                                                <Form.Control type="text" placeholder="Men/Women/Kids" name="category" value={state.category} onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="subcategory">
                                                <Form.Label>Subcategory</Form.Label>
                                                <Form.Control type="text" placeholder="Shirts/Slippers" name="subcategory" value={state.subcategory} onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>


                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Details</Form.Label>
                                        <Form.Control type="text" placeholder="Full Sleave" name="name" value={state.name} onChange={handleChange} />
                                    </Form.Group>


                                    <Row xs={1} md={2} className="g-4">
                                        <Col>
                                            <Form.Group className="mb-3" controlId="raw_price">
                                                <Form.Label>Raw Price</Form.Label>
                                                <Form.Control type="number" placeholder="BDT" name="raw_price" value={state.raw_price} onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="current_price">
                                                <Form.Label>Current Price</Form.Label>
                                                <Form.Control type="number" placeholder="BDT" name="current_price" value={state.current_price} onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row xs={1} md={2} className="g-4">
                                        <Col>
                                            <Form.Group className="mb-3" controlId="brand">
                                                <Form.Label>Brand</Form.Label>
                                                <Form.Control type="text" placeholder="Gucci" name="brand" value={state.brand} onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="image">
                                                <Form.Label>Image URL</Form.Label>
                                                <Form.Control type="text" placeholder="http://example.com/image" name="image_url" onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="id">
                                        <Form.Label>Product ID</Form.Label>
                                        <Form.Control type="text" placeholder={id} disabled />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Register from '../components/register';

function SignUp() {

    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        const obj = {
            name: state.name,
            email: state.email,
            password: state.password,
        }
        try {
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            };
            const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/user/signup`, settings);
            if (res.status === 201) {
                navigate(from);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="form-container sign-up-container">
            <form className="Form" action="#">
                <div className="img"> <Register /></div>
                <input
                    type="name"
                    placeholder="Full Name"
                    className="input_design"
                    name='name'
                    value={state.name}
                    onChange={handleChange} />
                <input
                    type="email"
                    placeholder="Email"
                    className="input_design"
                    name='email'
                    value={state.email}
                    onChange={handleChange} />
                <input
                    type="password"
                    placeholder="Password"
                    className="input_design"
                    name='password'
                    value={state.password}
                    onChange={handleChange} />
                <input
                    type="submit"
                    className="btn"
                    value="Sign up"
                    onClick={handleSubmit} />
            </form>
        </div>
    );
}

export default SignUp;

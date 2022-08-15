import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Register from '../components/register';
import validator from 'validator';

function SignUp() {

    const navigate = useNavigate();
    const location = useLocation();
    const [validEmail, setValidEmail] = useState();
    const [errorMsg, setErrorMsg] = useState();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            name: state.name,
            email: state.email,
            password: state.password,
        }
        if (validator.isEmail(obj.email)) {
            setValidEmail = true;
        }
        if (validEmail && obj.name != null && obj.password != null) {
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
        } else {
            setErrorMsg = 'Invalid Input or Empty Input';
        }
    }
    return (
        <div className="form-container sign-up-container" >
            <form className="Form" action="#" onSubmit={handleSubmit}>
                <div className="img"> <Register /></div>
                <input
                    type="name"
                    placeholder="Full Name"
                    className="input_design"
                    name='name'
                    value={state.name}
                    onChange={handleChange} required />
                <input
                    type="email"
                    placeholder="Email"
                    className="input_design"
                    name='email'
                    value={state.email}
                    onChange={handleChange} required />
                <input
                    type="password"
                    placeholder="Password"
                    className="input_design"
                    name='password'
                    value={state.password}
                    onChange={handleChange} required />
                <input
                    type="submit"
                    className="btn"
                    value="Sign up" />
            </form>
        </div>
    );
}

export default SignUp;

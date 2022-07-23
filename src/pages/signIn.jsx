import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from '../components/avatar';
import { UserContext } from '../states/userContext';

function SignIn() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const obj = {
            email: state.email,
            password: state.password,
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
            const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/user/signin`, settings);
            const data = await response.json();
            console.log(data.token);
            localStorage.setItem("token", data.token);
            setUser(data.user);
            navigate(from);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form-container sign-in-container">
            <form className="Form" action="#" onSubmit={handleSubmit}>
                <div className="img1"> <Avatar /> </div>
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
                    value="Login" />
                <a className="Anchor" href="#">Forgot your password?</a>
                <span className="Span">----OR----</span>
                <div className="social-container">
                    <a className="Anchor social" href="#" ><i className="fa fa-facebook-f"></i></a>
                    <a className="Anchor social" href="#" ><i className="fa fa-google-plus"></i></a>
                    <a className="Anchor social" href="#" ><i className="fa fa-linkedin"></i></a>
                </div>
            </form>
        </div>
    );
}

export default SignIn;

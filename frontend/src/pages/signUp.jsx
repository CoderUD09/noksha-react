import React, { Component } from 'react';
import Register from '../components/register';

class SignUp extends Component {
    render() {
        return (
            <div className="form-container sign-up-container">
                <form className="Form" action="#">
                    <div className="img"> <Register /></div>
                    <input type="text" placeholder="Full Name" className="input_design" />
                    <input type="email" placeholder="Email" className="input_design" />
                    <input type="password" placeholder="Password" className="input_design" />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="input_design"
                    />
                    <input type="submit" className="btn" value="Sign up" />
                </form>
            </div>
        );
    }
}

export default SignUp;

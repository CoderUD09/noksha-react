import React, { Component } from 'react';
import Avatar from '../components/avatar';

class SignIn extends Component {
    render() {
        return (
            <div className="form-container sign-in-container">
                <form className="Form" action="#">
                    <div className="img1"> <Avatar /> </div>
                    <input type="email" placeholder="Email" className="input_design" />
                    <input type="password" placeholder="Password" className="input_design" />
                    <input type="submit" className="btn" value="Login" />
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
}

export default SignIn;

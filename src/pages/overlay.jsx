import React, { Component } from 'react';
import Flower from "../components/flower";

class Overlay extends Component {
    render() {
        const { handleClickSignUpButton, handleClickSignInButton } = this.props;
        return (
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <div className="logo-img-1">
                            <a className="Anchor" href="/"><Flower /> </a>
                        </div>
                        <h2>Have an Accocunt?</h2>
                        <button
                            className="btn2"
                            id="signIn"
                            onClick={handleClickSignInButton}
                        >Log In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 style={{ fontWeight: 'bold' }}>New Here?</h1>
                        <h2 style={{ textAlign: 'center' }}>Start journey with us</h2>
                        <div className="logo-img-1">
                            <a className="Anchor" href="/"><Flower /> </a>
                        </div>
                        <button
                            className="btn1"
                            id="signUp"
                            onClick={handleClickSignUpButton}
                        >Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overlay;
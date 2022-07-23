import React, { Component } from 'react';
import '../styles/styleLogin.css';
import SignUp from './signUp';
import SignIn from './signIn';
import Overlay from './overlay';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      rightPanelActive: false,
    }
    document.body.classList.add('body-class-login');
  }

  handleClickSignUpButton = () => this.setState({
    rightPanelActive: true,
  });

  handleClickSignInButton = () => this.setState({
    rightPanelActive: false,
  });

  render() {
    const { handleClickSignUpButton, handleClickSignInButton } = this;
    const { rightPanelActive } = this.state;
    return (
      <div className="App">
        <div
          className={`containerLogin ${rightPanelActive ? `right-panel-active` : ``}`}
          id="containerLogin"
        >
          <SignUp />
          <SignIn />
          <Overlay
            handleClickSignInButton={handleClickSignInButton}
            handleClickSignUpButton={handleClickSignUpButton}
          />
        </div>
      </div>
    );
  }
}

export default Login;
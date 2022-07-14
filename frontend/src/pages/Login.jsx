// import React from "react";
// import { useEffect } from "react";
// import "../styles/styleLogin.css";
// import Flower from "../components/flower";

// export const Login = () => {
//   useEffect(() => {
//     document.body.classList.add("body-class-login");
//     return () => {
//       document.body.classList.remove("body-class-login");
//     }
//   }, []);

//   return (
//     <>
//       <div className="containerLogin" id="containerLogin">
//         <div className="form-container sign-up-container">
//           <form className="Form" action="#">
//             <img className="img" src="img/SVG/register.svg" />
//             <input type="text" placeholder="Full Name" className="input_design" />
//             <input type="email" placeholder="Email" className="input_design" />
//             <input type="password" placeholder="Password" className="input_design" />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="input_design"
//             />
//             <input type="submit" className="btn" value="Sign up" />
//           </form>
//         </div>
//         <div className="form-container sign-in-container">
//           <form className="Form" action="#">
//             <img src="img/SVG/avatar.svg" className="img1" />
//             <input type="email" placeholder="Email" className="input_design" />
//             <input type="password" placeholder="Password" className="input_design" />
//             <input type="submit" className="btn" value="Login" />
//             <a className="Anchor" href="#">Forgot your password?</a>
//             <span className="Span">----OR----</span>
//             <div className="social-container">
//               <a className="Anchor social" href="#" ><i className="fa fa-facebook-f"></i></a>
//               <a className="Anchor social" href="#" ><i className="fa fa-google-plus"></i></a>
//               <a className="Anchor social" href="#" ><i className="fa fa-linkedin"></i></a>
//             </div>
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <div className="logo-part-1">
//                 <a className="Anchor" href="/"><Flower /> </a>
//               </div>
//               <h2>Have an Accocunt?</h2>
//               <input type="submit" className="btn2" id="signIn" value="login" />
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1 style={{ fontWeight: 'bold' }}>New Here?</h1>
//               <h2 style={{ textAlign: 'center' }}>Start journey with us</h2>
//               <div className="logo-img-1">
//                 <a className="Anchor" href="/"><Flower /> </a>
//               </div>
//               <input type="submit" className="btn1" id="signUp" value="register" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <script src="../components/loginScript.js"></script>
//     </>
//   );
// };

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
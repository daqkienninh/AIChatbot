import React from "react";
import Header from "../components/Header";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <Header />
      <div className="login">
        <h1>Welcome to EduLawAI!</h1>
        <div className="login content">
          <div className="login email">
            <input style={{}} type="text" placeholder="Enter your email" />
          </div>
          <div className="login password">
            <input type="text" placeholder="Enter your password" />
          </div>
          <div className="login button">
            <button>Login</button>
          </div>
        </div>
      </div>
      <div className="signup">
        <span>Don't have an account? </span>
        <Link to="/signup" className="signupText">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;

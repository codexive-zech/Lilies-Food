import React from "react";
import LoginWrapper from "../wrappers/LoginWrapper";
import loginImage from "../images/login.png";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import SecurityImage from "../components/SecurityImage";

const Login = () => {
  return (
    <LoginWrapper>
      <SecurityImage image={loginImage} />
      <form className="form">
        <h3>Welcome Back!</h3>
        <FormInput type="email" name="email" placeholder="Your Email Address" />
        <FormInput
          type="password"
          name="password"
          placeholder="Your Password"
        />

        <button type="button" className="btn">
          Login
        </button>
        <div className="btn-container">
          <button>
            <Link to="/register">Create an Account</Link>
          </button>
          <button>
            <Link to="/#">Forget Password</Link>
          </button>
        </div>
      </form>
    </LoginWrapper>
  );
};

export default Login;

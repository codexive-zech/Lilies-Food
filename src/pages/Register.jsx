import React from "react";
import FormInput from "../components/FormInput";
import SecurityImage from "../components/SecurityImage";
import { Link } from "react-router-dom";
import LoginWrapper from "../wrappers/LoginWrapper";
import registerImage from "../images/register.png";
import { FaEye } from "react-icons/fa";

const Register = () => {
  return (
    <LoginWrapper>
      <SecurityImage image={registerImage} />
      <form className="form">
        <h3 className="reg-tit">Welcome To Lilies!</h3>
        <FormInput type="text" name="name" placeholder="Your First Name" />
        <FormInput type="email" name="email" placeholder="Your Email Address" />
        <FormInput
          type="password"
          name="password"
          placeholder="Your Password"
          icon={<FaEye className="reg-icon" />}
        />

        <button type="button" className="btn">
          Sign up
        </button>
        <h4 className="log">
          <span>Already have an account.</span>{" "}
          <Link to="/login" className="logon">
            Login
          </Link>
        </h4>
      </form>
    </LoginWrapper>
  );
};

export default Register;

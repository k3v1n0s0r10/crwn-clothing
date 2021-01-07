import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.scss";

const SignIn: React.FC = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setSignInData({
      email: "",
      password: "",
    });
  };

  const handleChange = (event: any) => {
    const { value, name } = event.target;

    setSignInData((oldInfo) => ({
      ...oldInfo,
      [name]: value,
    }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>

      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={signInData.email}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          label="Password"
          value={signInData.password}
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>

          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

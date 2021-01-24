import React, { FormEvent } from "react";

import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import useForm from "../../hooks/useForm";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.scss";

const SignUp: React.FC = () => {
  const [signUpData, handleChange, clearForm] = useForm({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    const { userName, email, password, confirmPassword } = signUpData;

    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, userName);
    } catch (err) {}

    clearForm();
  };

  return (
    <div className="sign-up">
      <h2>I do not have a account</h2>

      <span>Sign Up with your email and password</span>

      <form autoComplete="false" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="User Name"
          value={signUpData.displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={signUpData.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={signUpData.password}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={signUpData.confirmPassword}
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

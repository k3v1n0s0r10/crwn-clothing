import React from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import {
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";

import "./SignIn.scss";
import useForm from "../../hooks/useForm";

const SignIn: React.FC = () => {
  const [signInData, handleChange, clearForm] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await createUserProfileDocument(signInData);

    clearForm();
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>

      <span>Sign in with your email and password</span>

      <form autoComplete="false" onSubmit={handleSubmit}>
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

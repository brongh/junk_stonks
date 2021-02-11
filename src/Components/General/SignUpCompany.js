import React from "react";
import SignUpForm from "./components/SignUpForm";

const SignUpCompany = () => {
  return (
    <div className="pageContainer">
      <div>
        <h2>Sign up as a company!</h2>
      </div>
      <div className="signupFormContainer">
        <SignUpForm data={2} />
      </div>
    </div>
  );
};

export default SignUpCompany;

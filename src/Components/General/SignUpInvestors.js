import React from "react";

import SignUpForm from "./components/SignUpForm";

const SignUpInvestors = () => {
  return (
    <div className="pageContainer">
      <div>
        <h2>Sign up as an investor!</h2>
      </div>
      <div className="signupFormContainer">
        <SignUpForm data={1} />
      </div>
    </div>
  );
};

export default SignUpInvestors;

import React from "react";
import NewFundForm from "./components/NewFundForm";

const NewFund = () => {
  return (
    <div>
      <div>
        <h1>Create a new funding round</h1>
      </div>
      <div className="signupFormContainer">
        <NewFundForm />
      </div>
    </div>
  );
};

export default NewFund;

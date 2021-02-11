import React from "react";

import SignUpCards from "./components/SignUpCards";

const SignUpMain = () => {
  const investorSignUp = {
    title: "Invest in Funds",
    text: "Create an investor account to invest now!",
    link: "investor",
  };
  const companySignUp = {
    title: "Raise Funds",
    text: "Create an account to raise funds for your company today!",
    link: "company",
  };

  return (
    <div className="pageInsideContainer">
      <div className="titles">
        <h3>Main Sign Up Page</h3>
      </div>
      <div className="sideWaysCards">
        <SignUpCards data={investorSignUp} />
        <SignUpCards data={companySignUp} />
      </div>
    </div>
  );
};

export default SignUpMain;

import React from "react";

import HomeCards from "./components/HomeCards";
import { useAuthState } from "../Context/context";
import LoggedInHome from "./components/LoggedInHome";

const Home = () => {
  const user = useAuthState();

  const investorDetails = {
    title: "Invest in private companies",
    text:
      "Take advantage of our vast collection of private offerings to invest your money!",
    link: "signup/investor",
  };
  const companyDetails = {
    title: "Raise Capital",
    text: "Raise capital quickly and easily through our platform",
    link: "signup/company",
  };
  const aboutUsDetails = {
    title: "About us",
    text:
      "We specialise in SMEs and start-up markets. We grant a highly efficient and comprehensive platform to invest or to raise capital",
    link: "signup/aboutus",
  };

  return (
    <div className="pageInsideContainer">
      <div>
        <h1>Home Page</h1>
      </div>
      <div style={{ height: "50px" }}></div>
      {user.userDetails.account_type == undefined ? (
        <div className="sideWaysCards">
          <HomeCards data={investorDetails} />
          <HomeCards data={companyDetails} />
          <HomeCards data={aboutUsDetails} />
        </div>
      ) : (
        <LoggedInHome />
      )}
    </div>
  );
};

export default Home;

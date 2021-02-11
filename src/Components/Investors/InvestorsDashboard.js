import React from "react";

import PortfolioSummary from "./components/PortfolioSummary";
import InvestorCart from "./components/InvestorCart";
// import AvailableInvestments from "./components/AvailableInvestments";

const InvestorsDashboard = () => {
  return (
    <div className="pageInsideContainer">
      <div>
        <h1>Investor's Dashboard</h1>
      </div>
      <div style={{ height: "100px" }}></div>
      <div className="sideWaysCards">
        <PortfolioSummary />

        {/* <InvestorCart /> */}
      </div>
    </div>
  );
};

export default InvestorsDashboard;

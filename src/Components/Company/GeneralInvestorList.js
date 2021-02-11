import React, { useEffect } from "react";
// import axios from "axios";

import InvestorTable from "./components/investorTable";
import { getUsersAxios } from "../api/axiosCalls";
import TableNav from "./components/TableNav";

const GeneralInvestorList = () => {
  // const [investorData, setInvestorData] = useState([]);

  useEffect(() => {
    getUsersAxios();
  }, []);

  return (
    <div className="pageInsideContainer">
      <div>
        <h2>General Investor List</h2>
      </div>
      <div style={{ height: "50px" }}></div>
      <div className="sideWaysCards">
        <div>
          <TableNav />
        </div>
        <div className="threeQuarterTable">
          <InvestorTable />
        </div>
      </div>
    </div>
  );
};

export default GeneralInvestorList;

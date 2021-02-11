import React from "react";
import CompanyInvestors from "./components/CompanyInvestors";
import FundingProgress from "./components/FundingProgress";
import { axiosInstance } from "../api/axiosCalls";
import { useAuthState } from "../Context/context";
import { useEffect, useState } from "react";
import MaterialTable from "material-table";

import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CompanyDashboard = () => {
  const [details, setDetails] = useState([]);
  const userDetails = useAuthState();
  const [loaded, setLoaded] = useState(false)
  const [fund, setFund] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await axiosInstance.get(
        `/user_trans/${userDetails.userDetails.user_id}/`
      );
      const output = res.data.funds_set
      setDetails(output)
      setLoaded(true)
    }
    const data = getData()
  }, [loaded])
  
  return (
    <div className="pageInsideContainer">
      <div>
        <h1>Company's Dashboard</h1>
      </div>
      <div style={{ height: "50px" }}></div>
      <div className="sideWaysCards">
        <div className="customCardsBorder" style={{ width: "300px" }}>
          <div>
            <h3>Funds Nav</h3>
          </div>
          <div>
            <LinkContainer to="/company/newfund">
              <Button variant="outline-danger">New Funding Round</Button>
            </LinkContainer>
          </div>
          <MaterialTable
      title="Current Funds"
      style={{ width: "100%"}}
      options={{ pageSize: 10, search: false }}
      columns={[
        { title: "Fund", field: "fund_name" },
        { title: "Raising:", field: "target_funds"} 
      ]}
      data={details}
      onRowClick={(e, rowData) => setFund(rowData.funds_id)}
    />
        </div>
        <FundingProgress fund_id={fund}/>
        <CompanyInvestors fund_id={fund}/>
      </div>
    </div>
  );
};

export default CompanyDashboard;

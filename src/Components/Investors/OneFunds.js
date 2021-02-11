import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { axiosInstance } from "../api/axiosCalls";
import { DataTable } from "../dataTable/dataTable";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const fundProps = {
  colData: [
    { title: "Description", field: "company_description" },
    { title: "Proposal", field: "proposal" },
    { title: "Target", field: "target_funds" },
    { title: "Interests", field: "returns" },
    { title: "Country", field: "country" },
    { title: "Deadline", field: "funds_deadline" },
  ],
  optionsData: { search: false },
  title: "Fund Details",
};

const transProps = {
  colData: [
    { title: "Sum", field: "investment_sum" },
    { title: "Date", field: "date_invested" },
  ],
  optionsData: { search: false },
  title: "Funding Progress",
};

const accountProps = {
  colData: [
    { title: "Published date", field: "report_date" },
    { title: "Method", field: "type" },
    { title: "Revenue", field: "revenues" },
    { title: "Expenses", field: "expenses" },
    { title: "Operating Income", field: "operating_income" },
    { title: "Other Income", field: "other_income" },
    { title: "Pre-tax Income", field: "pre_tax_income" },
    { title: "Tax provision", field: "tax_provision" },
    { title: "Net Income", field: "net_income" },
  ],
  optionsData: { search: false },
  title: "Financial Statements",
};

const OneFunds = () => {
  const [details, setDetails] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { fundID } = useParams();

  useEffect(() => {
    const fetchAll = async () => {
      const res = await axiosInstance.get(`superfund/${fundID}/`);
      const output = await res.data;
      console.log(output);
      setDetails([output]);
      setLoaded(true);
    };
    fetchAll();
    // console.log(details);
  }, [loaded]);

  let location = useLocation();
  return (
    <div className="oneFundContainer">
      {!loaded ? (
        "loading"
      ) : (
        <>
          <div className="oneFundTopCol">
            <div>
              <h3>Company: {details[0].fund_name}</h3>
            </div>
            <div>
              <LinkContainer to={`${location.pathname}/invest`}>
                <Button size="lg">Invest!</Button>
              </LinkContainer>
            </div>
          </div>
          <div className="oneFundTopCol">
            <div>
              <DataTable
                colData={fundProps.colData}
                optionsData={fundProps.optionsData}
                data={details}
                title={fundProps.title}
              />
            </div>
            <div>
              <DataTable
                colData={transProps.colData}
                optionsData={transProps.optionsData}
                data={details[0].transactions_set}
                title={transProps.title}
              />
              {/* {console.table(details[0].transactions_set)} */}
            </div>
          </div>
          <div>
            <DataTable
              colData={accountProps.colData}
              optionsData={accountProps.optionsData}
              data={details[0].accounts_set}
              title={accountProps.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default OneFunds;

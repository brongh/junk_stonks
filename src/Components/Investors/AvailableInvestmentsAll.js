import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import {
  FirstPage,
  LastPage,
  ChevronRight,
  ChevronLeft,
  Clear,
  Search,
  ArrowDownward,
} from "@material-ui/icons";
import { forwardRef } from "react";
import { axiosInstance } from "../api/axiosCalls";
import { useHistory } from "react-router-dom";

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

const AvailableInvestmentsAll = () => {
  const [funds, setFunds] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchFunds = async () => {
      const res = await axiosInstance.get("funds/");
      const output = await res.data.results;
      setFunds(output);
      setLoaded(true);
    };
    fetchFunds();
  }, [loaded]);
  return (
    <div style={{ width: "90%" }}>
      <h1>Available Investments All</h1>
      {!loaded ? (
        "loading"
      ) : (
        <MaterialTable
          icons={tableIcons}
          columns={[
            { title: "Name", field: "funds_id" },
            { title: "Name", field: "fund_name" },
            { title: "Target Fund", field: "target_funds" },
            { title: "Interest", field: "returns" },
            { title: "Country", field: "country" },
            { title: "Target deadline", field: "funds_deadline" },
          ]}
          data={funds}
          onRowClick={(e, rowData) => {
            history.push(`/investor/investments/${rowData.funds_id}/invest`);
          }}
        />
      )}
    </div>
  );
};

export default AvailableInvestmentsAll;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../api/axiosCalls";
import { tableIcons } from "../../dataTable/dataTable";
import { useAuthState } from "../../Context/context";
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";

const tableOpts = {
  optionsData: {
    search: false,
    pageSize: 10,
    showTitle: false,
  },
  colData: [
    { title: "date", field: "date_invested" },
    { title: "Invested amount", field: "investment_sum" },
  ],
  title: null,
};

const PortfolioSummary = () => {
  const [details, setDetails] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const userDetails = useAuthState();
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const res = await axiosInstance.get(
        `/user_trans/${userDetails.userDetails.user_id}/`
      );
      const output = res.data.transactions_set;
      setDetails(output);
      setLoaded(true);
    };
    const data = getData();
  }, [loaded]);

  return (
    <div className="customCardsBorder">
      <h1>Portfolio Summary</h1>
      <div style={{ width: "95%" }}>
        {!loaded ? (
          <p>Loading...</p>
        ) : (
          <MaterialTable
            icons={tableIcons}
            columns={tableOpts.colData}
            options={tableOpts.optionsData}
            data={details}
            onRowClick={(e, rowData) =>
              history.push(`/investor/investments/${rowData.invested_funds}`)
            }
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioSummary;

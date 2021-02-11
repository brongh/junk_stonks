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
import { axiosInstance } from '../../api/axiosCalls';
import { useEffect, useState } from "react";
import { useAuthState } from "../../Context/context";
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

const InvestorTable = () => {
  const[details, setDetails] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // const userDetails = useAuthState();
  // const history = useHistory();
  
  useEffect(() => {
    const getData = async () => {
      const res = await axiosInstance.get(
        `/users/`
      );
      const output = res.data.results.filter(x => x.profile.account_type === 1);
      setDetails(output);
      setLoaded(true);
    }
    const data = getData();
  }, [loaded])
  
  return (
    <MaterialTable
      title="All Investor List"
      icons={tableIcons}
      options={{ pageSize: 10 }}
      columns={[
        { title: "First Name", field: "first_name" },
        { title: "Surname", field: "last_name" },
        { title: "Country", field: "profile.country" },
        // { title: "Invested Amount", field: "total_invested" },
        { title: "Company", field: "profile.company" },
      ]}
      data={details}
    />
  );
};

export default InvestorTable;

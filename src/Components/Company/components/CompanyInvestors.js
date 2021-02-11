import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosCalls";
import MaterialTable from "material-table";



const CompanyInvestors = (props) => {
  
  const [details, setDetails] = useState([])
  const [loaded, setLoaded] = useState(false)
  

  useEffect(() => {
    const getData = async () => {
      const res = await axiosInstance.get(
        `/funds_trans/${props.fund_id}/`
      );
      const output = res.data.transactions_set
      setDetails(output)
      setLoaded(true)
    }
    const data = getData()
  }, [props])
  
  return (
    <div className="customCardsBorder" style={{ width: "300px"}}>
      {!loaded ? <p>Click on a fund to see investment history.</p> : <MaterialTable
      title="Investments Made"
      style={{ width: "100%" }}
      options={{ pageSize: 10, search: false }}
      columns={[
        { title: "Date", field: "date_invested" },
        { title: "Sum Invested", field: "investment_sum" },
      ]}
      data={details}
    />}
      
    </div>
  );
};

export default CompanyInvestors;

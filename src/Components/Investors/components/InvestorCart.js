import { DataTable } from "../../dataTable/dataTable";

// const {
//   colData: [
//     {title: ""}
//   ]
// }

const InvestorCart = () => {
  return (
    <div className="customCardsBorder">
      <h1>Cart</h1>
      <div style={{ width: "95%" }}>
        <DataTable />
      </div>
    </div>
  );
};

export default InvestorCart;

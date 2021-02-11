import InvestorTable from "./components/investorTable";
import TableNav from "./components/TableNav";

const InvestedList = () => {
  return (
    <div className="pageInsideContainer">
      <div>
        <h2>Invested Investor List</h2>
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

export default InvestedList;

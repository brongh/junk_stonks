import DataTable from "./DataTable";

const AvailableInvestments = () => {
  return (
    <div className="customCardsBorder">
      <h1>Available Investments</h1>
      <div style={{ width: "95%" }}>
        <DataTable />
      </div>
    </div>
  );
};

export default AvailableInvestments;

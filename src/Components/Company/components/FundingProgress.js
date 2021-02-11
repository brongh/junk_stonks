import React from "react";
import MultiAxisLine from "./chart/Chart";

const FundingProgress = (props) => {
  return (
    <div className="customCardsBorder">
      <div>
        <h3>FundingProgress</h3>
      </div>
      <div style={{ width: "100%" }}>
        <MultiAxisLine fund_id={props.fund_id}/>
      </div>
    </div>
  );
};

export default FundingProgress;

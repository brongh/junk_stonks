import React from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from "../../Context";
import { LinkContainer } from "react-router-bootstrap";

const LoggedInHome = () => {
  const user = useAuthState();
  return (
    <div
      style={{
        width: "500px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px auto",
        boxShadow: "1px 5px 5px 3px rgba(0,0,0,0.3)",
        borderRadius: "10px",
      }}
    >
      <div>
        <h2>hi</h2>
      </div>
      <div
        style={{
          display: "flex",
          width: "400px",
          height: "100px",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        {user.userDetails.account_type === 1 ? (
          <>
            <div>
              <LinkContainer to="/investor">
                <Button>View Dashboard</Button>
              </LinkContainer>
            </div>
            <div>
              <LinkContainer to="/investor/investments">
                <Button>Explore Funds</Button>
              </LinkContainer>
            </div>
          </>
        ) : (
          <>
            <div>
              <LinkContainer to="/company">
                <Button>View Dashboard</Button>
              </LinkContainer>
            </div>
            <div>
              <LinkContainer to="/investor/investorlist">
                <Button>Our Network</Button>
              </LinkContainer>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoggedInHome;

import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuthState } from "../Context/index";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";

import { investMoney } from "../api/axiosCalls";

const NewInvestFund = () => {
  const { register, handleSubmit } = useForm();
  const userDetails = useAuthState();
  const fund_id = useParams();
  const history = useHistory();
  let fund = parseInt(fund_id.fundID);
  let newDate = new Date(Date.now());
  let dateInvest = moment(newDate).format("YYYY-MM-DD");

  const onSubmitForm = (formData) => {
    formData.user_id = userDetails.userDetails.user_id;
    formData.invested_funds = fund;
    formData.date_invested = dateInvest;
    investMoney(formData);
    history.push(`/investor/investments/${fund}`);
  };

  return (
    <div>
      <h3>Invest in this fund!</h3>
      <div>
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <Form.Group controlId="investment_sum">
            <Form.Label>Investment Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="How Generous are you?"
              name="investment_sum"
              ref={register({
                required: {
                  value: true,
                  message: "Please enter an amount above 0",
                },
                valueAsNumber: {
                  value: true,
                  message: "Please enter a number",
                },
                validate: {
                  positive: (value) => parseInt(value, 10) > 0,
                },
              })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewInvestFund;

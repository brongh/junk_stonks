import React from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";
import { useAuthState } from "../../Context/index";
import { axiosInstance } from "../../api/axiosCalls";
import { useHistory } from "react-router-dom";

const NewFundForm = () => {
  const { register, handleSubmit } = useForm();
  const userDetails = useAuthState();
  const history = useHistory();

  const onSubmitForm = (formData) => {
    formData.owner = userDetails.userDetails.user_id;
    axiosInstance
      .post("funds/", formData)
      .then((response) => console.log("response", response));
    history.push("/company");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <Form.Row>
        <Form.Group as={Col} Col={6}>
          <Form.Label>Fund Name</Form.Label>
          <Form.Control
            placeholder="Fund Name"
            name="fund_name"
            ref={register({
              required: {
                value: true,
                messsage: "Username is required",
              },
              minLength: {
                value: 4,
                messsage: "Username should be at least 4 characters long",
              },
            })}
          />
        </Form.Group>
        <Form.Group as={Col} Col={6}>
          <Form.Label>Target Funds</Form.Label>
          <Form.Control
            type="number"
            placeholder="Target"
            name="target_funds"
            ref={register({
              required: {
                value: true,
                message: "Target amount of funds is required",
              },
            })}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} Col={6}>
          <Form.Label>Interest</Form.Label>
          <Form.Control
            type="float"
            placeholder="Interest"
            name="returns"
            ref={register({
              required: {
                required: true,
                message: "Interest rate on ur fund is required.",
              },
              validated: {
                positive: (value) => parseFloat(value, 10) > 0,
                lessThanOne: (value) => parseFloat(value) < 1,
              },
            })}
          />
        </Form.Group>
        <Form.Group as={Col} Col={6}>
          <Form.Label>Country</Form.Label>
          <Form.Control placeholder="Country" name="country" ref={register} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} Col={6}>
          <Form.Label>Proposal</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Proposal"
            name="proposal"
            ref={register}
          />
        </Form.Group>
        <Form.Group as={Col} Col={6}>
          <Form.Label>Company Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Description"
            name="company_description"
            ref={register}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} Col={6}>
          <Form.Label>Funding Deadline</Form.Label>
          <Form.Control
            type="date"
            placeholder="date"
            name="funds_deadline"
            ref={register}
          />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewFundForm;

import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { signUpAxios } from "../../api/axiosCalls";
import { ErrorMessage } from "@hookform/error-message";
import { useHistory } from "react-router-dom";

const SignUpForm = ({ data }) => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmitForm = (formData) => {
    formData.profile.account_type = data;
    console.table(formData);
    signUpAxios(formData);
    // history.push("/login");
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Form.Row>
          <Form.Group as={Col} Col={6}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Username"
              name="username"
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
            <ErrorMessage
              errors={errors}
              name="username"
              render={({ message }) => <div className="errors">{message}</div>}
            />
          </Form.Group>
          <Form.Group as={Col} Col={6}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              ref={register({
                required: {
                  value: true,
                  message: "password is required",
                },
                minLength: {
                  value: 8,
                  message: "password must be at least 8 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <div className="errors">{message}</div>}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} Col={6}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              ref={register}
            />
          </Form.Group>
          <Form.Group as={Col} Col={6}>
            <Form.Label>Country</Form.Label>
            <Form.Control
              placeholder="Country"
              name="profile.country"
              ref={register}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} Col={6}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="first name"
              name="first_name"
              ref={register}
            />
          </Form.Group>
          <Form.Group as={Col} Col={6}>
            <Form.Label>Family Name</Form.Label>
            <Form.Control
              placeholder="family name"
              name="last_name"
              ref={register}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} Col={6}>
            <Form.Label>Company</Form.Label>
            <Form.Control
              placeholder="company"
              name="profile.company"
              ref={register}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;

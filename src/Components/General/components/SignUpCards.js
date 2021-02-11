import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SignUpCards = ({ data }) => {
  return (
    <Card style={{ width: "20rem", height: "300px", margin: "10px 10px" }}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.text}</Card.Text>
        <LinkContainer to={`/signup/${data.link}`}>
          <Button variant="outline-primary">Create Account</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default SignUpCards;

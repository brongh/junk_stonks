import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomeCards = ({ data }) => {
  return (
    <Card
      style={{
        width: "18rem",
        height: "320px",
        margin: "20px 10px",
        position: "relative",
      }}
    >
      <Card.Body>
        <div style={{ height: "20%" }}>
          <Card.Title>{data.title}</Card.Title>
        </div>

        <Card.Text>{data.text}</Card.Text>
        <div style={{ position: "absolute", bottom: "20px" }}>
          <LinkContainer to={`/${data.link}`}>
            <Button>Find out More</Button>
          </LinkContainer>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HomeCards;

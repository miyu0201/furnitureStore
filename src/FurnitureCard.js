import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Badge, Button } from "react-bootstrap";

function FurnitureCard({ data, setOrdered }) {
  return (
    <Card className="h-100 shadow-sm bg-white rounded">
      <Card.Img variant="top" src={data.image} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify=content-between">
          <Card.Title className="mb-0 me-3 fs-5 font-weight-bold">
            {data.name}
          </Card.Title>
          <Badge bg="primary" pill className="mb-2 ms-auto fs-7">
            ${data.price}
          </Badge>
        </div>
        <Card.Subtitle className="mb-3 text-muted fs-6">
          {data.sub}
        </Card.Subtitle>

        <Card.Text className="text-secondary">{data.desc}</Card.Text>
        <Button
          className="mt-auto font-weight-bold"
          variant="success"
          block
          onClick={() => setOrdered()}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FurnitureCard;

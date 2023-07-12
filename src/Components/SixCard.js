import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import product from "../assets/bag.png";
import N from "../assets/Naira.png";
import NairaGrey from "../assets/NairaGrey.png";
import { COLORS } from "../consatants";
function CardC() {
  return (
    <Card style={{ border: "unset" }}>
      <Card.Img
        style={{ height: "150px", width: "150px" }}
        variant="top"
        src={product}
        className="m-auto mt-3 mb-3"
      />
      <Card.Body>
        <Card.Text style={{ fontSize: "12px" }} className="mb-2">
          Mini Crossbody Tote Bag
        </Card.Text>
        <div className="d-flex flex-column justify-content-start align-items-start">
          <div>
            <Card.Text
              className="mb-0"
              style={{ fontSize: "12px", fontWeight: "bold" }}
            >
              <img src={N} />
              22,500
            </Card.Text>
          </div>
          <div>
            <Button
              size="sm"
              style={{
                border: "unset",
                fontSize: "14px",
                backgroundColor: COLORS.yellow,
                color: "black",
                margin: "5px 0px",
              }}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardC;

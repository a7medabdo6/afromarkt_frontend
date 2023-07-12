import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import grocery from "../assets/grocery.png";
import N from "../assets/Naira.png";
import NairaGrey from "../assets/NairaGrey.png";
import { COLORS } from "../consatants";
function SecondCard() {
  return (
    <>
      <Card className="p-2 pb-0 mt-2 mb-3" style={{ border: "unset" }}>
        <div
          style={{ backgroundColor: COLORS.grey }}
          className="d-flex justify-content-center align-items-center"
        >
          <Card.Img
            style={{ height: "80px", width: "62px" }}
            variant="top"
            src={grocery}
            className="m-auto mt-3 mb-3"
          />
        </div>

        <Card.Body className="p-2">
          <div className="d-flex justify-content-center align-items-center">
            <Card.Text className="mb-2">Mini Crossbody</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="p-2 pb-0 mt-2 mb-3" style={{ border: "unset" }}>
        <div
          style={{ backgroundColor: COLORS.grey }}
          className="d-flex justify-content-center align-items-center"
        >
          <Card.Img
            style={{ height: "80px", width: "62px" }}
            variant="top"
            src={grocery}
            className="m-auto mt-3 mb-3"
          />
        </div>

        <Card.Body className="p-2">
          <div className="d-flex justify-content-center align-items-center">
            <Card.Text className="mb-2">Mini Crossbody</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default SecondCard;

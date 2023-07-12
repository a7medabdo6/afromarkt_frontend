import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Components/Card";
import SecondCard from "./Components/SecondCard";
import ThirdCard from "./Components/ThirdCard";
import ForthCard from "./Components/ForthCard";
import FifthCard from "./Components/FifthCard";
import SixCard from "./Components/SixCard";
import SevenCard from "./Components/sevenCard";
import Head from "./Components/Head";
import { COLORS } from "./consatants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./Components/Slider";
import Navbar from "./Components/navbar";
function App() {
  return (
    <Container fluid="sm">
      <Row>
        <Navbar />
      </Row>
      <Row className="mb-3">
        <Col className=" d-none d-sm-block" md={3}>
          <div
            style={{
              backgroundColor: "#F3F3F3",
              paddingLeft: 35,
              paddingBlock: 19,
            }}
          >
            <h6 className="mt-3 ml-2">Everything Leather</h6>
            <h6 className="mt-3 "> Household Items</h6>
            <h6 className="mt-3 "> Fashion & Accessories</h6>
            <h6 className="mt-3 "> Grocery Store</h6>
            <h6 className="mt-3 "> Food is Ready</h6>
            <h6 className="mt-3 "> Office and Home Furnitures</h6>
            <h6 className="mt-3 "> African Literature</h6>
            <h6 className="mt-3 "> Health & Beauty</h6>
            <h6 className="mt-3 "> Musical instruments</h6>
            <h6 className="mt-3 "> Art and Crafts</h6>
            <h6 className="mt-3 "> Other Categories</h6>
          </div>
        </Col>
        <Col md={9}>
          <SimpleSlider />
        </Col>
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Afromarkt Deals" />
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>{" "}
        <Col>
          <Card />
        </Col>{" "}
        <Col>
          <Card />
        </Col>{" "}
        <Col>
          <Card />
        </Col>
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Browse Other Categories" />
        <Col>
          <SecondCard />
        </Col>
        <Col>
          <SecondCard />
        </Col>{" "}
        <Col>
          <SecondCard />
        </Col>{" "}
        <Col>
          <SecondCard />
        </Col>{" "}
        <Col>
          <SecondCard />
        </Col>
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="African Literature" />
        <Col>
          <ThirdCard />
        </Col>
        <Col>
          <ThirdCard />
        </Col>{" "}
        <Col>
          <ThirdCard />
        </Col>{" "}
        <Col>
          <ThirdCard />
        </Col>{" "}
        <Col>
          <ThirdCard />
        </Col>
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Our Services" />
        <Col>
          <ForthCard />
        </Col>
        <Col>
          <ForthCard />
        </Col>{" "}
        <Col>
          <ForthCard />
        </Col>{" "}
        <Col>
          <ForthCard />
        </Col>{" "}
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Men’s Top" />
        <Col>
          <FifthCard />
        </Col>
        <Col>
          <FifthCard />
        </Col>{" "}
        <Col>
          <FifthCard />
        </Col>{" "}
        <Col>
          <FifthCard />
        </Col>{" "}
        <Col>
          <FifthCard />
        </Col>
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Ankara Bags for Women" />
        <Col>
          <SixCard />
        </Col>
        <Col>
          <SixCard />
        </Col>{" "}
        <Col>
          <SixCard />
        </Col>{" "}
        <Col>
          <SixCard />
        </Col>{" "}
        <Col>
          <SixCard />
        </Col>
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Popular on Afromagic" />
        <Col md={12}>
          <img className="w-100" src={require("./assets/banner.png")} />
        </Col>
        <Col>
          <SevenCard />
        </Col>
        <Col>
          <SevenCard />
        </Col>{" "}
        <Col>
          <SevenCard />
        </Col>{" "}
        <Col>
          <SevenCard />
        </Col>{" "}
      </Row>
      <footer
        style={{
          backgroundColor: COLORS.main,
          paddingTop: 30,
          paddingBottom: 20,
        }}
      >
        <Row className="m-3">
          <Col md={3}>
            <h4 className="text-white m-2">Afromarkt</h4>
            <h6 className="text-white mt-3 m-2">About Us</h6>
            <h6 className="text-white mt-3 m-2">Contact Us</h6>
            <h6 className="text-white mt-3 m-2">Our Blog</h6>
            <h6 className="text-white mt-3 m-2">Pay for my order</h6>
            <h6 className="text-white mt-3 m-2">Afromakt Delivery</h6>
            <h6 className="text-white mt-3 m-2"> Payment Gateways</h6>
          </Col>
          <Col md={3}>
            <h4 className="text-white m-2">Become a Afromarkter</h4>
            <h6 className="text-white m-2"> Sell Products on Afromarkt</h6>
            <h6 className="text-white m-2"> Become an Affiliate</h6>
          </Col>
          <Col md={3}>
            <h4 className="text-white m-2">Support</h4>
            <h6 className="text-white m-2">Terms & Conditions</h6>
            <h6 className="text-white m-2">Privacy Policy</h6>
            <h6 className="text-white m-2"> Return Policy</h6>
            <h6 className="text-white m-2">FAQ </h6>
          </Col>
          <Col md={3}>
            <h4 className="text-white m-2">Stay Connected</h4>
            <Row className="justify-content-center align-items-center">
              <Col md={3}>
                <img src={require("./assets/Facebook.png")} />
              </Col>
              <Col md={3}>
                <img src={require("./assets/Instagram.png")} />
              </Col>
              <Col md={3}>
                <img src={require("./assets/Twitter.png")} />
              </Col>
              <Col md={3}>
                <img src={require("./assets/LinkedIn.png")} />
              </Col>
            </Row>
          </Col>
          <Col md={8}>
            <Row className="justify-content-center align-items-center">
              <Col md={3}>
                <img src={require("./assets/master.png")} />
              </Col>
              <Col md={3}>
                <img src={require("./assets/pay.png")} />
              </Col>
              <Col md={3}>
                <img src={require("./assets/paypal.png")} />
              </Col>
              <Col md={3}>
                <img src={require("./assets/visa.png")} />
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default App;

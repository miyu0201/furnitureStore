import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Nav, Navbar,Form, Row, Col,Button,Breadcrumb } from "react-bootstrap";
import Confirmation from "./Confirmation";
import furnitures from "./data";
import FurnitureCard from "./FurnitureCard";
import logo from "./logo.png";
import Carousel from 'react-bootstrap/Carousel';

function App() {
  const [ordered, setOrdered] = useState(false);

  function handleConfirmation() {
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  }

  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="80"
              height="40"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
          </Nav>

          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
        </Container>
  </Navbar>


    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{maxHeight:"400px", objectFit: "cover"}}
          src="https://www.passionhome.se/wp-content/uploads/2022/03/preso-ii.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>KIVIK 3-seat sofa</h3>
          <p>Generous size, low armrests and pocket springs with foam that molds to the body means that you and your guests will enjoy relaxing and socializing on the sofa hour after hour.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight:"400px", objectFit: "cover"}}
          src="https://www.ikea.com/se/sv/images/products/symfonisk-hoegtalarlampa-med-wi-fi-bambuskaerm-svart__1071313_pe854903_s5.jpg?f=s"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>SYMFONISK Speaker lamp with Wi-Fi</h3>
          <p>Wifi speakers with 180-degree sound and lamp base in one make the sound blend into your home.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight:"400px", objectFit: "cover"}}
          src="https://www.ikea.com/se/sv/images/products/vanligen-vaermeljushallare-gra__0820354_pe775008_s5.jpg?f=s"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>VANLIGEN Heat lamp holder</h3>
          <p>
          Do you like round, romantic shapes with materials and colors that stand out and take over the room? Then you should take a look at our VANLIGEN series - extroverted products that like to attract attention.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Breadcrumb className="mt-3"  style={{marginLeft:"100px"}}>
      <Breadcrumb.Item href="" >
      <a href='#' style={{color:"grey"}}>Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item >
      <a href="https://www.ikea.com/se/sv/rooms/living-room/gallery/ett-vardagsrum-med-ordnat-lugn-foer-alla-pubdb1b3a90" style={{color:"grey"}}>Products</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>New Arrival</Breadcrumb.Item>
    </Breadcrumb>

    <Container className="mt-5">
      {ordered && <Confirmation toggle={setOrdered} />}
      <Row>
        {furnitures.map((data) => (
          <Col xs={3} className="mb-5" key={"${data.id}"}>
            <FurnitureCard data={data} setOrdered={handleConfirmation} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default App;

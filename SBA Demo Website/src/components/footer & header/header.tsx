// import { useState } from "react";
import logo from "../../assets/Logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  // const [open, setOpen] = useState(false);

  // const menuClass = `dropdown-menu${open ? " show" : ""}`;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Snoqualmie Bharath Association
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#DataStructures">Data Structures</Nav.Link>
            <Nav.Link href="#CompetitiveProgramming">
              Competitive Programming
            </Nav.Link>
            <NavDropdown title="Courses" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">backend</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">frontend</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DSA</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">cp</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="/community">
              Community
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

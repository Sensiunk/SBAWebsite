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
    <Navbar collapseOnSelect expand="lg" className="bg-warning">
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <NavDropdown title="About Us" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/aboutus">About Us Pt.1</NavDropdown.Item>
              <NavDropdown.Item href="/aboutus">About Us Pt.2</NavDropdown.Item>
              <NavDropdown.Item href="/aboutus">About Us Pt.3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/aboutus">
                About Us Pt.4.1
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

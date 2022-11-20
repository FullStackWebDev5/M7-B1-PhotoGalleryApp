import { Container, Navbar, Nav } from "react-bootstrap"
import brandLogo from '../assets/brand-logo.png'

const NavbarComponent = ({ setPage }) => {
	return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="" onClick={() => setPage("Home")}>
          <img
            alt="logo"
            src={brandLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Photo Gallery App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="" onClick={() => setPage("Home")}>
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="" onClick={() => setPage("About Us")}>
              About Us
            </Nav.Link>
            <Nav.Link href="" onClick={() => setPage("Contact Us")}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent
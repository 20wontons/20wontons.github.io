import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar sticky="top" variant="dark" bg="dark" activeKey="#top">
            <Container>
                <Navbar.Brand href="#top">Antoine Nguyen</Navbar.Brand>
                <Nav className="me-auto" variant="pills">
                    <Nav.Link eventKey={0} href="#projects">Projects</Nav.Link>
                    <Nav.Link eventKey={1} href="#music">Music</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
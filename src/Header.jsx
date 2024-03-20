import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                <Button type="submit">Sing Up</Button>
            </Container>
        </Navbar>

    );
}






export default Header;

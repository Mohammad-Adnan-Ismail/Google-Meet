import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import img from '../../../images/Google_Meet-Logo.wine.svg'


const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
    }
    const useNavigation = () => {
        navigate('/about')
    }
    // navber components
    return (
        <div className='fixed-top'>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
            <Navbar.Brand as={Link} to="/">
            <img
                        src={img}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
          </Navbar.Brand>

                <Navbar.Brand as={Link} to="/">
                   
                    <h3>Google Meet</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/overview">Overview</Nav.Link>
                        <Nav.Link href="howItWorks">How it works</Nav.Link>
                        <Nav.Link href="plan&pricing">Plans & Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user && <button onClick={useNavigation} className='btn text-white'>{user.displayName}</button>
                        }
                        {
                            user ?
                                <button className='btn text-white' onClick={handleSignOut}>Sign out</button>
                                :
                                <Nav.Link eventKey={2} as={Link} to="/login">
                                    Sign in
                                </Nav.Link>}

                        <input className='mx-1' placeholder='Enter meeting code' type="Number" />
                        <Button className='mx-2'>Join</Button>

                        <Button>
                            Start a meeting
                        </Button>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Header;
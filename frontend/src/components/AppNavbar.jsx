import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFeatherAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const navStyle = {
  background: 'linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)',
  boxShadow: '0 2px 16px rgba(80, 80, 120, 0.08)',
  borderRadius: '0 0 1rem 1rem'
};

const brandStyle = {
  fontWeight: 800,
  fontSize: '1.8rem',
  letterSpacing: '2px',
  color: '#fff',
  display: 'flex',
  alignItems: 'center'
};

const linkStyle = {
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.1rem',
  marginRight: '1rem',
  letterSpacing: '1px'
};

const AppNavbar = () => {
  return (
    <Navbar expand="lg" style={navStyle} className="mb-4 py-2">
      <Container>
        <Navbar.Brand as={Link} to="/" style={brandStyle}>
          <FaFeatherAlt style={{ marginRight: '0.5rem', color: '#ffd700', fontSize: '2rem' }} />
          ProfessioNest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: '#fff' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/AboutMe"
              style={linkStyle}
              activeStyle={{
                color: '#ffd700',
                textShadow: '0 2px 8px #fff'
              }}
            >
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

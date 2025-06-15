import React from 'react'; // Imports the core React library, essential for building components.
import { Link, NavLink } from 'react-router-dom'; // Imports Link for basic navigation and NavLink for navigation that can have active styling.
import Container from 'react-bootstrap/Container'; // Imports Bootstrap's Container component for layout.
import Nav from 'react-bootstrap/Nav'; // Imports Bootstrap's Nav component for navigation links.
import Navbar from 'react-bootstrap/Navbar'; // Imports Bootstrap's Navbar component to create the navigation bar.
import { FaFeatherAlt } from 'react-icons/fa'; // Imports the Feather icon from the Font Awesome icon pack via react-icons.
import 'bootstrap/dist/css/bootstrap.min.css'; // Imports the standard Bootstrap CSS for styling.

// Defines inline styles as JavaScript objects to be applied to different Navbar elements.
// This keeps styling separate from the JSX for better readability.
const navStyle = {
  background: 'linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)', // Gradient background for the entire navbar.
  boxShadow: '0 2px 16px rgba(80, 80, 120, 0.08)', // Subtle shadow for depth.
  borderRadius: '0 0 1rem 1rem' // Rounded corners at the bottom of the navbar.
};

const brandStyle = {
  fontWeight: 800, // Extra bold font weight for the brand name.
  fontSize: '1.8rem', // Larger font size for prominence.
  letterSpacing: '2px', // Spacing between letters.
  color: '#fff', // White text color.
  display: 'flex', // Uses flexbox for alignment of icon and text.
  alignItems: 'center' // Vertically aligns items in the center.
};

const linkStyle = {
  color: '#fff', // White text color for navigation links.
  fontWeight: 600, // Semi-bold font weight.
  fontSize: '1.1rem', // Font size for links.
  marginRight: '1rem', // Right margin for spacing between links.
  letterSpacing: '1px' // Spacing between letters.
};

// Defines the AppNavbar functional component.
const AppNavbar = () => {
  return (
    // The main Navbar component from React-Bootstrap.
    // 'expand="lg"' makes the navbar collapse into a hamburger menu on screens smaller than 'large'.
    // 'style={navStyle}' applies the custom background and shadow.
    // 'className="mb-4 py-2"' adds Bootstrap utility classes for margin-bottom and vertical padding.
    <Navbar expand="lg" style={navStyle} className="mb-4 py-2">
      {/* Container component for responsive content width and centering within the navbar. */}
      <Container>
        {/* Navbar.Brand is used for your logo/brand name. */}
        {/* 'as={Link}' makes this brand component behave like a react-router-dom Link. */}
        {/* 'to="/"' specifies that clicking the brand navigates to the homepage. */}
        {/* 'style={brandStyle}' applies the custom brand styling. */}
        <Navbar.Brand as={Link} to="/" style={brandStyle}>
          {/* FaFeatherAlt is the feather icon for your brand. */}
          {/* Inline styles here control its specific appearance relative to the text. */}
          <FaFeatherAlt style={{ marginRight: '0.5rem', color: '#ffd700', fontSize: '2rem' }} />
          ProfessioNest {/* The brand text */}
        </Navbar.Brand>

        {/* Navbar.Toggle creates the "hamburger" icon for collapsed navigation on small screens. */}
        {/* 'aria-controls="basic-navbar-nav"' is for accessibility, linking the toggle to the collapsible menu. */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: '#fff' }} />

        {/* Navbar.Collapse contains the actual navigation items that will collapse/expand. */}
        {/* 'id="basic-navbar-nav"' matches the aria-controls of the Toggle button. */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav component wraps the navigation links. */}
          {/* 'className="me-auto"' pushes the links to the right side of the navbar. */}
          <Nav className="me-auto">
            {/* Nav.Link is an individual navigation item. */}
            {/* 'as={NavLink}' makes this link component behave like a react-router-dom NavLink. */}
            {/* NavLink is used over Link specifically to enable 'activeStyle'. */}
            {/* 'to="/AboutMe"' specifies the destination path for this link. */}
            {/* 'style={linkStyle}' applies the general link styling. */}
            {/* 'activeStyle' defines styles applied when this link's path matches the current URL. */}
            <Nav.Link
              as={NavLink}
              to="/AboutMe"
              style={linkStyle}
              activeStyle={{ // These styles are applied when the user is on the /AboutMe page.
                color: '#ffd700', // Changes link color to gold.
                textShadow: '0 2px 8px #fff' // Adds a subtle white text shadow for emphasis.
              }}
            >
              About Us {/* The text displayed for the link. */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Exports the AppNavbar component so it can be imported and used in other files (for example in App.js).
export default AppNavbar;
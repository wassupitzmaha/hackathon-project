import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  FaCode,
  FaServer,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaPaintBrush,
  FaRobot,
  FaCloud,
  FaMobileAlt,
  FaLayerGroup
} from 'react-icons/fa';
import ProfessionSearch from '../data/profession-search.jsx';


const heroStyle = {
  background: 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)',
  color: 'white',
  borderRadius: '1.5rem',
  padding: '2.5rem 2rem',
  marginBottom: '2.5rem',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
};

const introTextStyle = {
  fontSize: '1.2rem',
  maxWidth: '700px',
  margin: '0 auto',
  lineHeight: '1.7'
};

const exploreHeaderStyle = {
  fontWeight: 700,
  letterSpacing: '1px',
  color: '#343a40'
};

const cardGridStyle = {
  marginTop: '2rem'
};

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div style={heroStyle} className="text-center">
        <h1 style={{ fontWeight: 800, fontSize: '2.8rem', letterSpacing: '2px' }}>
          Welcome to <span style={{ color: '#ffd700' }}>ProfessioNest</span>!
        </h1>
        <p style={introTextStyle}>
          <b>Discover Your Path in Tech</b>
          <br />
          Ali and Maha, driven by curiosity and ambition, created ProfessioNest to help you find all the resources you need to launch or grow your tech career. No more endless searching—everything you need is right here, organized for your success.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/10/19/05/technology-1974075_1280.png"
          alt="Tech illustration"
          style={{ width: '220px', margin: '2rem auto 0', display: 'block', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
        />
      </div>

      {/* Profession Navigation Cards */}
      <div className="mt-4">
        <h3 style={exploreHeaderStyle} className="text-center mb-2">
          Explore Professions
        </h3>
        <p className="text-center mb-4" style={{ fontSize: '1.1rem' }}>
          Click on a card below to start exploring your passion in tech!
        </p>
        <ProfessionSearch />

        <Row xs={1} sm={2} md={3} lg={4} className="g-4" style={cardGridStyle}>
          <Col>
            <Card className="h-100 text-center shadow-lg border-0" style={{ background: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)' }}>
              <Card.Body>
                <FaCode size={44} className="mb-2 text-primary" />
                <Card.Title>Front-End Developer</Card.Title>
                <Button as={Link} to="/FrontEndDeveloper" variant="primary" className="mt-2">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-lg border-0" style={{ background: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)' }}>
              <Card.Body>
                <FaServer size={44} className="mb-2 text-success" />
                <Card.Title>Back-End Developer</Card.Title>
                <Button as={Link} to="/BackEndDeveloper" variant="success" className="mt-2">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-lg border-0" style={{ background: 'linear-gradient(120deg, #43e97b 0%, #38f9d7 100%)' }}>
              <Card.Body>
                <FaCogs size={44} className="mb-2 text-warning" />
                <Card.Title>DevOps Engineer</Card.Title>
                <Button as={Link} to="/DevOpsEngineer" variant="warning" className="mt-2">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-lg border-0" style={{ background: 'linear-gradient(120deg, #f7971e 0%, #ffd200 100%)' }}>
              <Card.Body>
                <FaShieldAlt size={44} className="mb-2 text-danger" />
                <Card.Title>Cybersecurity Analyst</Card.Title>
                <Button as={Link} to="/CybersecurityAnalyst" variant="danger" className="mt-2">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-lg border-0" style={{ background: 'linear-gradient(120deg, #56ccf2 0%, #2f80ed 100%)' }}>
              <Card.Body>
                <FaChartLine size={44} className="mb-2 text-info" />
                <Card.Title>Data Scientist</Card.Title>
                <Button as={Link} to="/DataScientist" variant="info" className="mt-2">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-lg border-0" style={{ background: 'linear-gradient(120deg, #f8ffae 0%, #43cea2 100%)' }}>
              <Card.Body>
                <FaPaintBrush size={44} className="mb-2 text-secondary" />
                <Card.Title>UI/UX Designer</Card.Title>
                <Button as={Link} to="/UIUXDesigner" variant="secondary" className="mt-2">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-lg border-0" style={{ background: 'linear-gradient(120deg, #30cfd0 0%, #330867 100%)' }}>
              <Card.Body>
                <FaRobot size={44} className="mb-2 text-dark" />
                <Card.Title>Machine Learning Engineer</Card.Title>
                <Button as={Link} to="/MachineLearningEngineer" variant="dark" className="mt-2">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-lg border-0" style={{ background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)' }}>
              <Card.Body>
                <FaCloud size={44} className="mb-2 text-primary" />
                <Card.Title>Cloud Engineer</Card.Title>
                <Button as={Link} to="/CloudEngineer" variant="primary" className="mt-2">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-lg border-0" style={{ background: 'linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)' }}>
              <Card.Body>
                <FaMobileAlt size={44} className="mb-2 text-success" />
                <Card.Title>Mobile App Developer</Card.Title>
                <Button as={Link} to="/MobileAppDeveloper" variant="success" className="mt-2">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-lg border-0" style={{ background: 'linear-gradient(120deg, #fdc830 0%, #f37335 100%)' }}>
              <Card.Body>
                <FaLayerGroup size={44} className="mb-2 text-info" />
                <Card.Title>Full-Stack Developer</Card.Title>
                <Button as={Link} to="/FullStackDeveloper" variant="info" className="mt-2">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;

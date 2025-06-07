import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCode, FaServer, FaCogs, FaShieldAlt, FaChartLine } from 'react-icons/fa';

function Home() {
  return (
    <div>
      <h1>Welcome to ProfessioNest!</h1>
      <p>
        <b>Introduction</b>
        <p>
          As curious and ambitious career-oriented leaders, Ali and Maha often find themselves looking for resources scattered in different places to start working towards their career
          goals. Therefore, they created ProfessioNest for individuals trying to pursue a career in tech so that it is easier for learners to tailor their time towards their career goals utilizing a centralized place of resources
          instead of wasting time searching all over the internet for resources!
        </p>
      </p>

      {/* Profession Navigation Cards */}
      <div className="mt-4">
        <h3>Explore Professions</h3>
        <p>Click on the cards below and start exploring your passion</p>
        <Row xs={1} sm={2} md={3} className="g-4 mt-2">
          <Col>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaCode size={40} className="mb-2 text-primary" />
                <Card.Title>Front-End Developer</Card.Title>
                <Button as={Link} to="/FrontEndDeveloper" variant="primary">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaServer size={40} className="mb-2 text-success" />
                <Card.Title>Back-End Developer</Card.Title>
                <Button as={Link} to="BackEndDeveloper" variant="success">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaCogs size={40} className="mb-2 text-warning" />
                <Card.Title>DevOps Engineer</Card.Title>
                <Button as={Link} to="/DevOpsEngineer" variant="warning">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaShieldAlt size={40} className="mb-2 text-danger" />
                <Card.Title>Cybersecurity Analyst</Card.Title>
                <Button as={Link} to="/CybersecurityAnalyst" variant="danger">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaChartLine size={40} className="mb-2 text-info" />
                <Card.Title>Data Scientist</Card.Title>
                <Button as={Link} to="/DataScientist" variant="info">
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

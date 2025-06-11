import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaShieldAlt, FaBook, FaVideo, FaChalkboardTeacher, FaFire } from 'react-icons/fa';
import { SiSplunk } from 'react-icons/si';

const skillResources = {
  "Network Security": {
    articles: [
      { title: "Cisco: What Is Network Security?", url: "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html" },
      { title: "IBM: Network Security Explained", url: "https://www.ibm.com/topics/network-security" }
    ],
    courses: [
      { title: "Coursera: Introduction to Network Security", url: "https://www.coursera.org/learn/intro-cyber-security" },
      { title: "Cybrary: Network Security Fundamentals", url: "https://www.cybrary.it/course/network-security/" }
    ],
    youtube: [
      { title: "Network Security Full Course", url: "https://www.youtube.com/watch?v=3QhU9jd03a0" }
    ]
  },
  "Firewalls": {
    articles: [
      { title: "Cloudflare: What is a Firewall?", url: "https://www.cloudflare.com/learning/ddos/glossary/firewall/" },
      { title: "Palo Alto Networks: Firewall Basics", url: "https://www.paloaltonetworks.com/cyberpedia/what-is-a-firewall" }
    ],
    courses: [
      { title: "Udemy: Firewalls and Network Security", url: "https://www.udemy.com/course/firewalls-and-network-security/" }
    ],
    youtube: [
      { title: "Firewalls Explained", url: "https://www.youtube.com/watch?v=9rLZYyMbJic" }
    ]
  },
  "SIEM": {
    articles: [
      { title: "Splunk: What is SIEM?", url: "https://www.splunk.com/en_us/data-insider/what-is-siem.html" },
      { title: "IBM: Security Information and Event Management (SIEM)", url: "https://www.ibm.com/topics/siem" }
    ],
    courses: [
      { title: "Coursera: SIEM Tools and Techniques", url: "https://www.coursera.org/learn/siem-tools-techniques" },
      { title: "Cybrary: SIEM Fundamentals", url: "https://www.cybrary.it/course/siem-fundamentals/" }
    ],
    youtube: [
      { title: "SIEM Explained", url: "https://www.youtube.com/watch?v=F9pJ8rU1J7Q" }
    ]
  }
};

const cardColors = {
  "Network Security": "linear-gradient(120deg, #232526 0%, #414345 100%)",
  "Firewalls": "linear-gradient(120deg, #ff512f 0%, #dd2476 100%)",
  "SIEM": "linear-gradient(120deg, #2193b0 0%, #6dd5ed 100%)",
};

const heroStyle = {
  background: "linear-gradient(120deg, #141e30 0%, #243b55 100%)",
  color: "#fff",
  padding: "3.5rem 0 2.5rem 0",
  borderRadius: "1.5rem",
  marginBottom: "2.5rem",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0,0,0,0.12)"
};

function CybersecurityAnalyst() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch('/api/v1/CybersecurityAnalyst')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        if (data.length > 0 && Array.isArray(data[0].skills)) {
          setSkills(data[0].skills);
        } else {
          setError('No skills found');
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div style={{ color: 'red' }} className="text-center py-5">{error}</div>;

  return (
    <div>
      {/* Hero Section */}
      <div style={heroStyle} className="mb-5 text-center">
        <FaShieldAlt size={60} className="mb-3" />
        <h1 className="display-5 fw-bold mb-2">Cybersecurity Analyst Skills</h1>
        <p className="lead mb-0" style={{ maxWidth: 700, margin: "0 auto" }}>
          <b>What do Cybersecurity Analysts do?</b> They protect organizations from digital threats by monitoring networks, analyzing security incidents, and implementing defense strategies. Explore the top skills and curated resources below!
        </p>
      </div>

      {/* Skills Grid */}
      <Row xs={1} sm={2} md={3} className="g-4">
        {skills.map((skill, idx) => (
          <Col key={idx}>
            <Card
              className="h-100 text-center shadow-sm skill-card"
              onClick={() => setSelectedSkill(skill)}
              style={{
                cursor: "pointer",
                background: cardColors[skill] || "#f4f4f4",
                color: "#fff",
                borderRadius: "1.5rem",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.10)",
                transition: "transform 0.2s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-7px) scale(1.04)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.10)";
              }}
            >
              <Card.Body>
                <Card.Title className="fw-bold fs-4 d-flex align-items-center justify-content-center gap-2">
                  {skill === "Network Security" && <FaShieldAlt />}
                  {skill === "Firewalls" && <FaFire />}
                  {skill === "SIEM" && <SiSplunk />}
                  {skill}
                </Card.Title>
                <Card.Text className="text-light small">
                  Tap for curated learning resources
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Skill Resources */}
      <Modal
        show={!!selectedSkill}
        onHide={() => setSelectedSkill(null)}
        centered
        size="lg"
        aria-labelledby="skill-resource-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="skill-resource-modal">
            Resources for <span className="fw-bold">{selectedSkill}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSkill && skillResources[selectedSkill] && (
            <>
              <h5 className="text-primary text-decoration-underline mb-2 d-flex align-items-center gap-2">
                <FaBook /> Articles
              </h5>
              <ul className="list-unstyled ps-2">
                {skillResources[selectedSkill].articles.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-dark fw-medium" style={{ textDecoration: "none" }}>
                      ▸ {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <h5 className="text-primary text-decoration-underline mt-4 mb-2 d-flex align-items-center gap-2">
                <FaChalkboardTeacher /> Courses
              </h5>
              <ul className="list-unstyled ps-2">
                {skillResources[selectedSkill].courses.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-dark fw-medium" style={{ textDecoration: "none" }}>
                      ▸ {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <h5 className="text-primary text-decoration-underline mt-4 mb-2 d-flex align-items-center gap-2">
                <FaVideo /> YouTube Tutorials
              </h5>
              <ul className="list-unstyled ps-2">
                {skillResources[selectedSkill].youtube.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-dark fw-medium" style={{ textDecoration: "none" }}>
                      ▸ {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setSelectedSkill(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Subtle Card Animation */}
      <style>{`
        .skill-card {
          transition: transform 0.2s, box-shadow 0.3s;
        }
        .skill-card:hover,
        .skill-card:focus {
          transform: translateY(-7px) scale(1.04);
          box-shadow: 0 12px 32px rgba(0,0,0,0.18);
        }
      `}</style>
    </div>
  );
}

export default CybersecurityAnalyst;

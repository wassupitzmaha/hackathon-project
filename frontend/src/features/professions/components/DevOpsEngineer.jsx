import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  FaCloud,
  FaTools,
  FaCodeBranch,
  FaBook,
  FaChalkboardTeacher,
  FaVideo,
} from "react-icons/fa";

const skillResources = {
  AWS: {
    articles: [
      { title: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
      {
        title: "AWS Getting Started Resource Center",
        url: "https://aws.amazon.com/getting-started/resources/",
      },
    ],
    courses: [
      {
        title: "AWS Cloud Practitioner Essentials (Coursera)",
        url: "https://www.coursera.org/learn/aws-cloud-practitioner-essentials",
      },
      {
        title: "freeCodeCamp: AWS Certified Cloud Practitioner Full Course",
        url: "https://www.youtube.com/watch?v=3hLmDS179YE",
      },
    ],
    youtube: [
      {
        title: "AWS Tutorial for Beginners",
        url: "https://www.youtube.com/watch?v=ulprqHHWlng",
      },
    ],
  },
  Azure: {
    articles: [
      {
        title: "Microsoft Azure Documentation",
        url: "https://docs.microsoft.com/en-us/azure/",
      },
      {
        title: "Azure Fundamentals Learning Path",
        url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/",
      },
    ],
    courses: [
      {
        title: "Azure Fundamentals (Coursera)",
        url: "https://www.coursera.org/learn/microsoft-azure-fundamentals",
      },
      {
        title: "freeCodeCamp: Azure Fundamentals Full Course",
        url: "https://www.youtube.com/watch?v=3gkPEwQYxXw",
      },
    ],
    youtube: [
      {
        title: "Azure Tutorial for Beginners",
        url: "https://www.youtube.com/watch?v=izL4D1qX1fw",
      },
    ],
  },
  "CI/CD": {
    articles: [
      {
        title: "What is CI/CD? (Red Hat)",
        url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
      },
      {
        title: "Atlassian: CI/CD Explained",
        url: "https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd",
      },
    ],
    courses: [
      {
        title: "Coursera: Continuous Integration and Continuous Deployment",
        url: "https://www.coursera.org/learn/continuous-integration-continuous-deployment",
      },
      {
        title: "Udacity: CI/CD Pipeline with Jenkins",
        url: "https://www.udacity.com/course/ci-cd-pipeline-with-jenkins--ud282",
      },
    ],
    youtube: [
      {
        title: "CI/CD Pipeline Tutorial",
        url: "https://www.youtube.com/watch?v=1hHMwLxN6EM",
      },
    ],
  },
};

const cardColors = {
  AWS: "linear-gradient(120deg, #FF9900 0%, #FFB84D 100%)",
  Azure: "linear-gradient(120deg, #0078D7 0%, #00A4EF 100%)",
  "CI/CD": "linear-gradient(120deg, #6f42c1 0%, #a475f9 100%)",
};

const heroStyle = {
  background:
    "linear-gradient(120deg, #0f2027, #203a43, #2c5364)",
  color: "#fff",
  padding: "3.5rem 1rem 2.5rem",
  borderRadius: "1.5rem",
  marginBottom: "2.5rem",
  textAlign: "center",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
};

function DevOpsEngineer() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch("/api/v1/DevOpsEngineer")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data.length > 0 && Array.isArray(data[0].skills)) {
          setSkills(data[0].skills);
        } else {
          setError("No skills found");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-center py-5 fs-4 text-secondary">Loading...</div>
    );
  if (error)
    return (
      <div className="text-center py-5 text-danger fw-bold fs-5">{error}</div>
    );

  const getIcon = (skill) => {
    switch (skill) {
      case "AWS":
        return <FaCloud />;
      case "Azure":
        return <FaTools />;
      case "CI/CD":
        return <FaCodeBranch />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={heroStyle}>
        <FaTools size={64} className="mb-3" />
        <h1 className="display-5 fw-bold mb-3">DevOps Engineer Skills</h1>
        <p className="lead mx-auto" style={{ maxWidth: 720 }}>
          <b>What Do DevOps Engineers Do?</b>
          <br />
          DevOps engineers bridge the gap between software development and IT
          operations. They automate, monitor, and streamline processes for
          deploying, scaling, and managing applications and infrastructure,
          ensuring reliability, scalability, and rapid delivery of software
          products.
        </p>
      </section>

      {/* Skills Cards */}
      <Row xs={1} sm={2} md={3} className="g-4">
        {skills.map((skill, idx) => (
          <Col key={idx}>
            <Card
              className="h-100 text-center shadow-sm skill-card"
              onClick={() => setSelectedSkill(skill)}
              style={{
                cursor: "pointer",
                background: cardColors[skill] || "#f8f9fa",
                color: cardColors[skill] ? "#fff" : "#000",
                borderRadius: "1.5rem",
                transition: "transform 0.2s, box-shadow 0.3s",
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-7px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
              }}
            >
              <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title className="fw-bold fs-4 d-flex justify-content-center align-items-center gap-2">
                  {getIcon(skill)}
                  {skill}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Resources */}
      <Modal
        show={!!selectedSkill}
        onHide={() => setSelectedSkill(null)}
        centered
        size="lg"
        aria-labelledby="devops-skill-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="devops-skill-modal">
            Resources for <span className="fw-bold">{selectedSkill}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSkill && skillResources[selectedSkill] && (
            <>
              <h5 className="text-primary d-flex align-items-center gap-2 mb-2">
                <FaBook />
                Articles
              </h5>
              <ul className="ps-3">
                {skillResources[selectedSkill].articles.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none fw-medium"
                      style={{ color: "#333" }}
                    >
                      ▸ {item.title}
                    </a>
                  </li>
                ))}
              </ul>

              <h5 className="text-primary d-flex align-items-center gap-2 mt-4 mb-2">
                <FaChalkboardTeacher />
                Courses
              </h5>
              <ul className="ps-3">
                {skillResources[selectedSkill].courses.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none fw-medium"
                      style={{ color: "#333" }}
                    >
                      ▸ {item.title}
                    </a>
                  </li>
                ))}
              </ul>

              <h5 className="text-primary d-flex align-items-center gap-2 mt-4 mb-2">
                <FaVideo />
                YouTube Tutorials
              </h5>
              <ul className="ps-3">
                {skillResources[selectedSkill].youtube.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none fw-medium"
                      style={{ color: "#333" }}
                    >
                      ▸ {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={() => setSelectedSkill(null)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Hover effect styles */}
      <style>{`
        .skill-card {
          transition: transform 0.2s, box-shadow 0.3s;
        }
        .skill-card:hover, .skill-card:focus {
          transform: translateY(-7px) scale(1.05);
          box-shadow: 0 12px 32px rgba(0,0,0,0.25);
        }
      `}</style>
    </div>
  );
}

export default DevOpsEngineer;

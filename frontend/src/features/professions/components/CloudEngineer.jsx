import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAws, FaMicrosoft, FaGoogle } from "react-icons/fa";
import { Container, Button, Modal } from "react-bootstrap";

//Skill Resources
const skillResources = {
  AWS: {
    icon: <FaAws size={54} color="#FF9900" />,
    articles: [
      { title: "How to Learn AWS From Scratch in 2025: The Complete Guide", url: "https://www.datacamp.com/blog/learn-aws" },
      { title: "AWS Certification Path: A Step-by-Step 2025 Guide", url: "https://k21academy.com/amazon-web-services/aws-cloud-certifications/" },
    ],
    courses: [
      { title: "Introduction to Cloud Computing on AWS for Beginners [2025]", url: "https://www.udemy.com/course/introduction-to-cloud-computing-on-amazon-aws-for-beginners/?couponCode=LEARNNOWPLANS" },
      { title: "AWS Fundamentals Specialization", url: "https://www.coursera.org/specializations/aws-fundamentals" },
    ],
    youtube: [
      { title: "AWS Tutorial for Beginners (2025) – Step-by-Step Guide", url: "https://www.youtube.com/watch?v=Nzv-tzU-UAw" },
      { title: "AWS Full Course 2025 | AWS Training | Simplilearn", url: "https://www.youtube.com/watch?v=UmQnenLf_Cs" },
    ],
  },
  Azure: {
    icon: <FaMicrosoft size={54} color="#0078D4" />,
    articles: [
      { title: "Complete Guide to Microsoft Azure Certifications in 2025", url: "https://www.linkedin.com/pulse/from-beginner-expert-complete-guide-microsoft-azure-2025-atul-kumar-7pqlf" },
      { title: "Azure Certification: Step-by-Step Guide 2025", url: "https://k21academy.com/microsoft-azure/certification-path/" },
    ],
    courses: [
      { title: "AZ-900: Azure Fundamentals Exam Prep - MAY 2025", url: "https://www.udemy.com/course/az900-azure/?couponCode=LEARNNOWPLANS" },
      { title: "Azure Cloud Architect Masters Program", url: "https://www.simplilearn.com/azure-cloud-architect-certification-training-course" },
    ],
    youtube: [
      { title: "Azure Tutorial For Beginners [2025]", url: "https://www.youtube.com/watch?v=S417kGaBerM&t=3s" },
      { title: "Azure Full Course 2025 | Simplilearn", url: "https://www.youtube.com/watch?v=2FrrGNCVopg" },
    ],
  },
  GCP: {
    icon: <FaGoogle size={54} color="#4285F4" />,
    articles: [
      { title: "How to Learn GCP (2025 Update)", url: "https://mentorcruise.com/how-to/gcp/" },
      { title: "What Is Google Cloud Platform?", url: "https://www.simplilearn.com/google-cloud-platform-article" },
    ],
    courses: [
      { title: "GCP Fundamentals for Beginners - Udemy", url: "https://www.udemy.com/course/google-cloud-platform-gcp-fundamentals-for-beginners/" },
      { title: "Architecting with GCP Specialization - Coursera", url: "https://www.coursera.org/specializations/gcp-architecture" },
    ],
    youtube: [
      { title: "GCP Full Course 2025 | Simplilearn", url: "https://www.youtube.com/watch?v=JSrNC1vcpmc" },
      { title: "GCP Tutorial for Beginners 2025 – FreeCodeCamp", url: "https://www.youtube.com/watch?v=ULlVc1M7QaE" },
    ],
  },
};

const cardGradients = {
  AWS: "linear-gradient(120deg, #f7971e 0%, #ffd200 100%)",
  Azure: "linear-gradient(120deg, #0078D4 0%, #00a4ef 100%)",
  GCP: "linear-gradient(120deg, #4285F4 0%, #34a853 100%)",
};

//Hero Section Style
const heroStyle = {
  background: "linear-gradient(120deg, #232526 0%, #414345 100%)",
  color: "#fff",
  padding: "4rem 0 3rem 0",
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
  marginBottom: "2.5rem",
  position: "relative",
  overflow: "hidden",
};

const heroOverlay = {
  position: "absolute",
  top: 0, left: 0, right: 0, bottom: 0,
  background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 70%)",
  zIndex: 0,
};

function CloudEngineer() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch("/api/v1/CloudEngineer")
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

  //Loading/Error States
  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div style={{ color: "red" }} className="text-center py-5">{error}</div>;

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <div style={heroStyle} className="position-relative mb-5">
        <div style={heroOverlay}></div>
        <div className="position-relative" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold mb-3 text-center">
            Cloud Engineer Skills & Resources
          </h1>
          <p className="lead text-center mb-0" style={{ maxWidth: 700, margin: "0 auto" }}>
            <strong>What do Cloud Engineers do?</strong> They design, deploy, and manage cloud infrastructure to ensure scalable, secure, and efficient operations. Explore the top skills and curated resources below!
          </p>
        </div>
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
                background: cardGradients[skill] || "#f4f4f4",
                color: "#22223b",
                borderRadius: "1.5rem",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.2s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-7px) scale(1.04)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.08)";
              }}
            >
              <Card.Body>
                <div className="mb-3">{skillResources[skill]?.icon}</div>
                <Card.Title className="fw-bold fs-4">{skill}</Card.Title>
                <Card.Text className="text-muted small">
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
            {selectedSkill && (
              <>
                {skillResources[selectedSkill]?.icon} Resources for <span className="fw-bold">{selectedSkill}</span>
              </>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSkill && skillResources[selectedSkill] && (
            <>
              {["articles", "courses", "youtube"].map((section, idx) => (
                <div key={idx} className="mb-4">
                  <h5 className="text-decoration-underline text-primary text-capitalize mb-2">{section}</h5>
                  <ul className="list-unstyled ps-2">
                    {skillResources[selectedSkill][section].map((item, i) => (
                      <li key={i} className="mb-1">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark fw-medium"
                          style={{ textDecoration: "none" }}
                        >
                          ▸ {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setSelectedSkill(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CSS for subtle card animation */}
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
    </Container>
  );
}

export default CloudEngineer;

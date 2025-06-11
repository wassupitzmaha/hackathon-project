import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import { SiFigma, SiSketch, SiAdobexd } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

// Skill resources for UI/UX tools
const skillResources = {
  Figma: {
    icon: <SiFigma size={56} color="#fff" />,
    articles: [
      { title: "Figma Official Getting Started", url: "https://help.figma.com/hc/en-us/articles/360040318194-Getting-Started-with-Figma" },
      { title: "Figma Design Best Practices", url: "https://uxdesign.cc/figma-best-practices-2021-3c5f1b0b8a9c" },
    ],
    courses: [
      { title: "Figma for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8" },
      { title: "Figma UI/UX Design Essentials (Udemy)", url: "https://www.udemy.com/course/figma-ux-ui/" },
    ],
    youtube: [
      { title: "Figma Tutorial for Beginners", url: "https://www.youtube.com/watch?v=4W4LvJnNegI" },
    ],
  },
  Sketch: {
    icon: <SiSketch size={56} color="#fff" />,
    articles: [
      { title: "Sketch Official Documentation", url: "https://www.sketch.com/docs/" },
      { title: "Sketch Tips & Tricks", url: "https://www.smashingmagazine.com/2018/01/sketch-app-tips-tricks/" },
    ],
    courses: [
      { title: "Sketch from A to Z (Udemy)", url: "https://www.udemy.com/course/sketch-design/" },
    ],
    youtube: [
      { title: "Sketch App Tutorial for Beginners", url: "https://www.youtube.com/watch?v=5kB0a0r2KpY" },
    ],
  },
  AdobeXD: {
    icon: <SiAdobexd size={56} color="#fff" />,
    articles: [
      { title: "Adobe XD Tutorials", url: "https://helpx.adobe.com/xd/tutorials.html" },
      { title: "Adobe XD UI/UX Design Guide", url: "https://www.adobe.com/products/xd/learn/get-started.html" },
    ],
    courses: [
      { title: "Adobe XD Masterclass (YouTube)", url: "https://www.youtube.com/watch?v=68w2VwalD5w" },
      { title: "Adobe XD UI/UX Design (Udemy)", url: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/" },
    ],
    youtube: [
      { title: "Adobe XD for Beginners", url: "https://www.youtube.com/watch?v=5jvVnF9lJDk" },
    ],
  },
};

// Gradient backgrounds for each skill card
const cardGradients = {
  Figma: "linear-gradient(135deg, #F24E1E 0%, #A259FF 100%)",
  Sketch: "linear-gradient(135deg, #F7B500 0%, #FFB5E1 100%)",
  AdobeXD: "linear-gradient(135deg, #FF61F6 0%, #5C2D91 100%)",
};

// Icon mapping for watermark
const skillIcons = {
  Figma: <SiFigma size={120} color="#fff" />,
  Sketch: <SiSketch size={120} color="#fff" />,
  AdobeXD: <SiAdobexd size={120} color="#fff" />,
};

const UIUXDesigner = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Fetch skills from API (mocked for demo)
  useEffect(() => {
    // Replace with your actual API call if needed
    setTimeout(() => {
      setSkills(["Figma", "Sketch", "AdobeXD"]);
      setLoading(false);
    }, 700);
    // If using real API:
    // fetch("/api/v1/UIUXDesigner")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.skills) setSkills(data.skills);
    //     else setError("No skills found.");
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setError("Failed to fetch skills.");
    //     setLoading(false);
    //   });
  }, []);

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <MdDesignServices
          size={96}
          color="#0d6efd"
          className="mb-3"
          aria-hidden="true"
          style={{ transition: "transform 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.transform = "rotate(-8deg) scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = "rotate(0) scale(1)"}
        />
        <h1 className="fw-bold mb-2">UI/UX Designer</h1>
        <p className="lead text-secondary mb-0">
          Crafting seamless, delightful user experiences and beautiful interfaces using modern design tools.
        </p>
      </section>

      {/* Loading/Error State */}
      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <div className="mt-2">Loading skills...</div>
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Skill Cards */}
      {!loading && !error && (
        <Row xs={1} sm={2} md={3} className="g-4 mb-5 justify-content-center">
          {skills.map((skill) => (
            <Col key={skill}>
              <Card
                className={`h-100 text-center shadow-sm skill-card position-relative ${
                  selectedSkill === skill ? "border-primary" : ""
                }`}
                onClick={() => setSelectedSkill(skill)}
                tabIndex={0}
                aria-pressed={selectedSkill === skill}
                aria-label={`View resources for ${skill}`}
                style={{
                  background: cardGradients[skill] || "#f8f9fa",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                  userSelect: "none",
                  borderWidth: selectedSkill === skill ? "3px" : "1px",
                  boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.10)",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.07)";
                  e.currentTarget.style.boxShadow = "0 1.5rem 2.5rem rgba(0,0,0,0.18)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 0.5rem 1.5rem rgba(0,0,0,0.10)";
                }}
              >
                <Card.Body className="d-flex flex-column align-items-center justify-content-center position-relative" style={{ zIndex: 1 }}>
                  <div className="mb-3">{skillResources[skill]?.icon}</div>
                  <Card.Title className="fs-4 fw-semibold">{skill}</Card.Title>
                </Card.Body>
                {/* Faded Icon Watermark */}
                <div
                  style={{
                    position: "absolute",
                    right: -20,
                    bottom: -20,
                    opacity: 0.13,
                    fontSize: 120,
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                >
                  {skillIcons[skill]}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Skill Resources Panel */}
      {selectedSkill && (
        <section
          className="p-4 rounded shadow-sm bg-white mx-auto"
          style={{
            maxWidth: 820,
            boxShadow: "0 1rem 2.5rem rgba(242, 78, 30, 0.12)",
            border: `3px solid #F24E1E`,
            animation: "fadeInUp 0.4s ease forwards",
            background: "linear-gradient(135deg, #fff 80%, #F7B500 100%)"
          }}
        >
          <div className="d-flex align-items-center mb-3">
            <div className="me-3">{skillResources[selectedSkill]?.icon}</div>
            <h2 className="fw-bold mb-0">{selectedSkill} Resources</h2>
            <Button
              variant="outline-danger"
              className="ms-auto"
              onClick={() => setSelectedSkill(null)}
              aria-label="Close resources panel"
            >
              Close
            </Button>
          </div>
          <hr />
          <Row>
            <Col md={4} className="mb-3">
              <h5 className="fw-semibold">Articles</h5>
              <ul className="list-unstyled">
                {skillResources[selectedSkill]?.articles.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={4} className="mb-3">
              <h5 className="fw-semibold">Courses</h5>
              <ul className="list-unstyled">
                {skillResources[selectedSkill]?.courses.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={4} className="mb-3">
              <h5 className="fw-semibold">YouTube</h5>
              <ul className="list-unstyled">
                {skillResources[selectedSkill]?.youtube.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </section>
      )}

      {/* Fade-in animation for the resource panel */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </Container>
  );
};

export default UIUXDesigner;

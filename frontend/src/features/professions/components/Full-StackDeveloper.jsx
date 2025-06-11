import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";

const skillResources = {
  HTML: {
    icon: <SiHtml5 size={56} color="#fff" />,
    articles: [
      { title: "W3Schools HTML Tutorial", url: "https://www.w3schools.com/html/" },
      { title: "MDN Web Docs: HTML Learning Area", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
    ],
    courses: [
      { title: "HTML/CSS for Beginners – freeCodeCamp", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
      { title: "HTML and CSS Foundations – Codecademy", url: "https://www.codecademy.com/learn/learn-html" },
    ],
    youtube: [
      { title: "Learn HTML – Full Tutorial for Beginners", url: "https://www.youtube.com/watch?v=kUMe1FH4CHE" },
      { title: "HTML & CSS Full Course for free", url: "https://www.youtube.com/watch?v=HGTJBPNC-Gw" },
    ],
  },
  CSS: {
    icon: <SiCss3 size={56} color="#fff" />,
    articles: [
      { title: "CSS Tutorial - W3Schools", url: "https://www.w3schools.com/css/" },
      { title: "Learn CSS | web.dev", url: "https://web.dev/learn/css" },
    ],
    courses: [
      { title: "CSS - The Complete Guide 2025 (incl. Flexbox, Grid & Sass)", url: "https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/" },
      { title: "HTML and CSS in depth", url: "https://www.coursera.org/learn/html-and-css-in-depth" },
    ],
    youtube: [
      { title: "CSS Tutorial for Beginners 2025", url: "https://www.youtube.com/watch?v=QeslNHmTObk" },
      { title: "CSS Full Course for Beginners (2025) – Learn CSS from Scratch!", url: "https://www.youtube.com/watch?v=vlqTP-auoCM" },
    ],
  },
  JavaScript: {
    icon: <SiJavascript size={56} color="#fff" />,
    articles: [
      { title: "The Modern JavaScript Tutorial", url: "https://javascript.info" },
      { title: "W3Schools JavaScript Tutorial", url: "https://www.w3schools.com/js/" },
    ],
    courses: [
      { title: "The Complete JavaScript Course 2025: From Zero to Expert!", url: "https://www.udemy.com/course/the-complete-javascript-course/" },
      { title: "Programming with JavaScript", url: "https://www.coursera.org/learn/programming-with-javascript" },
    ],
    youtube: [
      { title: "JavaScript Tutorial 2025 for Beginners - Full Course in 10 Hours", url: "https://www.youtube.com/watch?v=ogdtB_m6G5g" },
      { title: "JavaScript Full Course 2025 | JavaScript Tutorial For Beginners", url: "https://www.youtube.com/watch?v=bv1FuLXRDKs" },
    ],
  },
};

const cardGradients = {
  HTML: "linear-gradient(135deg, #e44d26 0%, #f16529 100%)",
  CSS: "linear-gradient(135deg, #264de4 0%, #2965f1 100%)",
  JavaScript: "linear-gradient(135deg, #f7df1e 0%, #f7b500 100%)",
};

const skillIcons = {
  HTML: <SiHtml5 size={120} color="#fff" />,
  CSS: <SiCss3 size={120} color="#fff" />,
  JavaScript: <SiJavascript size={120} color="#fff" />,
};

function FullStackDeveloper() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch("api/v1/FullStackDeveloper")
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
      .catch(() => {
        setError("Failed to fetch skills.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <section
        style={{
          minHeight: "48vh",
          width: "100%",
          background: "linear-gradient(120deg, #e44d26 0%, #2965f1 60%, #f7df1e 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 0 2.5rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Blurred Circles */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "-60px",
            width: "250px",
            height: "250px",
            background: "radial-gradient(circle, #fff3 0%, #fff0 100%)",
            borderRadius: "50%",
            filter: "blur(24px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            background: "radial-gradient(circle, #fff2 0%, #fff0 100%)",
            borderRadius: "50%",
            filter: "blur(32px)",
            zIndex: 0,
          }}
        />
        <Container style={{ position: "relative", zIndex: 1 }}>
          <div className="text-center">
            <MdDeveloperMode size={110} color="#fff" className="mb-3" aria-hidden="true" />
            <h1 className="fw-bold mb-3" style={{ fontSize: "2.8rem" }}>
              Full Stack Developer
            </h1>
            <p className="lead" style={{ fontSize: "1.35rem", maxWidth: 800, margin: "0 auto", fontWeight: 500 }}>
              Full Stack Developers are versatile engineers who design, build, and maintain both the front-end (what users see and interact with) and the back-end (servers, databases, and application logic) of websites and web applications. They work across the entire technology stack, seamlessly integrating user interfaces with robust server-side systems. By bridging the gap between design and functionality, Full Stack Developers ensure that digital products are not only visually engaging but also scalable, secure, and high-performing from end to end.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-5">
        {loading && (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <div className="mt-2">Loading skills...</div>
          </div>
        )}
        {error && <Alert variant="danger">{error}</Alert>}

        {!loading && !error && (
          <Row xs={1} sm={2} md={3} className="g-4 mt-3 justify-content-center">
            {skills.map((skill, idx) => (
              <Col key={idx}>
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
        {selectedSkill && skillResources[selectedSkill] && (
          <section
            className="p-4 rounded shadow-sm bg-white mx-auto"
            style={{
              maxWidth: 820,
              boxShadow: "0 1rem 2.5rem rgba(228, 77, 38, 0.12)",
              border: `3px solid #e44d26`,
              animation: "fadeInUp 0.4s ease forwards",
              background: "linear-gradient(135deg, #fff 80%, #f7df1e 100%)"
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
    </div>
  );
}

export default FullStackDeveloper;

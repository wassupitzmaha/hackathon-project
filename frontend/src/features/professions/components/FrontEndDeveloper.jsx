
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

const skillResources = {
  HTML: {
    icon: <FaHtml5 size={54} color="#e44d26" />,
    articles: [
      { title: "MDN Web Docs: HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { title: "HTML.com Tutorials", url: "https://html.com/" }
    ],
    courses: [
      { title: "freeCodeCamp: Responsive Web Design", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" }
    ],
    youtube: [
      { title: "HTML Crash Course For Absolute Beginners", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" }
    ]
  },
  CSS: {
    icon: <FaCss3Alt size={54} color="#1572b6" />,
    articles: [
      { title: "MDN Web Docs: CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }
    ],
    courses: [
      { title: "Codecademy: Learn CSS", url: "https://www.codecademy.com/learn/learn-css" }
    ],
    youtube: [
      { title: "CSS Crash Course For Absolute Beginners", url: "https://www.youtube.com/watch?v=yfoY53QXEnI" }
    ]
  },
  JavaScript: {
    icon: <FaJsSquare size={54} color="#f7df1e" />,
    articles: [
      { title: "MDN Web Docs: JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
    ],
    courses: [
      { title: "JavaScript.info", url: "https://javascript.info/" }
    ],
    youtube: [
      { title: "JavaScript Crash Course For Beginners", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c" }
    ]
  }
};

const cardGradients = {
  HTML: "linear-gradient(120deg, #f7971e 0%, #ffd200 100%)",
  CSS: "linear-gradient(120deg, #56ccf2 0%, #2f80ed 100%)",
  JavaScript: "linear-gradient(120deg, #f8ffae 0%, #43cea2 100%)"

};

function FrontEndDeveloper() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch("/api/v1/FrontEndDeveloper")
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>

      <div
        style={{
          background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
          borderRadius: "1.5rem",
          color: "#22223b",
          padding: "2.5rem 2rem",
          marginBottom: "2.5rem",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)"
        }}
        className="text-center"
      >
        <h2 style={{ fontWeight: 800, fontSize: '2.2rem', letterSpacing: '2px' }}>
          Front-End Developer Skills
        </h2>
        <p style={{ fontSize: '1.1rem', maxWidth: 650, margin: '0.5rem auto 0', lineHeight: 1.7 }}>
          <b>What Do Front-End Developers Do?</b>
          <br />
          Front-end developers focus on the visual and interactive elements of a website or web application that users see and interact with. They use coding languages like HTML, CSS, and JavaScript to create the user interface (UI) and ensure the website or application is responsive and works across different devices and browsers.

        </p>
        <img
          src="https://cdn.pixabay.com/photo/2025/02/14/10/41/google-cloud-storage-9406386_1280.png"
          alt="Frontend illustration"
          style={{
            width: '180px',
            margin: '2rem auto 0',
            display: 'block',
            borderRadius: '1rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
          }}
        />
      </div>
      <Row xs={1} sm={2} md={3} className="g-4 mt-3">
        {skills.map((skill, idx) => (
          <Col key={idx}>
            <Card

              className="h-100 text-center shadow-lg border-0"
              onClick={() => setSelectedSkill(skill)}
              style={{
                cursor: "pointer",
                background: cardGradients[skill] || "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
                color: "#22223b",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 24px rgba(80,80,120,0.10)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.18s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(53,114,165,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <Card.Body style={{ position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(255,255,255,0.18)',
                      borderRadius: '50%',
                      padding: '1rem',
                      boxShadow: '0 2px 8px rgba(80,80,120,0.08)'
                    }}
                  >
                    {skillResources[skill] && skillResources[skill].icon}
                  </span>
                </div>
                <Card.Title style={{ fontWeight: 700 }}>{skill}</Card.Title>

              </Card.Body>
              {/* Faded Icon Watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-0.5px',
                  opacity: 0.07,
                  fontSize: '6rem',
                  pointerEvents: 'none'
                }}
              >
                {skillResources[skill] && skillResources[skill].icon}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedSkill && skillResources[selectedSkill] && (
        <div
          className="mt-4"
          style={{
            background: cardGradients[selectedSkill] || "#fff",
            borderRadius: "1.2rem",
            padding: "2rem 1.5rem",
            boxShadow: "0 2px 16px rgba(80,80,120,0.10)",
            maxWidth: 600,
            margin: "2rem auto"
          }}
        >
          <h3 className="mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
            {skillResources[selectedSkill].icon}
            <span>Resources for {selectedSkill}</span>
          </h3>
          <h5>Articles</h5>
          <ul>
            {skillResources[selectedSkill].articles.map((item, idx) => (
              <li key={idx}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <h5>Courses</h5>
          <ul>
            {skillResources[selectedSkill].courses.map((item, idx) => (
              <li key={idx}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <h5>YouTube Tutorials</h5>
          <ul>
            {skillResources[selectedSkill].youtube.map((item, idx) => (
              <li key={idx}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-secondary mt-2"
            onClick={() => setSelectedSkill(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default FrontEndDeveloper;

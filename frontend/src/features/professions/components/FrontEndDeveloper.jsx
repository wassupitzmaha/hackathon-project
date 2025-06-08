import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const skillResources = {
  HTML: {
    articles: [
      {
        title: "MDN Web Docs: HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { title: "HTML.com Tutorials", url: "https://html.com/" },
    ],
    courses: [
      {
        title: "freeCodeCamp: Responsive Web Design",
        url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      },
    ],
    youtube: [
      {
        title: "HTML Crash Course For Absolute Beginners",
        url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
      },
    ],
  },
  CSS: {
    articles: [
      {
        title: "MDN Web Docs: CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    courses: [
      {
        title: "Codecademy: Learn CSS",
        url: "https://www.codecademy.com/learn/learn-css",
      },
    ],
    youtube: [
      {
        title: "CSS Crash Course For Absolute Beginners",
        url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
      },
    ],
  },
  JavaScript: {
    articles: [
      {
        title: "MDN Web Docs: JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
    courses: [{ title: "JavaScript.info", url: "https://javascript.info/" }],
    youtube: [
      {
        title: "JavaScript Crash Course For Beginners",
        url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
      },
    ],
  },
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
      <h2>Front-End Developer Skills</h2>
      <p>
        <b>What Do Front-End Developers Do?</b>
        <p>
          Front-end developers focus on the visual and interactive elements of a
          website or web application that users see and interact with. They use
          coding languages like HTML, CSS, and JavaScript to create the user
          interface (UI) and ensure the website or application is responsive and
          works across different devices and browsers.
        </p>
      </p>
      <Row xs={1} sm={2} md={3} className="g-4 mt-3">
        {skills.map((skill, idx) => (
          <Col key={idx}>
            <Card
              className="h-100 text-center shadow-sm"
              onClick={() => setSelectedSkill(skill)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <Card.Title>{skill}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedSkill && skillResources[selectedSkill] && (
        <div className="mt-4">
          <h3>Resources for {selectedSkill}</h3>
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

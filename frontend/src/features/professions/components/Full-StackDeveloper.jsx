import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const skillResources = {
  HTML: {
    articles: [
      {
        title: "W3Schools HTML Tutorial",
        url: "https://www.w3schools.com/html/",
      },
      {
        title: "MDN Web Docs: HTML Learning Area",
        url: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      },
    ],
    courses: [
      {
        title: "HTML/CSS for Beginners – freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      },
      {
        title: "HTML and CSS Foundations – Codecademy",
        url: "https://www.codecademy.com/learn/learn-html",
      },
    ],
    youtube: [
      {
        title: "Learn HTML – Full Tutorial for Beginners",
        url: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
      },
      {
        title: "HTML & CSS Full Course for free",
        url: "https://www.youtube.com/watch?v=HGTJBPNC-Gw",
      },
    ],
  },
  CSS: {
    articles: [
      {
        title: "CSS Tutorial - W3Schools",
        url: "https://www.w3schools.com/css/",
      },
      { title: "Learn CSS | web.dev", url: "https://web.dev/learn/css" },
    ],
    courses: [
      {
        title: "CSS - The Complete Guide 2025 (incl. Flexbox, Grid & Sass)",
        url: "https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",
      },
      {
        title: "HTML and CSS in depth",
        url: "https://www.coursera.org/learn/html-and-css-in-depth",
      },
    ],
    youtube: [
      {
        title: "CSS Tutorial for Beginners 2025",
        url: "https://www.youtube.com/watch?v=QeslNHmTObk",
      },
      {
        title: "CSS Full Course for Beginners (2025) – Learn CSS from Scratch!",
        url: "https://www.youtube.com/watch?v=vlqTP-auoCM",
      },
    ],
  },
  JavaScript: {
    articles: [
      {
        title: "The Modern JavaScript Tutorial",
        url: "https://javascript.info",
      },
      {
        title: "W3Schools JavaScript Tutorial",
        url: "https://www.w3schools.com/js/",
      },
    ],
    courses: [
      {
        title: "The Complete JavaScript Course 2025: From Zero to Expert!",
        url: "https://www.udemy.com/course/the-complete-javascript-course/",
      },
      {
        title: "Programming with JavaScript",
        url: "https://www.coursera.org/learn/programming-with-javascript",
      },
    ],
    youtube: [
      {
        title:
          "JavaScript Tutorial 2025 for Beginners - Full Course in 10 Hours",
        url: "https://www.youtube.com/watch?v=ogdtB_m6G5g",
      },
      {
        title:
          "JavaScript Full Course 2025 | JavaScript Tutorial For Beginners",
        url: "https://www.youtube.com/watch?v=bv1FuLXRDKs",
      },
    ],
  },
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
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <h2>Full Stack Developer Skills</h2>
      <p>
        <b>What Do Full Stack Developers Do?</b>
          Full Stack Developers design and build both the front-end (user
          interface) and back-end (server, databases) of websites and
          applications. They manage the entire development process, ensuring
          seamless integration and functionality across all components.
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
export default FullStackDeveloper;

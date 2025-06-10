import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const skillResources = {
  Figma: {
    articles: [
      {
        title: "Figma for beginners (4 parts) – Figma Help Center",
        url: "https://help.figma.com/hc/en-us/sections/4405269443991-Figma-for-beginners-4-parts",
      },
      {
        title: "Figma 101: Introduction to Figma – Designlab",
        url: "https://designlab.com/figma-101-course/introduction-to-figma",
      },
    ],
    courses: [
      {
        title: "Figma UI UX Design Essentials – Udemy",
        url: "https://www.udemy.com/course/figma-ux-ui-design-web-design-mobile-app-design/",
      },
      {
        title:
          "Learn Figma for UI/UX Design (Coursera, University of Minnesota)",
        url: "https://www.coursera.org/learn/learn-figma",
      },
    ],
    youtube: [
      {
        title: "Figma Tutorial for Beginners - Complete Course 2025",
        url: "https://www.youtube.com/watch?v=HoKD1qIcchQ",
      },
      {
        title: "Figma Tutorial for Beginners (2024 UI UX Design)",
        url: "https://www.youtube.com/watch?v=JGLfyTDgfDc",
      },
    ],
  },
  Sketch: {
    articles: [
      {
        title: "Beyond the Canvas: Learn design – Sketch",
        url: "https://www.sketch.com/blog/learn-design/",
      },
      {
        title: "Official Sketch Documentation and Guides",
        url: "https://www.sketch.com/docs/",
      },
    ],
    courses: [
      {
        title: "Sketch from A to Z (2024): Become an App Designer – Udemy",
        url: "https://www.udemy.com/course/sketch-from-a-to-z-become-an-app-designer/",
      },
      {
        title: "Sketch Essential Training: The Basics – LinkedIn Learning",
        url: "https://www.linkedin.com/learning/sketch-essential-training-the-basics",
      },
    ],
    youtube: [
      {
        title: "Sketch App Tutorials for Beginners (2024) – Design with Sketch",
        url: "https://www.youtube.com/playlist?list=PLWlUJU11tp4f41pYTiwUODSkcQY6VumyY",
      },
      {
        title: "Sketch Tutorial: Beginners Guide (2024) – DesignCourse",
        url: "https://www.youtube.com/watch?v=wQWwX6lM3CY",
      },
    ],
  },
  AdobeXD: {
    articles: [
      {
        title:
          "Adobe XD: The Essential Tool for UI/UX Designers in 2025 – Simplilearn",
        url: "https://www.simplilearn.com/tutorials/ui-ux-career-resources/adobe-xd",
      },
      {
        title: "Adobe XD Learn & Support – Official Adobe Documentation",
        url: "https://helpx.adobe.com/support/xd.html",
      },
    ],
    courses: [
      {
        title:
          "User Experience Design Essentials – Adobe XD UI UX Design (Udemy)",
        url: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/",
      },
      {
        title: "Introduction to Adobe XD (Domestika)",
        url: "https://www.domestika.org/en/courses/software/182-adobe-xd",
      },
    ],
    youtube: [
      {
        title:
          "Adobe XD Tutorial for Beginners | UI/UX Design Basics & Prototyping",
        url: "https://www.youtube.com/watch?v=15BNRkc869E",
      },
      {
        title: "Getting Started with Adobe XD",
        url: "https://www.youtube.com/watch?v=khq6pnVyXZA",
      },
    ],
  },
};

function UIUXDesigner() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch("/api/v1/UIUXDesigner")
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
      <h2>UI/UX Designer Skills</h2>
      <p>
        <b>What Do UI/UX Designers Do?</b>
        <p>
          UI/UX designers create user-centered designs for digital products,
          focusing on improving accessibility, usability, and visual appeal to
          enhance user satisfaction. They conduct research, develop wireframes
          and prototypes, and collaborate with teams to ensure the end product
          meets user needs and business goals
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
export default UIUXDesigner;

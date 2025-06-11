
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

  if (loading) return <div className="text-center mt-4 fs-5">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-4 fs-5 text-danger fw-semibold">{error}</div>
    );

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center fw-bold">UI/UX Designer Skills</h2>
      <section className="mb-5 px-3 px-md-5 text-center">
        <h5 className="fw-semibold mb-3">What Do UI/UX Designers Do?</h5>
        <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: 700, lineHeight: 1.6 }}>
          UI/UX designers create user-centered designs for digital products, focusing on improving accessibility, usability, and visual appeal to
          enhance user satisfaction. They conduct research, develop wireframes and prototypes, and collaborate with teams to ensure the end product
          meets user needs and business goals.
        </p>
      </section>

      <Row xs={1} sm={2} md={3} className="g-4 mb-5">
        {skills.map((skill, idx) => (
          <Col key={idx}>
            <Card
              className="h-100 text-center shadow-sm skill-card"
              onClick={() => setSelectedSkill(skill)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter') setSelectedSkill(skill); }}
              style={{
                cursor: "pointer",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0.75rem 1.5rem rgba(0,0,0,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0,0,0,0.1)";
              }}
            >
              <Card.Body>
                <Card.Title className="fs-4 fw-semibold">{skill}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedSkill && skillResources[selectedSkill] && (
        <div className="p-4 rounded shadow-sm bg-light mx-auto" style={{ maxWidth: 800 }}>
          <h3 className="mb-4 text-center text-primary fw-bold">Resources for {selectedSkill}</h3>

          <section className="mb-4">
            <h5 className="fw-semibold mb-3 border-bottom pb-2">Articles</h5>
            <ul className="list-unstyled ps-3">
              {skillResources[selectedSkill].articles.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none link-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-4">
            <h5 className="fw-semibold mb-3 border-bottom pb-2">Courses</h5>
            <ul className="list-unstyled ps-3">
              {skillResources[selectedSkill].courses.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none link-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h5 className="fw-semibold mb-3 border-bottom pb-2">YouTube Tutorials</h5>
            <ul className="list-unstyled ps-3">
              {skillResources[selectedSkill].youtube.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none link-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary px-4"
              onClick={() => setSelectedSkill(null)}
            >
              Close Resources
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UIUXDesigner;

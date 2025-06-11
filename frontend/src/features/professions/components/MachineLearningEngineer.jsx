import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const skillResources = {
  Python: {
    articles: [
      {
        title: "Python Official Documentation",
        url: "https://docs.python.org/3/tutorial/",
      },
      { title: "Real Python Tutorials", url: "https://realpython.com/" },
    ],
    courses: [
      {
        title: "freeCodeCamp: Python for Everybody",
        url: "https://www.freecodecamp.org/news/python-for-everybody/",
      },
      {
        title: "Coursera: Python for Everybody",
        url: "https://www.coursera.org/specializations/python",
      },
    ],
    youtube: [
      {
        title: "Python Full Course - freeCodeCamp",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      },
    ],
  },
  TensorFlow: {
    articles: [
      {
        title:
          "TensorFlow Tutorial For Beginners - [Updated 2025] - Intellipaat",
        url: "https://intellipaat.com/blog/tensorflow-tutorial/",
      },
      {
        title: "TensorFlow – Official Documentation and Guides",
        url: "https://www.tensorflow.org",
      },
    ],
    courses: [
      {
        title:
          "Complete Guide to TensorFlow for Deep Learning with Python – Udemy",
        url: "https://www.udemy.com/course/complete-guide-to-tensorflow-for-deep-learning-with-python/",
      },
      {
        title:
          "Getting Started with TensorFlow 2 – Imperial College London on Coursera",
        url: "https://www.coursera.org/learn/getting-started-with-tensor-flow2",
      },
    ],
    youtube: [
      {
        title:
          "TensorFlow Full Course 2025 | TensorFlow Tutorial for Beginners",
        url: "https://www.youtube.com/watch?v=Q5_knerj7S0",
      },
      {
        title: "Complete Training: TensorFlow and PyTorch 2025",
        url: "https://www.youtube.com/watch?v=BVqj1R71508",
      },
    ],
  },
  PyTorch: {
    articles: [
      {
        title:
          "How to Learn PyTorch From Scratch in 2025: An Expert Guide – DataCamp",
        url: "https://www.datacamp.com/blog/how-to-learn-pytorch",
      },
      {
        title: "PyTorch for Deep Learning – Dataquest",
        url: "https://www.dataquest.io/blog/pytorch-for-deep-learning/",
      },
    ],
    courses: [
      {
        title: "Deep Learning with PyTorch: Zero to GANs – Jovian",
        url: "https://jovian.ai/learn/deep-learning-with-pytorch-zero-to-gans",
      },
      {
        title: "PyTorch for Deep Learning and Computer Vision – Udemy",
        url: "https://www.udemy.com/course/pytorch-deep-learning/",
      },
    ],
    youtube: [
      {
        title: "PyTorch 101 Crash Course For Beginners in 2025!",
        url: "https://www.youtube.com/watch?v=LyJtbe__2i0",
      },
      {
        title: "Learn PyTorch in 5 Projects – Tutorial",
        url: "https://www.youtube.com/watch?v=E0bwEAWmVEM",
      },
    ],
  },
};

function MachineLearningEngineer() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch("api/v1/MachineLearningEngineer")
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
      });
    setLoading(false);
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <h2>Machine Learning Engineers</h2>
      <p>
        <b>What Do Machine Learning Engineers Do?</b>
        <p>
          Machine learning engineers are IT professionals who research, design,
          and build artificial intelligence systems that automate predictive
          models by creating algorithms capable of learning and making decisions
          from data. They collaborate with data scientists and other specialists
          to develop efficient, data-driven solutions and continuously improve
          machine learning models for real-world applications.
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
export default MachineLearningEngineer;

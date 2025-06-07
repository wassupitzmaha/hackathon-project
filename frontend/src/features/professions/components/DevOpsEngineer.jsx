import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const skillResources = {
  "AWS": {
    articles: [
      { title: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
      { title: "AWS Getting Started Resource Center", url: "https://aws.amazon.com/getting-started/resources/" }
    ],
    courses: [
      { title: "AWS Cloud Practitioner Essentials (Coursera)", url: "https://www.coursera.org/learn/aws-cloud-practitioner-essentials" },
      { title: "freeCodeCamp: AWS Certified Cloud Practitioner Full Course", url: "https://www.youtube.com/watch?v=3hLmDS179YE" }
    ],
    youtube: [
      { title: "AWS Tutorial for Beginners", url: "https://www.youtube.com/watch?v=ulprqHHWlng" }
    ]
  },
  "Azure": {
    articles: [
      { title: "Microsoft Azure Documentation", url: "https://docs.microsoft.com/en-us/azure/" },
      { title: "Azure Fundamentals Learning Path", url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/" }
    ],
    courses: [
      { title: "Azure Fundamentals (Coursera)", url: "https://www.coursera.org/learn/microsoft-azure-fundamentals" },
      { title: "freeCodeCamp: Azure Fundamentals Full Course", url: "https://www.youtube.com/watch?v=3gkPEwQYxXw" }
    ],
    youtube: [
      { title: "Azure Tutorial for Beginners", url: "https://www.youtube.com/watch?v=izL4D1qX1fw" }
    ]
  },
  "CI/CD": {
    articles: [
      { title: "What is CI/CD? (Red Hat)", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
      { title: "Atlassian: CI/CD Explained", url: "https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd" }
    ],
    courses: [
      { title: "Coursera: Continuous Integration and Continuous Deployment", url: "https://www.coursera.org/learn/continuous-integration-continuous-deployment" },
      { title: "Udacity: CI/CD Pipeline with Jenkins", url: "https://www.udacity.com/course/ci-cd-pipeline-with-jenkins--ud282" }
    ],
    youtube: [
      { title: "CI/CD Pipeline Tutorial", url: "https://www.youtube.com/watch?v=1hHMwLxN6EM" }
    ]
  }
};

function DevOpsEngineer() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch('/api/v1/DevOpsEngineer')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        if (data.length > 0 && Array.isArray(data[0].skills)) {
          setSkills(data[0].skills);
        } else {
          setError('No skills found');
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h2>DevOps Engineer Skills</h2>
      <p>
        <b>What Do DevOps Engineers Do?</b>
        <p>
          DevOps engineers bridge the gap between software development and IT operations. They automate, monitor, and streamline processes for deploying, scaling, and managing applications and infrastructure, ensuring reliability, scalability, and rapid delivery of software products.
        </p>
      </p>
      <Row xs={1} sm={2} md={3} className="g-4 mt-3">
        {skills.map((skill, idx) => (
          <Col key={idx}>
            <Card className="h-100 text-center shadow-sm" onClick={() => setSelectedSkill(skill)} style={{ cursor: "pointer" }}>
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
              <li key={idx}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></li>
            ))}
          </ul>
          <h5>Courses</h5>
          <ul>
            {skillResources[selectedSkill].courses.map((item, idx) => (
              <li key={idx}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></li>
            ))}
          </ul>
          <h5>YouTube Tutorials</h5>
          <ul>
            {skillResources[selectedSkill].youtube.map((item, idx) => (
              <li key={idx}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></li>
            ))}
          </ul>
          <button className="btn btn-secondary mt-2" onClick={() => setSelectedSkill(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default DevOpsEngineer;

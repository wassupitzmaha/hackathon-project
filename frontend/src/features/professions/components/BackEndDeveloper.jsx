import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaNodeJs, FaServer, FaPython } from 'react-icons/fa';


const skillResources = {
  "Node.js": {
    icon: <FaNodeJs size={54} color="#68A063" />,
    articles: [
      { title: "Node.js Official Documentation", url: "https://nodejs.org/en/docs/" },
      { title: "MDN: Introduction to Node.js", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework" }
    ],
    courses: [
      { title: "freeCodeCamp: APIs and Microservices", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" },
      { title: "The Net Ninja: Node.js Crash Course", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ" }
    ],
    youtube: [
      { title: "Node.js Crash Course", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" }
    ]
  },
  "Express": {
    icon: <FaServer size={54} color="#000" />,
    articles: [
      { title: "Express.js Official Documentation", url: "https://expressjs.com/" },
      { title: "MDN: Express Web Framework", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction" }
    ],
    courses: [
      { title: "Codecademy: Learn Express", url: "https://www.codecademy.com/learn/learn-express" }
    ],
    youtube: [
      { title: "Express.js Crash Course", url: "https://www.youtube.com/watch?v=L72fhGm1tfE" }
    ]
  },
  "Python": {
    icon: <FaPython size={54} color="#3776AB" />,
    articles: [
      { title: "Python Official Documentation", url: "https://docs.python.org/3/tutorial/" },
      { title: "Real Python Tutorials", url: "https://realpython.com/" }
    ],
    courses: [
      { title: "freeCodeCamp: Python for Everybody", url: "https://www.freecodecamp.org/news/python-for-everybody/" },
      { title: "Coursera: Python for Everybody", url: "https://www.coursera.org/specializations/python" }
    ],
    youtube: [
      { title: "Python Full Course - freeCodeCamp", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" }
    ]
  }
};

const cardGradients = {
  "Node.js": "linear-gradient(120deg, #43e97b 0%, #38f9d7 100%)",
  "Express": "linear-gradient(120deg, #cfd9df 0%, #e2ebf0 100%)",
  "Python": "linear-gradient(120deg, #f7971e 0%, #ffd200 100%)"
};



function BackEndDeveloper() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch('/api/v1/BackEndDeveloper')
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
    <div style = {{

      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      borderRadius: "1.5rem",
      color: "#22223b",
      padding: "2.5rem 2rem",
      marginBottom: "2.5rem",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.12)"

    }}

      className = "text-center"

    >

      <h2 style = {{

        fontWeight: 800, fontSize: '2.2rem', letterSpacing: '2px'

      }}
      
      >Back-End Developer Skills</h2>
      <p>
        <b>What Do Back-End Developers Do?</b>
        <p>
          Back-end developers build and maintain the server-side logic, databases, and APIs that power web applications. They ensure data is processed, stored, and delivered securely and efficiently, enabling seamless communication between the server, database, and client-side interfaces.
        </p>
      </p>
      <Row xs={1} sm={2} md={3} className="g-4 mt-3">
        {skills.map((skill, idx) => (
          <Col key={idx}>
            <Card className="h-100 text-center shadow-sm" onClick={() => setSelectedSkill(skill)} style={{ background: cardGradients[skill] || "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)", cursor: "pointer" }}>
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

export default BackEndDeveloper;

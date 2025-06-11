import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaPython, FaRProject, FaDatabase } from 'react-icons/fa';

const skillIcons = {
  Python: <FaPython size={36} color="#3572A5" />,
  R: <FaRProject size={36} color="#276DC3" />,
  SQL: <FaDatabase size={36} color="#F29111" />,
};

const skillResources = {
  Python: {
    articles: [
      { title: "Python for Data Science Handbook (O'Reilly)", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
      { title: "Real Python: Data Science Tutorials", url: "https://realpython.com/tutorials/data-science/" }
    ],
    courses: [
      { title: "Coursera: Python for Everybody", url: "https://www.coursera.org/specializations/python" },
      { title: "DataCamp: Introduction to Python", url: "https://www.datacamp.com/courses/intro-to-python-for-data-science" }
    ],
    youtube: [
      { title: "Python for Data Science - freeCodeCamp", url: "https://www.youtube.com/watch?v=LHBE6Q9XlzI" }
    ]
  },
  R: {
    articles: [
      { title: "R for Data Science (Book)", url: "https://r4ds.had.co.nz/" },
      { title: "DataCamp: R Tutorials", url: "https://www.datacamp.com/community/tutorials/tutorials-r" }
    ],
    courses: [
      { title: "Coursera: R Programming", url: "https://www.coursera.org/learn/r-programming" },
      { title: "DataCamp: Introduction to R", url: "https://www.datacamp.com/courses/free-introduction-to-r" }
    ],
    youtube: [
      { title: "R Programming Tutorial - freeCodeCamp", url: "https://www.youtube.com/watch?v=_V8eKsto3Ug" }
    ]
  },
  SQL: {
    articles: [
      { title: "Mode Analytics: SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
      { title: "W3Schools: SQL Tutorial", url: "https://www.w3schools.com/sql/" }
    ],
    courses: [
      { title: "Kaggle: Intro to SQL", url: "https://www.kaggle.com/learn/intro-to-sql" },
      { title: "Coursera: SQL for Data Science", url: "https://www.coursera.org/learn/sql-for-data-science" }
    ],
    youtube: [
      { title: "SQL Full Course - freeCodeCamp", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" }
    ]
  }
};

function DataScientist() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch('/api/v1/DataScientist')
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

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="text-center mt-4 text-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold text-center" style={{
        background: 'linear-gradient(90deg, #3572A5 30%, #276DC3 70%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Data Scientist Skills
      </h2>
      <section className="mb-5 text-center">
        <h5 className="fw-semibold mb-2">What Do Data Scientists Do?</h5>
        <p className="text-muted mx-auto" style={{ maxWidth: 700 }}>
          Data scientists analyze and interpret complex data to help organizations make informed decisions.
          They use programming, statistics, and domain expertise to extract insights, build predictive models,
          and communicate results through data visualizations and reports.
        </p>
      </section>

      <Row xs={1} sm={2} md={3} className="g-4">
        {skills.map((skill, idx) => (
          <Col key={idx}>
            <Card
              className="h-100 text-center shadow border-0 skill-card"
              onClick={() => setSelectedSkill(skill)}
              style={{
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #f8fafc 60%, #e7f0fd 100%)',
                transition: 'transform 0.2s, box-shadow 0.2s'
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
              <Card.Body>
                <div className="mb-2">{skillIcons[skill]}</div>
                <Card.Title className="fs-4 fw-semibold">{skill}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Resources */}
      <Modal
        show={!!selectedSkill}
        onHide={() => setSelectedSkill(null)}
        centered
        size="lg"
        animation
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {skillIcons[selectedSkill]} Resources for {selectedSkill}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSkill && skillResources[selectedSkill] && (
            <>
              <section className="mb-3">
                <h5 className="fw-semibold">Articles</h5>
                <ul>
                  {skillResources[selectedSkill].articles.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mb-3">
                <h5 className="fw-semibold">Courses</h5>
                <ul>
                  {skillResources[selectedSkill].courses.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h5 className="fw-semibold">YouTube Tutorials</h5>
                <ul>
                  {skillResources[selectedSkill].youtube.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedSkill(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DataScientist;

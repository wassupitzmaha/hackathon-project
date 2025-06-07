import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const skillResources = {
  "Python": {
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
  "R": {
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
  "SQL": {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h2>Data Scientist Skills</h2>
      <p>
        <b>What Do Data Scientists Do?</b>
        <p>
          Data scientists analyze and interpret complex data to help organizations make informed decisions. They use programming, statistics, and domain expertise to extract insights, build predictive models, and communicate results through data visualizations and reports.
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

export default DataScientist;

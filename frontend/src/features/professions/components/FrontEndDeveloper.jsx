import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FrontEndDeveloper() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/v1/FrontEndDeveloper')
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
      <h2>Front-End Developer Skills</h2>
      <p>
        <b>What Do Front-End Developers Do?</b>
        <p>
        Front-end developers turn design concepts into functional, interactive digital experiences, focusing on what users see and do on a website or app. Their role is crucial in making sure digital products are attractive, efficient, accessible, and enjoyable to use
        </p>
      </p>
      <Row xs={1} sm={2} md={3} className="g-4 mt-3">
        {skills.map((skill, idx) => (
          <Col key={idx}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <Card.Title>{skill}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FrontEndDeveloper;

import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const skillResources = {
  "Network Security": {
    articles: [
      { title: "Cisco: What Is Network Security?", url: "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html" },
      { title: "IBM: Network Security Explained", url: "https://www.ibm.com/topics/network-security" }
    ],
    courses: [
      { title: "Coursera: Introduction to Network Security", url: "https://www.coursera.org/learn/intro-cyber-security" },
      { title: "Cybrary: Network Security Fundamentals", url: "https://www.cybrary.it/course/network-security/" }
    ],
    youtube: [
      { title: "Network Security Full Course", url: "https://www.youtube.com/watch?v=3QhU9jd03a0" }
    ]
  },
  "Firewalls": {
    articles: [
      { title: "Cloudflare: What is a Firewall?", url: "https://www.cloudflare.com/learning/ddos/glossary/firewall/" },
      { title: "Palo Alto Networks: Firewall Basics", url: "https://www.paloaltonetworks.com/cyberpedia/what-is-a-firewall" }
    ],
    courses: [
      { title: "Udemy: Firewalls and Network Security", url: "https://www.udemy.com/course/firewalls-and-network-security/" }
    ],
    youtube: [
      { title: "Firewalls Explained", url: "https://www.youtube.com/watch?v=9rLZYyMbJic" }
    ]
  },
  "SIEM": {
    articles: [
      { title: "Splunk: What is SIEM?", url: "https://www.splunk.com/en_us/data-insider/what-is-siem.html" },
      { title: "IBM: Security Information and Event Management (SIEM)", url: "https://www.ibm.com/topics/siem" }
    ],
    courses: [
      { title: "Coursera: SIEM Tools and Techniques", url: "https://www.coursera.org/learn/siem-tools-techniques" },
      { title: "Cybrary: SIEM Fundamentals", url: "https://www.cybrary.it/course/siem-fundamentals/" }
    ],
    youtube: [
      { title: "SIEM Explained", url: "https://www.youtube.com/watch?v=F9pJ8rU1J7Q" }
    ]
  }
};

function CybersecurityAnalyst() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch('/api/v1/CybersecurityAnalyst')
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
      <h2>Cybersecurity Analyst Skills</h2>
      <p>
        <b>What Do Cybersecurity Analysts Do?</b>
        <p>
          Cybersecurity analysts protect organizations from digital threats by monitoring networks, analyzing security incidents, and implementing defense strategies. They use tools and best practices to detect vulnerabilities, respond to breaches, and ensure the safety of sensitive data and systems.
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

export default CybersecurityAnalyst;

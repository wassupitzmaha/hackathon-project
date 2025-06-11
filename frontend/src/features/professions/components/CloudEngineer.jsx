import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaAws, FaMicrosoft, FaGoogle } from 'react-icons/fa';


const skillResources = {
  AWS: {
    articles: [
      {
        title: "How to Learn AWS From Scratch in 2025: The Complete Guide",
        url: "https://www.datacamp.com/blog/learn-aws",
      },
      {
        title: "AWS Certification Path: A Step-by-Step 2025 Guide",
        url: "https://k21academy.com/amazon-web-services/aws-cloud-certifications/",
      },
    ],
    courses: [
      {
        title: "Introduction to Cloud Computing on AWS for Beginners [2025]",
        url: "https://www.udemy.com/course/introduction-to-cloud-computing-on-amazon-aws-for-beginners/?couponCode=LEARNNOWPLANS",
      },
      {
        title: "AWS Fundamentals Specialization",
        url: "https://www.coursera.org/specializations/aws-fundamentals",
      },
    ],
    youtube: [
      {
        title:
          "AWS Tutorial for Beginners (2025) – Step-by-Step Guide to Cloud Computing",
        url: "https://www.youtube.com/watch?v=Nzv-tzU-UAw",
      },
      {
        title:
          "AWS Full Course 2025 | AWS Cloud Computing Tutorial for Beginners | AWS Training | Simplilearn",
        url: "https://www.youtube.com/watch?v=UmQnenLf_Cs",
      },
    ],
  },
  Azure: {
    articles: [
      {
        title:
          "From Beginner to Expert: A Complete Guide to Microsoft Azure Certifications in 2025",
        url: "https://www.linkedin.com/pulse/from-beginner-expert-complete-guide-microsoft-azure-2025-atul-kumar-7pqlf",
      },
      {
        title:
          "Microsoft Azure Certification: Step-by-Step Guide to Succeed in 2025",
        url: "https://k21academy.com/microsoft-azure/certification-path/",
      },
    ],
    courses: [
      {
        title: "AZ-900: Microsoft Azure Fundamentals Exam Prep - MAY 2025",
        url: "https://www.udemy.com/course/az900-azure/?couponCode=LEARNNOWPLANS",
      },
      {
        title: "Microsoft Azure Cloud Architect Masters Program",
        url: "https://www.simplilearn.com/azure-cloud-architect-certification-training-course",
      },
    ],
    youtube: [
      {
        title: "Azure Tutorial For Beginners [2025 Step-by-Step Guide]",
        url: "https://www.youtube.com/watch?v=S417kGaBerM&t=3s",
      },
      {
        title:
          "Microsoft Azure Full Course 2025 | Azure Tutorial for Beginners | Azure Training | Simplilearn",
        url: "https://www.youtube.com/watch?v=2FrrGNCVopg",
      },
    ],
    GCP : {
      articles: [
        {
          title: "How to learn GCP: Guide and Resources (2025 Update)",
          url: "https://mentorcruise.com/how-to/gcp/",
        },
        {
          title: "What Is Google Cloud Platform? - Simplilearn.com",
          url: "https://www.simplilearn.com/google-cloud-platform-article",
        },
      ],
      courses: [
        {
          title:
            "Google Cloud Platform (GCP) Fundamentals for Beginners - Udemy",
          url: "https://www.udemy.com/course/google-cloud-platform-gcp-fundamentals-for-beginners/",
        },
        {
          title:
            "Architecting with Google Compute Engine Specialization - Coursera",
          url: "https://www.coursera.org/specializations/gcp-architecture",
        },
      ], youtube : [
        {
          "title": "Google Cloud Platform Full Course 2025 | GCP Tutorial For Beginners | Simplilearn",
          "url": "https://www.youtube.com/watch?v=JSrNC1vcpmc"
        },
        {
          "title": "Google Cloud Platform Tutorial for Beginners 2025 – FreeCodeCamp",
          "url": "https://www.youtube.com/watch?v=ULlVc1M7QaE"
        }        
      ]
    },
  },
};

function CloudEngineer() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);
  
    useEffect(() => {
      fetch('/api/v1/CloudEngineer')
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

  return ( <div>
    <h2>Cloud Engineer Skills</h2>
    <p>
      <b>What Do Cloud Engineers Do?</b>
      <p>
      Cloud engineers design, deploy, and maintain cloud-based systems and infrastructure to ensure efficient, secure, and scalable operations for organizations. They also monitor cloud resources, troubleshoot issues, and collaborate with teams to optimize performance and cost-effectiveness.
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
  </div>);
}
export default CloudEngineer;

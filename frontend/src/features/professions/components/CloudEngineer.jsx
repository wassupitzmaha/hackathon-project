import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsYoutube } from "react-icons/bs";

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
    GCP: {
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

  return (1);
}
export default CloudEngineer;

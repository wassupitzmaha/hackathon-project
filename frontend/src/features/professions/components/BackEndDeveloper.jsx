
import React, { useEffect, useState } from 'react'; //React hooks for side effects and state 
import Card from 'react-bootstrap/Card'; //bootstrap card component
import Row from 'react-bootstrap/Row'; //bootstrap grid system components
import Col from 'react-bootstrap/Col'; //bootstrap col component
import { FaNodeJs, FaServer, FaPython } from 'react-icons/fa'; //icons for skills

//static data for skills resoruces
//const means that skillResources is a constant variable
//this is an object
//{} means that the object is literal
const skillResources = {
  "Node.js": { //key: value pairs, node.js is a key
    icon: <FaNodeJs size={54} color="#68A063" />,
    articles: [
      {
        title: "Node.js Official Documentation",
        url: "https://nodejs.org/en/docs/",
      },
      {
        title: "MDN: Introduction to Node.js",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework",
      },
    ],
    courses: [
      {
        title: "freeCodeCamp: APIs and Microservices",
        url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
      },
      {
        title: "The Net Ninja: Node.js Crash Course",
        url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
      },
    ],
    youtube: [
      {
        title: "Node.js Crash Course",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      },
    ],
  },

  "Express": { //key : value pairs 
    icon: <FaServer size={54} color="#000" />,
    articles: [ //each key maps to another object, this key holds an array of objects
      {
        title: "Express.js Official Documentation",
        url: "https://expressjs.com/",
      },
      {
        title: "MDN: Express Web Framework",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction",
      },
    ],
    courses: [
      {
        title: "Codecademy: Learn Express",
        url: "https://www.codecademy.com/learn/learn-express",
      },
    ],
    youtube: [
      {
        title: "Express.js Crash Course",
        url: "https://www.youtube.com/watch?v=L72fhGm1tfE",
      },
    ],
  },

  "Python": { //key 
    icon: <FaPython size={54} color="#3776AB" />,
    articles: [ //key maps to a value, here this key maps to an array
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
};

//static data for card gradients
//object that contains an array
const cardGradients = {
  "Node.js": "linear-gradient(120deg, #43e97b 0%, #38f9d7 100%)",
  "Express": "linear-gradient(120deg, #cfd9df 0%, #e2ebf0 100%)",
  "Python": "linear-gradient(120deg, #f7971e 0%, #ffd200 100%)"
};



function BackEndDeveloper() {
  const [skills, setSkills] = useState([]); //state to store fetched skills
  const [loading, setLoading] = useState(true); //state for loading status
  const [error, setError] = useState(null); //state for error messages 
  const [selectedSkill, setSelectedSkill] = useState(null); //state for selected skill to show resources

  useEffect(() => { //hook to perform side effects ( data fetching )
    fetch("/api/v1/BackEndDeveloper") //fetches data from backend API 
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok"); //checks for HTTP errors
        return res.json(); //parses the response as JSON
      })
      .then((data) => {
        if (data.length > 0 && Array.isArray(data[0].skills)) { //sets skills if data is valid
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

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
      
      >
        
        Back-End Developer Skills
        
        </h2>
      <p style = {{

fontSize: '1.1rem', maxWidth: 650, margin: '0.5rem auto 0', lineHeight: 1.7
      }}
      
      >
        <b>What Do Back-End Developers Do?</b>
        <br />
        <p>
          Back-end developers build and maintain the server-side logic,
          databases, and APIs that power web applications. They ensure data is
          processed, stored, and delivered securely and efficiently, enabling
          seamless communication between the server, database, and client-side
          interfaces.
        </p>
      </p>

      <img

          src="https://cdn.pixabay.com/photo/2017/06/10/07/18/server-2389219_1280.png"
          alt="Backend illustration"
          style={{
              width: '150px',
              margin: '2rem auto 0',
              display: 'block',
              borderRadius: '1rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
          }}

      />


      <Row xs={1} sm={2} md={3} className="g-4 mt-3">
        {skills.map((skill, idx) => (
          <Col key={idx}>

            <Card className="h-100 text-center shadow-sm" onClick={() => setSelectedSkill(skill)} style={{ background: cardGradients[skill] || "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)", cursor: "pointer" }}>
              <Card.Body>

              <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem'
  }}
>
  <span
    style={{
      background: 'rgba(255,255,255,0.18)',
      borderRadius: '50%',
      padding: '1rem',
      boxShadow: '0 2px 8px rgba(80,80,120,0.08)'
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
    {skillResources[skill] && skillResources[skill].icon}
  </span>
</div>
              
                <Card.Title style={{ fontWeight: 700 }}>{skill}</Card.Title>
              </Card.Body>

  <div
  style={{
    position: 'absolute',
    top: '-30px',
    right: '-0.5px',
    opacity: 0.07,
    fontSize: '6rem',
    pointerEvents: 'none'
  }}
>
  {skillResources[skill] && skillResources[skill].icon}
</div>

            </Card>
          </Col>
        ))}
      </Row>
      {selectedSkill && skillResources[selectedSkill] && (
        <div className="mt-4"
        style={{
          background: cardGradients[selectedSkill] || "#fff",
          borderRadius: "1.2rem",
          padding: "2rem 1.5rem",
          boxShadow: "0 2px 16px rgba(80,80,120,0.10)",
          maxWidth: 600,
          margin: "2rem auto",
          animation: "fadeIn 0.5s"
        }}
        >
          <h3 
          className="mb-3" style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
          {skillResources[selectedSkill].icon}
          <span>Resources for {selectedSkill}</span>Resources for {selectedSkill}</h3>
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

            {/* Subtle Card Animation */}
            <style>{`
        .skill-card {
          transition: transform 0.2s, box-shadow 0.3s;
        }
        .skill-card:hover,
        .skill-card:focus {
          transform: translateY(-7px) scale(1.04);
          box-shadow: 0 12px 32px rgba(0,0,0,0.18);
        }
      `}</style>
    </div>
  );
}

export default BackEndDeveloper;

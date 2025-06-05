import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div>
      <h1>Welcome to ProfessioNest!</h1>
      <p>
        <b>Introduction</b>
        <p>
          As curious and ambitious career-oriented leaders, Ali and Maha often find themselves looking for resources scattered in different place to start work towards their career
          goals. Therefore, they created ProfessioNest for individuals trying to pursue a career tech so that it is easier for learners to tailor their time towards their career goals utilizing a centralized place of resources
          instead of wasting time searching all over the internet for resources!
        </p>

      </p>

      {/* Profession Navigation Buttons */}
      <div className="mt-4">
        <h3>Explore Professions</h3>
        <Link to="/FrontEndDeveloper">
          <Button variant="primary" className="me-2">
            Front-End Developer
          </Button>
        </Link>
        
        <Link to="/FrontEndDeveloper">
          <Button variant="primary" className="me-2">
            Front-End Developer
          </Button>
        </Link>

        
      </div>
    </div>
  );
}

export default Home;

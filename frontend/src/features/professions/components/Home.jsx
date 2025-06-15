import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { professions } from '../data/professions'; // Imported our updated professions array
import ProfessionSearch from '../data/profession-search.jsx';

const heroStyle = {
  background: 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)',
  color: 'white',
  borderRadius: '1.5rem',
  padding: '2.5rem 2rem',
  marginBottom: '2.5rem',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
};

const introTextStyle = {
  fontSize: '1.2rem',
  maxWidth: '700px',
  margin: '0 auto',
  lineHeight: '1.7'
};

const exploreHeaderStyle = {
  fontWeight: 700,
  letterSpacing: '1px',
  color: '#343a40'
};

const cardGridStyle = {
  marginTop: '2rem'
};

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div style={heroStyle} className="text-center">
        <h1 style={{ fontWeight: 800, fontSize: '2.8rem', letterSpacing: '2px' }}>
          Welcome to <span style={{ color: '#ffd700' }}>ProfessioNest</span>!
        </h1>
        <p style={introTextStyle}>
          <b>Discover Your Path in Tech</b>
          <br />
          Ali and Maha, driven by curiosity and ambition, created ProfessioNest to help you find all the resources you need to launch or grow your tech career. No more endless searching—everything you need is right here, organized for your success.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/10/19/05/technology-1974075_1280.png"
          alt="Tech illustration"
          style={{ width: '220px', margin: '2rem auto 0', display: 'block', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
        />
      </div>

      {/* Profession Navigation Cards */}
      <div className="mt-4">
        <h3 style={exploreHeaderStyle} className="text-center mb-2">
          Explore Professions
        </h3>
        <p className="text-center mb-4" style={{ fontSize: '1.1rem' }}>
          Click on a card below to start exploring your passion in tech!
        </p>
        <ProfessionSearch /> {/* impored the search bar */}

        <Row xs={1} sm={2} md={3} lg={4} className="g-4" style={cardGridStyle}>
          {professions.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Col key={p.profession}>
                <Card
                  className="h-100 text-center shadow-lg border-0"
                  style={{
                    background: p.background,
                    color: '#22223b',
                    borderRadius: '1.5rem',
                    boxShadow: '0 4px 24px rgba(80,80,120,0.10)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Faded Icon Watermark */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      opacity: 0.07,
                      fontSize: '7rem',
                      pointerEvents: 'none'
                    }}
                  >
                    <Icon />
                  </div>
                  <Card.Body style={{ position: 'relative', zIndex: 2 }}>
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
                          background: p.iconBg || 'rgba(255,255,255,0.15)',
                          borderRadius: '50%',
                          padding: '1rem'
                        }}
                      >
                        <Icon size={44} className={`text-${p.color}`} />
                      </span>
                    </div>
                    <Card.Title style={{ fontWeight: 700 }}>{p.profession}</Card.Title>
                    {p.description && ( //render the description for each card
                      <Card.Text style={{ fontSize: '0.97rem', minHeight: '48px' }}>
                        {p.description}
                      </Card.Text>
                    )}
                    <div style={{ margin: '0.5rem 0 1rem 0' }}>
                      {p.skills.map(skill => (
                        <span
                          key={skill} //key prop to put an index to the skill
                          style={{
                            display: 'inline-block',
                            margin: '0.2em 0.35em',
                            background: 'rgba(255,255,255,0.18)',
                            borderRadius: '0.5em',
                            padding: '0.25em 0.75em',
                            fontSize: '0.97rem',
                            fontWeight: 500
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Button
                      as={Link}
                      to={p.link}
                      variant={p.color}
                      className="mt-2 px-4"
                      style={{ borderRadius: '2em', fontWeight: 600 }}
                    >
                      Explore 
                    </Button> {/* renders a button */}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Home;

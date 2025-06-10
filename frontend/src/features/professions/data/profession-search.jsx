import React, { useState } from 'react';
import { professions } from './professions';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProfessionSearch() {
  const [query, setQuery] = useState('');

  // Filter professions based on search query
  const filtered = professions.filter(p =>
    p.profession.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a profession..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          marginBottom: '1.5rem',
          borderRadius: '1.5rem',
          border: '1px solid #d0d7e2',
          fontSize: '1.1rem',
          boxShadow: '0 2px 8px rgba(80,80,120,0.06)'
        }}
      />
      {query && (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filtered.length === 0 && (
            <Col>
              <div
                style={{
                  background: 'linear-gradient(90deg, #f8fafc 0%, #e8eaf6 100%)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  textAlign: 'center',
                  color: '#343a40',
                  fontWeight: 500
                }}
              >
                No professions found.
              </div>
            </Col>
          )}
          {filtered.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Col key={idx}>
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
                    {p.description && (
                      <Card.Text style={{ fontSize: '0.97rem', minHeight: '48px' }}>
                        {p.description}
                      </Card.Text>
                    )}
                    <div style={{ margin: '0.5rem 0 1rem 0' }}>
                      {p.skills.map(skill => (
                        <span
                          key={skill}
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
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}

export default ProfessionSearch;

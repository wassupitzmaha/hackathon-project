import React, { useState } from 'react'; //React and useState hook
import { professions } from './professions'; //imports the static list of professions
import { Link } from 'react-router-dom'; //for client-side routing
import Card from 'react-bootstrap/Card'; //bootstrap components
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'; //bootstrap grid system components
import Col from 'react-bootstrap/Col';

function ProfessionSearch() {
  const [query, setQuery] = useState(''); //state to hold the search input value, re-render as user types

  // Filter professions based on search query (case-insensitive)
  const filtered = professions.filter(p =>
    p.profession.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a profession..."
        value={query}
        onChange={e => setQuery(e.target.value)} //updates every state on input change
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
      {query && ( //conditionally renders cards only if theres a search query
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filtered.length === 0 && ( //conditionally renders "no profession found"
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
          {filtered.map((p, idx) => { //Maps over filtered professions to render cards
            const Icon = p.icon; //dynamically gets the icon component
            return (
              //why use key prop here: since the list changes as user searches for profession, this prop helps update the list 
              <Col key={idx}> {/* this key prop defines the position of each profession in the filtered list of professions, applies an index to the items */}
                <Card
                  className="h-100 text-center shadow-lg border-0"
                  style={{ //cards styling from profession.js
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
                      style={{ //icon container styling
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '1rem'
                      }}
                    >
                      <span
                        style={{ //icon background styling
                          background: p.iconBg || 'rgba(255,255,255,0.15)',
                          borderRadius: '50%',
                          padding: '1rem'
                        }}
                      >
                        <Icon size={44} className={`text-${p.color}`} /> {/* renders the actual icon */}
                      </span>
                    </div>
                    <Card.Title style={{ fontWeight: 700 }}>{p.profession}</Card.Title>
                    {p.description && ( //conditionally renders descriptions
                      <Card.Text style={{ fontSize: '0.97rem', minHeight: '48px' }}>
                        {p.description}
                      </Card.Text>
                    )}
                    <div style={{ margin: '0.5rem 0 1rem 0' }}>
                      {p.skills.map(skill => ( //maps over skills to render badges
                        <span // styling

                        //the key prop serves as unique identifiers of each item, much more efficient than just numbering them
                         
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
                      as={Link} //makes the button act like a react-router link
                      to={p.link} //link to the specific profession page
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
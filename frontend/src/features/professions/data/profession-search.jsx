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
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      {query && (
        <Row xs={1} sm={2} md={3} className="g-4">
          {filtered.length === 0 && (
            <Col>
              <div>No professions found.</div>
            </Col>
          )}
          {filtered.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Col key={idx}>
                <Card className="h-100 text-center shadow-sm">
                  <Card.Body>
                    <Icon size={40} className={`mb-2 text-${p.color}`} />
                    <Card.Title>{p.profession}</Card.Title>
                    <Button as={Link} to={p.link} variant={p.color}>
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

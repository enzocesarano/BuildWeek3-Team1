import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, ListGroup, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const Sidebar = ({ myProfile }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('Italiano');

  const languages = ['Italiano', 'Inglese', 'Francese', 'Tedesco', 'Spagnolo', 'Russo'];
  const Consigliati = [
    { id: 1, name: 'Simone Nafra', role: 'Security Analyst', connections: '3°+' },
    { id: 2, name: 'Vladimir Durante', role: 'Analista informatico, Programmatore', connections: '3°+' },
    { id: 3, name: 'Simone Di Giovambattista', role: 'Cyber Security Senior Consultant at EY', connections: '3°+' },
  ];

  const potrestiConoscere = [
    { id: 1, name: 'Claudia Piccinelli', role: 'Formatore' },
    { id: 2, name: 'Ilaria Stefanelli', role: 'Insegnante' },
    { id: 3, name: 'Lucrezia Baldonero', role: 'Business Developer presso ELIS' },
  ];

  const compagnie = [
    { id: 1, name: 'Ferrero', followers: '1.318.041 follower' },
    { id: 2, name: 'InfoJobs Italia', followers: '202.775 follower' },
    { id: 3, name: 'Epicode', followers: '300.000 follower' }
  ];

  if (!myProfile) {
    return <div>Loading...</div>;
  }

  return (
    <Col xs={0} md={4} className='d-none d-md-block mt-5'>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Lingua del profilo</Card.Title>
          <Form.Select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </Form.Select>
          <Card.Title className="mt-3">Profilo pubblico e URL</Card.Title>
          {myProfile.username ? (<p>www.linkedin.com/in/{myProfile.username}</p>): (<p>www.linkedin.com/in/enzo.cesarano</p>)}
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Altri profili per te</Card.Title>
          <ListGroup variant="flush">
            {Consigliati.map((profile) => (
              <ListGroup.Item key={profile.id} className="d-flex align-items-center flex-wrap">
                <div className="flex-grow-1 me-3">
                  <strong>{profile.name}</strong>
                  <p className="mb-0">{profile.role}</p>
                  <small className="text-muted">{profile.connections}</small>
                </div>
                <div className="text-end ms-auto">
                  <Button variant="outline-primary" size="sm">Messaggio</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <p className="text-primary text-center mt-2">Mostra tutto</p>
        </Card.Body>
      </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Potrebbe interessarti</Card.Title>
              <ListGroup variant="flush">
                {compagnie.map((company) => (
                  <ListGroup.Item key={company.id} className="d-flex align-items-center flex-wrap">
                    <div className="flex-grow-1 me-3">
                      <strong>{company.name}</strong>
                      <small className="text-muted">{company.followers}</small>
                    </div>
                    <div className="text-end ms-auto">
                      <Button variant="outline-primary" size="sm">Segui</Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <p className="text-primary text-center mt-2">Mostra tutto</p>
            </Card.Body>
          </Card>
        </Col>
  );
};

export default Sidebar;


/* <Container className="p-3 bg-white rounded shadow-sm">
      <Row className="d-none d-md-flex"> */


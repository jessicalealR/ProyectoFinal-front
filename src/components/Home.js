import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Bienvenido a la Clínica Veterinaria</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="path/to/image1.jpg" />
            <Card.Body>
              <Card.Title>Servicios de Salud</Card.Title>
              <Card.Text>
                Ofrecemos una gama completa de servicios de salud para tus mascotas.
              </Card.Text>
              <Button variant="primary">Más Información</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="path/to/image2.jpg" />
            <Card.Body>
              <Card.Title>Registro de Mascotas</Card.Title>
              <Card.Text>
                Registra a tu mascota y mantén un historial completo de sus visitas.
              </Card.Text>
              <Button variant="primary">Registrar Ahora</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="path/to/image3.jpg" />
            <Card.Body>
              <Card.Title>Contacto</Card.Title>
              <Card.Text>
                Contáctanos para programar una cita o hacer consultas.
              </Card.Text>
              <Button variant="primary">Contáctanos</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

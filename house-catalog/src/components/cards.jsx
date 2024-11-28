import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/cards.css'; // Adjust the path as needed

function CardsAudience() {
  return (
    <section className="cards-audience-section" style={{ backgroundColor: '#9b59b6', color: '#ffffff' }}>
      <Container>
        <h2 className="text-center">House Group Audience</h2>
        <Row>
          <Col md={4} className="mb-4 text-center">
            <div className="audience-info">
              <img src="/pics/num1.png" alt="30% to buy or sell" className="mb-3" />
              <h4>30% to buy or sell</h4>
              <p>Nearly 30% of people who visited our platform in the past year are planning to buy or sell a home in the next 12 months.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 text-center">
            <div className="audience-info">
              <img src="/pics/num2.png" className="mb-3" />
              <h4>150 million</h4>
              <p>More than 150 million average monthly unique users visited our platform's mobile apps and website in the past year.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 text-center">
            <div className="audience-info">
              <img src="/pics/num3.png" alt="Most visited sustainable network" className="mb-3" />
              <h4>Most visited sustainable network</h4>
              <p>Our platform is the most visited network for finding eco-friendly and sustainable housing options.</p>
            </div>
          </Col>
        </Row>
        <p className="text-center mt-5" style={{ fontSize: '12px' }}>
          Source: Data collected from internal analytics and third-party services. Our platform focuses on providing sustainable and eco-friendly housing solutions for conscious buyers and sellers.
        </p>
      </Container>
    </section>
  );
}

export default CardsAudience;

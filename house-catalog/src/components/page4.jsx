import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/stylePg4.css';
import Navibar from '../components/Navbar'; // Assuming Navbar component is created
import CustomFooter from './Footer';
import ZillowAudience from './cards'; // Assuming ZillowAudience component is created

import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function Services() {
  return (
    <>
      <Navibar />

      <section className="services-section my-5">
        <Container>
          <h2 className="text-center mb-4">Remodeling Services</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/arki.avif" alt="Architectural Services" />
                <Card.Body>
                  <Card.Title>Architectural Services</Card.Title>
                  <Card.Text>
                    Our architectural services offer innovative and sustainable design solutions to bring your dream home to life. From initial concept development to final blueprints, our architects work closely with you to create spaces that are both functional and aesthetically pleasing. We prioritize eco-friendly materials and energy-efficient designs to help you build a home that is future-proof and environmentally responsible.
                  </Card.Text>
                  <Button variant="primary" href="https://rebora.com.mx">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/plumb.jpeg" alt="Plumbing Services" />
                <Card.Body>
                  <Card.Title>Plumbing Services</Card.Title>
                  <Card.Text>
                    Our certified plumbers are experts in installing and maintaining efficient plumbing systems. Whether you need new installations, repairs, or upgrades to water-saving fixtures, we are here to help. We ensure your plumbing system is reliable, eco-friendly, and up to code, providing you with peace of mind and reducing your overall water consumption.
                  </Card.Text>
                  <Button variant="primary" href="https://www.fontaneriaisfer.com/?gad_source=1&gbraid=0AAAAA-c_RTEuqwayMwfq-qSJz21hq_H2m&gclid=Cj0KCQiAo5u6BhDJARIsAAVoDWuwxIrhqhLg7siIBlOO_0SHvxO5oX0mBNH1I1qpQq0V4QeXWHX3sZkaAqw5EALw_wcB">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/land.jpeg" alt="Landscape Design" />
                <Card.Body>
                  <Card.Title>Landscape Design</Card.Title>
                  <Card.Text>
                    Our landscape design services focus on creating outdoor spaces that are beautiful, functional, and sustainable. We use native plants and drought-resistant landscaping techniques to ensure your garden not only looks stunning but also requires minimal water and maintenance. Let us help you create a green space that adds value to your home and supports local biodiversity.
                  </Card.Text>
                  <Button variant="primary" href="https://g.co/kgs/kZm3Bnt">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/elec.jpeg" alt="Electrical Services" />
                <Card.Body>
                  <Card.Title>Electrical Services</Card.Title>
                  <Card.Text>
                    Our team of licensed electricians provides a range of services, from new installations to upgrades of existing electrical systems. We specialize in integrating energy-efficient solutions, such as LED lighting and smart home systems, to help reduce your energy bills and carbon footprint. Safety is our top priority, and we adhere to all industry standards and regulations.
                  </Card.Text>
                  <Button variant="primary" href="https://grupoelectricomg.com">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/hvac.jpeg" alt="HVAC Services" />
                <Card.Body>
                  <Card.Title>HVAC Services</Card.Title>
                  <Card.Text>
                    Keep your home comfortable year-round with our HVAC services. We offer installation, maintenance, and repair of heating, ventilation, and air conditioning systems. Our focus is on energy efficiency, helping you reduce your carbon footprint while maintaining optimal indoor air quality. Our experts can recommend and install the best system for your needs, ensuring comfort and sustainability.
                  </Card.Text>
                  <Button variant="primary" href="https://example.com/hvac">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/roof.jpeg" alt="Roofing Services" />
                <Card.Body>
                  <Card.Title>Roofing Services</Card.Title>
                  <Card.Text>
                    Our roofing services ensure your home is well-protected from the elements while maintaining energy efficiency. We offer roof repairs, replacements, and installations using high-quality, sustainable materials. Whether you're looking to install a new eco-friendly roof or need maintenance for your existing one, our team is ready to provide expert solutions that enhance your home's durability and curb appeal.
                  </Card.Text>
                  <Button variant="primary" href="https://www.reparacionrefrigeracionexpressgdl.com">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <ZillowAudience />

      <CustomFooter />

    </>
  );
}

export default Services;

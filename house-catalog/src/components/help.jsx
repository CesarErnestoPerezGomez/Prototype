import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/help.css'; // Adjust the path as needed
import Navibar from '../components/Navbar'; // Assuming Navbar component is created
import CustomFooter from '../components/Footer'; // Assuming Footer component is created
import { Card, Container, Row, Col } from 'react-bootstrap';

function HelpPage() {
  return (
    <>
      <Navibar />

      {/* Help Section */}
      <section className="help-section my-5">
        <Container>
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/buyinghomepeople.jpeg" alt="Buying a House FAQ" />
                <Card.Body>
                  <Card.Title>How Does Buying a House with Us Work?</Card.Title>
                  <Card.Text>
                    Our process is simple and efficient. We help you find the house of your dreams by providing personalized recommendations based on your preferences. We guide you through every step, from searching for properties to closing the deal, ensuring you have all the information you need. Our team focuses on making the experience stress-free and eco-friendly, with a particular emphasis on sustainable housing options.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/sellinghouse.webp" alt="Selling a House FAQ" />
                <Card.Body>
                  <Card.Title>What Should I Know About Selling My House?</Card.Title>
                  <Card.Text>
                    Selling your house with us is straightforward. We provide a detailed market analysis to help determine the best price for your property. Our team will help you stage your home to attract buyers, and we handle all negotiations on your behalf. We also focus on promoting eco-friendly improvements to increase the value of your property, making it more appealing to environmentally conscious buyers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/rentinghouse.jpeg" alt="Renting a House FAQ" />
                <Card.Body>
                  <Card.Title>Can I Rent a House Through Your Platform?</Card.Title>
                  <Card.Text>
                    Yes, we offer a wide range of rental properties to suit different needs and budgets. Our rental services are designed to help you find the perfect home without the hassle. We prioritize properties that are energy-efficient and sustainably managed, ensuring your rental experience is both comfortable and environmentally friendly. Our team will assist you in understanding rental agreements and finding the best rental that matches your preferences.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/ecofriend.jpeg" alt="Eco-Friendly Living FAQ" />
                <Card.Body>
                  <Card.Title>What Is Eco-Friendly Living?</Card.Title>
                  <Card.Text>
                    Eco-friendly living involves making choices that reduce your environmental impact. Our eco-friendly homes are designed with sustainability in mind, including features such as energy-efficient appliances, solar panels, and water-saving fixtures. We believe in creating communities that are both beautiful and sustainable, and we can help you transition to an eco-friendly lifestyle with ease by providing information on green home options and resources for sustainable living.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/sustainablehome.jpeg" alt="Renovation Support FAQ" />
                <Card.Body>
                  <Card.Title>How Can I Make My Home More Sustainable?</Card.Title>
                  <Card.Text>
                    Renovating your home to be more sustainable is a great investment. We offer support in planning and executing renovations that focus on energy efficiency, such as better insulation, solar panel installation, and water conservation systems. Our team works with experienced contractors who specialize in green building practices, ensuring that your home improvements are both cost-effective and environmentally responsible.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/pics/community.jpeg" alt="Community Growth FAQ" />
                <Card.Body>
                  <Card.Title>How Can I Get Involved in Community Growth?</Card.Title>
                  <Card.Text>
                    We believe that sustainable living extends beyond your home and into your community. We actively support projects that promote green spaces, local food production, and renewable energy initiatives. You can get involved by joining our community programs, volunteering in local sustainability efforts, or simply participating in our educational workshops. Together, we can make a positive impact on the environment and foster a sense of community.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <CustomFooter />
    </>
  );
}

export default HelpPage;

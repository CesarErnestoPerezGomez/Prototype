import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navibar from '../components/Navbar';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [houses, setHouses] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3001/profile', { withCredentials: true });
        setUser(response.data.user);
        setHouses(response.data.user.savedHouses );
      } catch (error) {
        console.error('Error fetching profile:', error);
        if (error.response && error.response.status === 401) {
          alert('Please log in to access your profile.');
          navigate('/login');
        }
      }
    };
    fetchProfile();
  }, []); 
  
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });
      navigate('/login');  // Redirigir al login después de hacer logout
    } catch (error) {
      console.error('Logout error:', error);
    }

  };

  if (!user) return <div>Loading...</div>;


  return (
    <>
    <Navibar />
    <Container className="my-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>Welcome, {user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Email: {user.email}</Card.Subtitle>
                
                <Button variant="danger" onClick={handleLogout} className="mt-3 w-100">
                  Logout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h2>Your Saved Houses:</h2>
        <Row className="mt-5">
        
        {houses.length > 0 ? (
          houses.map((house) => (
            <Col key={house._id} xs={12} sm={6} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={house.imageUrl} alt={house.description} />
                <Card.Body>
                  <Card.Title>{house.name}</Card.Title>
                  <Card.Text>
                    <strong>City:</strong> {house.city}
                    <br />
                    <strong>ZIP Code:</strong> {house.zipCode}
                    <br />
                    <strong>Price:</strong> ${house.price.toLocaleString()}
                  </Card.Text>
                  <Link to={`/houses/${house.zipCode}`} className="btn btn-primary w-100">
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center w-100">You haven't saved any houses yet.</p>
        )}

      </Row>

      </Container>
      
  </>
  );
};

export default Profile;

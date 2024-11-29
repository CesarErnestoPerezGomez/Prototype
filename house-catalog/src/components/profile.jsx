import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navibar from '../components/Navbar';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  //const [savedHouses, setSavedHouses] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3001/profile', { withCredentials: true });
        setUser(response.data.user);
        //setSavedHouses(response.data.user.savedHouses || []);
      } catch (error) {
        alert(error.response.data.error);
        navigate('/login'); 
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
      </Container>
  </>
  );
};

export default Profile;

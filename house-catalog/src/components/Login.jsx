import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navibar from '../components/Navbar';
import CustomFooter from '../components/Footer';
import '../css/styleLogin.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password }, { withCredentials: true });
      alert(response.data.message);
      // Navigate to home on success
      navigate('/home');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navibar />

      {/* Login Form Section */}
      <Container className="login-container mt-5 d-flex justify-content-center align-items-center">
        <Row>
          <Col xs={12} md={6}>
            {/* Logo */}
            <div className="text-center mb-4">
              <img
                src="/pics/Screenshot 2024-11-27 at 10.18.18 p.m..png" // Adjust path to your logo
                alt="Logo"
                className="login-logo"
              />
            </div>
            {/* Form */}
            <h3 className="text-center mb-4">Login to House</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleLogin} className="p-4 rounded shadow-lg bg-white">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" className="btn-personal w-100 mb-3">
                Login
              </Button>
              <div className="text-center">
                <Link to="/register" className="btn-link">
                  Don't have an account? Register here.
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <CustomFooter />
    </>
  );
};

export default Login;

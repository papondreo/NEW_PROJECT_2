import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function LoginPage({loginHandler}) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
      });
    const handleLogin = (e) => {
        e.preventDefault();
        loginHandler(formData);
      };
      const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
      
  return (
    <Form onSubmit={handleLogin}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  name="email" type="email" placeholder="Email" onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

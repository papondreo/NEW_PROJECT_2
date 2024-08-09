import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignupPage({handleSignup}) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
      });
      const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
      const signupHandler = (e) => {
        e.preventDefault();
        if (formData.password.length < 3) return;
        handleSignup(formData).catch(() => alert('Ошибка регистрации'));
      };
    return (
        <Form onSubmit={signupHandler}>
             <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" onChange={handleChange} value={formData.name} type="name" placeholder="Enter email" />
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" onChange={handleChange} value={formData.email} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" onChange={handleChange} value={formData.password} type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )
}

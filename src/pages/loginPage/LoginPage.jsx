import React, { Fragment, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const [validated, setValidated] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    const form  = e.terget
    e.preventDefault();
    navigate("/product")
  }



  return (
    <Fragment>
      <Container>
        <div className='vh-100 d-flex align-items-center justify-content-center'>
          <Form  noValidate validated={validated} onSubmit={handleSubmit} >
            <Form.Group className='mb-4' md="6"  controlId="firstName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Username"
              />
              <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-4' md="6" controlId="firstName">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password" />
              <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
            </Form.Group>
            <Button type='submit'  variant='success'>Login</Button>
          </Form>
        </div>
      </Container>
    </Fragment>
  )
}

export default LoginPage;
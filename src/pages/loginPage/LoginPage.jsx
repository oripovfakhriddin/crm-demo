import React, { Fragment, memo, useCallback, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const [validated, setValidated] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = useCallback((e) =>{
    const form  = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity()) {
      navigate("/product")
    } else {
      setValidated(true)
    }
  }, [])



  return (
    <Fragment>
      <Container>
        <div className='vh-100 d-flex align-items-center justify-content-center'>
          <Form  noValidate validated={validated}  onSubmit={handleSubmit} >
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
                placeholder='Password'
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

const MemoLoginPage = memo(LoginPage)

export default MemoLoginPage;
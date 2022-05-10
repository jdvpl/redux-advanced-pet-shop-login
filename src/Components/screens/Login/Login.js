import React from 'react'
import { Form,Button } from 'react-bootstrap'
import './login.css'
const Login = () => {
  return (
    <div className='login__container'>
      <div className="col-sm-12  col-md-6 login__card-from">
        <h3 className="text-center">Bienvenido a JDVPL</h3>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-grid">
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
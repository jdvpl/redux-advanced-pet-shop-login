import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <Navbar className='navigator__bar' collapseOnSelect bg="dark" expand="lg" variant="dark">
          <div className="container">
          <Navbar.Brand href="#">Redux JDVPL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Link to="/login" className="nav-link">Login</Link>
            </Nav>

          </Navbar.Collapse>
          </div>
      </Navbar>
  )
}

export default Header
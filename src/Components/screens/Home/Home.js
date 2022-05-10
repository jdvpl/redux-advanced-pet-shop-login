import React from 'react'
import Header from '../../Header'
import './home.css'
import {getDogs} from '../../../mockRequests/perritos'
import { Card } from 'react-bootstrap'
import { Button } from 'bootstrap'

const Home = () => {
  return (

    <>
      <Header/>
    <div className='container-fluid'>
      <h3 className="mt-3 text-center">Adopta el cachorro que siempre haz querido</h3>
      <div className="container">
        <div className="row">
          {
            getDogs().map(dog=>(
              <div className="col-md-4 mb-3" key={dog.id}>
              <Card >
                <Card.Img variant="top" src={dog.img} />
                <Card.Body>
                  <Card.Title className="text-center">{dog.nombre}</Card.Title>
                  <Card.Text className='text-center'>
                    Genero: {dog.genero}
                      <br />
                      Edad: {dog.edad}
                    
                  </Card.Text>
                  <div className="text-center">
                  <button className="btn btn-outline-dark">Adoptar</button>
                  </div>
                </Card.Body>
              </Card>
              </div>
            ))
          }
        </div>
      </div>
    </div>

    </>
  )
}

export default Home
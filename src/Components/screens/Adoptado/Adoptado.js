import React from 'react'
import Header from '../../Header'
import {getDogs} from '../../../mockRequests/perritos'
import { Card } from 'react-bootstrap'

const Adoptado = () => {

  const perritoSeleccionado=getDogs()[0];
  return (

    <>
      <Header/>
    <div className='container-fluid'>
      <h3 className="mt-3 text-center">Felicidades haz adoptado a {perritoSeleccionado.nombre}</h3>
      <div className="container">
        <div className="mb-3" key={perritoSeleccionado.id}>
              <Card >
                <Card.Img variant="top" src={perritoSeleccionado.img} />
                <Card.Body>
                  <Card.Title className="text-center">{perritoSeleccionado.nombre}</Card.Title>
                  <Card.Text className='text-center'>
                    Genero: {perritoSeleccionado.genero}
                      <br />
                      Edad: {perritoSeleccionado.edad}
                    
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
      </div>
    </div>

    </>
  )
}

export default Adoptado
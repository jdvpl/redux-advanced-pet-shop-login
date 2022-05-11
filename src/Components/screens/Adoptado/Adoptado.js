import React,{useEffect} from 'react'
import Header from '../../Header'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Adoptado = ({perrito,history,user}) => {

  useEffect(() => {
    if(!perrito.selectedPerrito || !user.authUser){
      history.push('/');
    }
  }, [perrito]);


  return (

    <>
      <Header/>
    <div className='container-fluid'>
      <h3 className="mt-3 text-center">Felicidades {user.authUser.fullName}, haz adoptado a {perrito.selectedPerrito.nombre}</h3>
      <div className="container">
        <div className="mb-3" key={perrito.selectedPerrito.id}>
              <Card >
                <Card.Img variant="top" src={perrito.selectedPerrito.img} />
                <Card.Body>
                  <Card.Title className="text-center">{perrito.selectedPerrito.nombre}</Card.Title>
                  <Card.Text className='text-center'>
                    Genero: {perrito.selectedPerrito.genero}
                      <br />
                      Edad: {perrito.selectedPerrito.edad}
                    
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
      </div>
    </div>

    </>
  )
}


const mapStateToProps = ({user,perrito})=> ({
  user,
  perrito
});


export default withRouter(connect(mapStateToProps,null)(Adoptado));
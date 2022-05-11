import React,{useEffect,useState} from 'react'
import Header from '../../Header'
import {getDogs} from '../../../mockRequests/perritos'
import { Card } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import perritoActions from '../../../redux/actions/perrito'

const Home = ({history,user,perrito,setList,setSelectedDog}) => {

  useEffect(() => {
    const dogs=getDogs();
    setList(dogs);
  }, []);

  const handleAdoptar=(dog)=>{
    if(user.authUser){
      setSelectedDog(dog);
      history.push('congratulations');
    }else{
      history.push('login');

    }
  }
  return (
    <>
      <Header/>
    <div className='container-fluid'>
      <h3 className="mt-3 text-center">Adopta el cachorro que siempre haz querido</h3>
      <div className="container">
        <div className="row">
          {
            perrito.list.map(dog=>(
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
                  <button className="btn btn-outline-dark" onClick={()=>handleAdoptar(dog) }>Adoptar</button>
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

const mapStateToProps = ({user,perrito})=> ({
  user,
  perrito
});
const mapDispatchToProps = ()=> ({
  ...perritoActions
});



export default withRouter(connect(mapStateToProps,mapDispatchToProps())(Home));
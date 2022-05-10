import React,{useEffect,useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import './login.css'
import userActions from '../../../redux/actions/user'
import { withRouter } from 'react-router-dom'


const Login = ({user,login,history}) => {

  useEffect(() => {
    if(user.authUser){
      history.push('/');
    }
  }, [user]);

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  return (
    <div className='login__container'>
      <div className="col-sm-12  col-md-6 login__card-from">
        <h3 className="text-center">Bienvenido a JDVPL</h3>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control value={username} onChange={(e)=>setusername(e.target.value)} type="text" placeholder="Enter email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
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
const mapStateToProps = ({user})=> ({
  user
});
const mapDispatchToProps = ()=> ({
  ...userActions
});



export default withRouter(connect(mapStateToProps,mapDispatchToProps())(Login))
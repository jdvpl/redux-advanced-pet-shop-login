
import {Provider} from 'react-redux';
import {store} from './redux/config/store'
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";


import Login from './Components/screens/Login/Login';
import Home from './Components/screens/Home/Home';
import Adoptado from './Components/screens/Adoptado/Adoptado';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact > <Home/> </Route>
          <Route path="/login" exact><Login /></Route>
          <Route path="/congratulations"> <Adoptado /></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

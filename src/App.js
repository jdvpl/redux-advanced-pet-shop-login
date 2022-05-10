
import {Provider, connect} from 'react-redux';
import {store} from './redux/config/store'
import  counterActions  from './redux/actions/counter';

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


import Login from './Components/screens/Login/Login';
import Home from './Components/screens/Home/Home';





function App() {
 
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

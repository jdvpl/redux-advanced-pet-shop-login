
import {Provider} from 'react-redux';
import {store} from './redux/config/store'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


import Login from './Components/screens/Login/Login';
import Home from './Components/screens/Home/Home';
import Adoptado from './Components/screens/Adoptado/Adoptado';





function App() {
 
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/congratulations/:id" element={<Adoptado />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

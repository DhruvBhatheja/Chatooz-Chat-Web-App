import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';

import "./pages/style.scss";
import Home from './pages/Home';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {currentUser}=useContext(AuthContext)

  const ProtectedRoute =({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  };

  console.log(currentUser)
  return (
    
    // <Register/>
    //<div>hello world</div>
  //<Register></Register>
  //<Login></Login>
 // <Home></Home>
 <BrowserRouter>
 <Routes>
  <Route path="/">
    <Route index element={<ProtectedRoute>
      <Home/>
      </ProtectedRoute>
      }
      />
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>

  </Route>
 </Routes>
 </BrowserRouter>
  
    );
}

export default App;

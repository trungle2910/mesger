import React,{useState} from 'react'
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateLayout from './router/PrivateLayout';
import LoginPage from './page/LoginPage';
import ForgotPasswordPage from './page/ForgotPasswordPage';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
        <Route path='/login' element={<LoginPage setLoggedIn={setLoggedIn}/>}/>
        <Route path='/' element={loggedIn ? <PrivateLayout /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar/NavBar";
import SignInPopup from "./Components/NavBar/SignIn/SignInPopup";
import SignUpPopup from "./Components/NavBar/SignUp/SignUpPopup";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NavBar/>}></Route>
          <Route path='/signin' elements={<SignInPopup/>}></Route>
          <Route path='/signup' element={<SignUpPopup/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
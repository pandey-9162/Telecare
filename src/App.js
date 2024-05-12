import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Middle from './components/Middle/Middle';
import Home from './components/Home';
import Navbar from './components/NavBar/Navbar'; 
import Signup from './components/Signup/Signup';
import Login from './components/Login';
import Appointment from './components/Appointment/Appointment';
import About from './components/About/About';
import Book from './components/Book_Appointment/Book';

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/createuser' element={<Signup/>}/>
      <Route exact path='/book-appointment' element={<Appointment/>}/> 
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Signup/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/book-appointment/book' element={<Book/>}/>
    </Routes>
  </Router>
  );
}

export default App;

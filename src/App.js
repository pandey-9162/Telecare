import './App.css';
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Signup/Login';
import Consult from './components/Consult/Consult';
import About from './components/About/About';
import DoctorList from './components/DoctorList/Doctorlist';
import MyAppointment from './components/MyAppointment/Myappointment';
import Myprofile from "./components/Myprofile/Myprofile";
import Credit from './components/Credit/Credit';
import Individual from './components/Services/Individual';
import Organisation from './components/Services/Organisation';
import Footer from './components/Footer/Footer';
import PaymentHistory from './components/PaymentHistory/PaymentHistory';
import Service from './components/Services/Services';
import PaymentValidation from './PaymentValidation'; 
import NavBar from './components/NavBar/Navbar';
import Prescription from './components/Prescription/Prescription';
function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/createuser' element={<Signup/>}/>
      <Route exact path='/consult' element={<Consult/>}/> 
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Signup/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/book-appointment' element={<DoctorList/>}/>
      <Route exact path='/mycredit' element={<Credit/>}/>
      <Route exact path='/myprofile' element={<Myprofile/>}/>
      <Route exact path='/my-appointment' element={<MyAppointment/>}/>
      <Route exact path='/more-about-meetmydoc' element={<Individual/>}/>
      <Route exact path='/service/organization' element={<Organisation/>}/>
      <Route exact path='/footer' element={<Footer/>}/>
      <Route exact path='/service' element={<Service/>}/>
      <Route exact path='/payment/history' element={<PaymentHistory/>}/>
      <Route path="/payment/validate/:merchantTransactionId" element={<PaymentValidation />} />
      <Route exact path='/prescription' element={<Prescription/>}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;

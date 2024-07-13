
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';
import Header from "../NavBar/Navbar"
import "./style.css";
import Footer from "../Footer/Footer";


// import { ToastContainer, toast } from 'react-toastify';


const Recharge = () => {
  const { user, setUser } = useContext(AuthContext);
  const [credits, setCredits] = useState(user ? user.credits : 0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (user) {
      setCredits(user.credits);
    }
  }, [user]);

  // const handleRecharge = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/recharge', { userId: user._id, amount });
  //     const newCredits = response.data.credits;
  //     setCredits(newCredits);

  //     // Update the user object and local storage
  //     const updatedUser = { ...user, credits: newCredits };
  //     setUser(updatedUser);
  //     localStorage.setItem('user', JSON.stringify(updatedUser));
  //   } catch (error) {
  //     console.error('Error recharging account', error);
  //   }
  // };

  const handleRecharge = async () => {
    try {
      const { email, password } = user;
      const response = await axios.post(
        'http://localhost:5000/api/recharge',
        { userId: user._id, amount },
        {
          headers: {
            'Authorization': `Basic ${btoa(`${email}:${password}`)}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const newCredits = response.data.credits;
      setCredits(newCredits);
      const updatedUser = { ...user, credits: newCredits };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Error recharging account', error);
    }
  };

  return (
    <>
    <Header/>
    <div className='main-credit-card'>
      <div className='credit-card'>
        <div className='heading'>
        {user ? <h1>Hii {user.name}</h1> : <h1>Guest</h1>}
        <h2>Available Credits: {credits}</h2>
        </div>
        <p>Recharge Now and get Credit point for Constulatant</p>
        <div className='gif'>
        <div className='credit-card-content'>
        <div>
          <label>Recharge Amount (in INR): </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <p onClick={handleRecharge} class="fancy" href="#">
            <span class="top-key"></span>
            <span class="text">Recharge</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </p>       
      </div>
        <p>Note: For every &#x20b9;100 recharge you will get 1 credit point.</p>
        </div>
        </div>
       </div>
       <div className='recharge-note'>
  <h2>Recharge Information</h2>
  <p><strong>One Credit for One Consultation:</strong> Each credit allows you to schedule one consultation with a healthcare professional. Please ensure you have enough credits before scheduling a consultation.</p>
  <p><strong>Recharge in Multiples of 100 INR:</strong> For seamless transactions, always recharge your account in multiples of 100 INR. For example, you can recharge with 100 INR, 200 INR, 300 INR, etc.</p>
  <p><strong>Conversion Rate:</strong> For every 100 INR you recharge, you will receive 1 credit. This simple conversion helps you easily calculate the number of credits you will have after recharging.</p>
  <p><strong>Easy Recharge Process:</strong> Enter the amount you wish to recharge in the provided input field and click on the "Recharge" button. Your account will be updated with the new credits instantly.</p>
  <p><strong>Keep Track of Your Credits:</strong> Your current credits are displayed at the top of the page. Make sure to monitor your credits to ensure you always have enough for future consultations.</p>
  <p><strong>Secure Transactions:</strong> All recharge transactions are secure and encrypted, ensuring the safety of your financial information.</p>
  <p><strong>Customer Support:</strong> If you encounter any issues with recharging or have any questions, please reach out to our customer support team for assistance.</p>
  <p><strong>Example:</strong> If you recharge with 500 INR, you will receive 5 credits, allowing you to schedule 5 consultations.</p>
</div>

    </div>
    <Footer/>
    </>
  );
};

export default Recharge;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";

const base_url = 'http://localhost:5000';

const Recharge = () => {
  const { user } = useContext(AuthContext);
  const [credits, setCredits] = useState(0);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const showToastMessage = () => {
  };

  useEffect(() => {
    const fetchCredit = async () => {
      if (!user || !user._id) {
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${base_url}/api/point`, {
          params: { userId: user._id },
          headers: {
            'Authorization': `Basic ${btoa(`${user.email}:${user.password}`)}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.data && response.data.credit !== undefined) {
          setCredits(response.data.credit);
        } else {
          // console.error('Invalid credits response:', response);
          setError('Invalid credits response');
        }
      } catch (error) {
        // console.error('Error fetching credits:', error);
        setError(error.message || 'Error fetching credits');
      } finally {
        setLoading(false);
      }
    };

    fetchCredit();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRecharge = async () => {
    try {
      const { email, password } = user;

      const response = await axios.post(
        `${base_url}/payment/pay`,
        { userId: user._id, amount },
        {
          headers: {
            'Authorization': `Basic ${btoa(`${email}:${password}`)}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
        showToastMessage();
      } else {
        // console.error('Invalid response format:', response);
        toast.error('Error: Invalid response format', {
          position: 'top-right',
        });
      }
    } catch (error) {
      console.error('Error recharging account:', error.message || error);
      toast.error(`Error: ${error.message || 'Network Error'}`, {
        position: 'top-right',
      });
    }
  };

  return (
    <>
      <div className='main-credit-card'>
        <div className='credit-card'>
          <div className='heading'>
            <h1>{user ? `Hi ${user.name}` : 'Guest'}</h1>
            <h2>Available Credits: {credits}</h2>
          </div>
          <p>Recharge Now and get Credit points for consultations</p>
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
                <button onClick={handleRecharge} className="fancy">
                  <span className="top-key"></span>
                  <span className="text">Recharge</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </button>
                <ToastContainer />       
              </div>
              <p>Note: For every ₹100 recharge, you will get 1 credit point.</p>
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
    </>
  );
};

export default Recharge;

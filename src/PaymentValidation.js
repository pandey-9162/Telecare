import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PaymentValidation.css'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const PaymentValidation = () => {
  const { merchantTransactionId } = useParams();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/payment/validate/${merchantTransactionId}`);
        setPaymentStatus(response.data);
        setLoading(false);
        if (response.data.code === 'PAYMENT_SUCCESS') {
          toast.success('Payment successful!', { position: 'top-right' });
        } else {
          toast.error('Payment failed or pending.', { position: 'top-right' });
        }
      } catch (error) {
        console.error('Error validating payment', error.message || error);
        toast.error('Error validating payment.', { position: 'top-right' });
        setLoading(false);
      }
    };

    if (merchantTransactionId) {
      checkPaymentStatus();
    }

  }, [merchantTransactionId]);

  if (loading) return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h2>Loading...</h2>
    </div>
  );

  return (
    <>
      <Header />
      <div className="payment-validation-container">
        <div className="card">
          <h1>Payment Validation</h1>
          <pre>{JSON.stringify(paymentStatus, null, 2)}</pre>
          Uncomment and adjust based on actual `paymentStatus` structure 
          <div className="status-message">
            {paymentStatus ? (
              <div className={`status ${paymentStatus.code === 'PAYMENT_SUCCESS' ? 'success' : 'error'}`}>
                <h2>{paymentStatus.code === 'PAYMENT_SUCCESS' ? 'Payment Successful' : 'Payment Failed'}</h2>
                <p><strong>Transaction ID:</strong> {paymentStatus.transactionId}</p>
                <p><strong>Amount:</strong> ₹{paymentStatus.amount / 100}</p>
                <p><strong>Status:</strong> {paymentStatus.message}</p>
              </div>
            ) : (
              <p>No payment status available.</p>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default PaymentValidation;

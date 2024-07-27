import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user || !user._id) {
      setError('User not authenticated');
      setLoading(false);
      return;
    }
    
    const fetchPaymentHistory = async () => {
      try {
        const response = await axios.get('/api/paymentHistory', {
          params: { userId: user._id }, 
        });
        // console.log(response);
        setHistory(response.data);
      } catch (error) {
        // console.error('Error fetching payment history:', error);
        setError('Failed to fetch payment history');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, []); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Payment History</h1>
      {history.length > 0 ? (
        <ul>
          {history.map((payment) => (
            <li key={payment._id}>
              <p><strong>Amount:</strong> ₹{payment.amount}</p>
              <p><strong>Date:</strong> {new Date(payment.date).toLocaleDateString()}</p>
              {/* Add more fields as necessary */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No payment history available.</p>
      )}
    </div>
  );
};

export default PaymentHistory;

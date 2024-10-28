import React, { useState, useEffect } from 'react';

const TransactionForm = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({ customer_id: '', admin_id: '1', amount: '', type: 'deposit', description: '' });

  useEffect(() => {
    fetch('http://localhost:8000/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        amount: parseFloat(formData.amount),
      };
      console.log('Sending data:', JSON.stringify(dataToSend));

      const response = await fetch('http://localhost:8000/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        alert('Transaction successful');
        setFormData({
          customer_id: '',
          admin_id: '1',
          amount: '',
          type: 'deposit',
          description: ''
        });
      }
    } catch (error) {
      console.error('Error during transaction:', error);
      alert('An error occurred while processing the transaction');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="customer_id" value={formData.customer_id} onChange={handleChange} required>
        <option value="">Select Customer</option>
        {customers.map((customer: { id: string; name: string; }) => (
          <option key={customer.id} value={customer.id}>{customer.name}</option>
        ))}
      </select>
      <input type="hidden" name="admin_id" value={formData.admin_id} />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <select name="type" value={formData.type} onChange={handleChange} required>
        <option value="deposit">Deposit</option>
        <option value="withdrawal">Withdrawal</option>
      </select>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <button type="submit">Submit Transaction</button>
    </form>
  );
};

export default TransactionForm;
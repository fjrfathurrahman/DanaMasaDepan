'use client';

import React from "react"

interface FetchContext {
  customers: CustomerItem[];
  transactions: TransactionItem[];
  isLoading: boolean;
  error: string;
  refreshData: () => Promise<void>;
}

interface CustomerItem {
  id: number;
  name: string;
  email: string;
  phone: string;
  balance: number;
}

interface TransactionItem {
  id: number;
  customer_id: number;
  admin_id: number;
  amount: number;
  type: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  customer: CustomerItem;
  admin: {
    id: number;
    name: string;
    email: string;
  };
}

const FetchContext = React.createContext<FetchContext | undefined>(undefined)

export const FetchProvider = ({children}: {children: React.ReactNode}) => {
  const [customers, setCustomers] = React.useState<CustomerItem[]>([]);
  const [transactions, setTransactions] = React.useState<TransactionItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const fetchData = React.useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const [customerResponse, transactionResponse] = await Promise.all([
        fetch('http://localhost:8000/api/customers'),
        fetch('http://localhost:8000/api/transactions'),
      ]);

      if (!customerResponse.ok || !transactionResponse.ok) {
        throw new Error('One or more API requests failed');
      }

      const customerData = await customerResponse.json();
      const transactionData = await transactionResponse.json();

      setCustomers(customerData);
      setTransactions(transactionData);

    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refreshData = React.useCallback(() => fetchData(), [fetchData]);

  const value: FetchContext = {
    customers,
    transactions,
    refreshData,
    isLoading,
    error,
  }

  return <FetchContext.Provider value={value}>{children}</FetchContext.Provider>
}

export const useDashboard = (): FetchContext => {
  const context = React.useContext(FetchContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a FetchProvider');
  }
  return context;
};
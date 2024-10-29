interface Transaction {
  type: "deposit" | "withdrawal";
  amount: number;
  customer: {
    balance: number;
  };
}

export function calculateTotalDeposit(transactions: Transaction[] = []) {
  const result = transactions
    .filter((t) => t.type === "deposit")
    .reduce((sum, t) => sum + t.amount, 0);
  return formatCurrency(result);
}

export function calculateTotalWithdrawal(transactions: Transaction[] = []) {
  const result = transactions
    .filter((t) => t.type === "withdrawal")
    .reduce((sum, t) => sum + t.amount, 0);

  return formatCurrency(result);
}

export function calculateTotalBalance(customers: { balance: number }[] = []) {
  const result = customers.reduce((sum, customer) => sum + customer.balance, 0);

  return formatCurrency(result);
}

export default function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
}

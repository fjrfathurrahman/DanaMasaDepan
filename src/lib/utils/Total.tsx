import { RowTransactionProps } from "../types/Types";

// * Function to calculate total deposit (Deposit)
export function calculateTotalDeposit(transactions: RowTransactionProps[] = []) {
  const result = transactions?.filter((t) => t.type === "deposit")
    .reduce((sum, t) => sum + parseFloat(t.amount?.toString() ?? "0"), 0);
  
    return formatCurrency(result);
}

// * Function to calculate total withdrawal (Penarikan)
export function calculateTotalWithdrawal(transactions: RowTransactionProps[] = []) {
  const result = transactions?.filter((t) => t.type === "withdrawal")
    .reduce((sum, t) => sum + parseFloat(t.amount?.toString() ?? "0"), 0);

  return formatCurrency(result);
}

// * Function to calculate total balance (Saldo)
export function calculateTotalBalance(customers: { balance: number }[] = []) {
  const result = customers?.reduce((sum, customer) => sum + parseFloat(customer.balance?.toString() ?? "0"), 0);

  return formatCurrency(result);
}

// * Function to format currency 
export default function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR"}).format(value);
}

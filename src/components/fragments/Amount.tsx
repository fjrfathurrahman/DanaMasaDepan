import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import useGetTransaction from "@/lib/hooks/transaksi/useGetTransaction";

type Type = "deposit" | "withdrawal";

interface Customer {
  balance: number;
}

interface Transaction {
  type: Type;
  amount: number;
  customer: Customer;
}

const Amount = () => {
  const { data: transactions, status } = useGetTransaction();
  const { data: customers } = useGetNasabah();


  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return <div>Error fetching transactions</div>;

  const totalDeposit = transactions
    .filter((t: Transaction) => t.type === "deposit")
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

  const totalWithdrawal = transactions
    .filter((t: Transaction) => t.type === "withdrawal")
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

  const totalBalance = customers && customers?.reduce((sum: number, customer: Customer) => {
    return sum + customer.balance;
  }, 0);

  return (
    <div className="border-y py-8">
      <div>
        {/* icon */}
        <h6>Overview</h6>
      </div>

      <div className="mt-4 flex gap-2 border p-2.5">
        <span>Total Saldo: {totalBalance}</span>
        <span>Total Pembayaran: {totalDeposit}</span>
        <span>Total Penarikan: {totalWithdrawal}</span>
      </div>
    </div>
  );
};

export default Amount;

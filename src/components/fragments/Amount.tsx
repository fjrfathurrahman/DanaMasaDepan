import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import useGetTransaction from "@/lib/hooks/transaksi/useGetTransaction";
import { calculateTotalBalance, calculateTotalDeposit, calculateTotalWithdrawal } from "@/lib/utils/Total";
import { Skeleton } from "@nextui-org/react";
import { GrMoney } from "react-icons/gr";
import { Layout } from "../modules/import";

const Amount = () => {
  const { data: transactions, status } = useGetTransaction();
  const { data: customers } = useGetNasabah();

  const totalDeposit = calculateTotalDeposit(transactions);
  const totalWithdrawal = calculateTotalWithdrawal(transactions);
  const totalBalance = calculateTotalBalance(customers);

  
  if (status === "pending") return <Loading />;
  
  return (
    <div className="border-y py-8 space-y-4">
     
      <div className="flex gap-2 items-center">
        <GrMoney size={20}/>
        <h6>Ringkasan Saldo</h6>
      </div>

      <Layout.Box className="flex items-center flex-col gap-6">

        <div className="bg-gradient-to-tr from-blue-900 to-sky-400 text-white p-2 ps-4 pe-16 rounded-lg w-full md:w-max">
          <h5 className="font-bold">{totalBalance ?? 0}</h5>
          <small>Total Jumlah Saldo</small>
        </div>
        
        <div className="bg-gradient-to-tr from-blue-900 to-sky-400 text-white p-2 ps-4 pe-16 rounded-lg w-full md:w-max">
          <h5 className="font-bold">{totalDeposit ?? 0}</h5>
          <small>Total Deposit</small>
        </div>
        
        <div className="bg-gradient-to-tr from-blue-900 to-sky-400 text-white p-2 ps-4 pe-16 rounded-lg w-full md:w-max">
          <h5 className="font-bold">{totalWithdrawal ?? 0}</h5>
          <small>Total Penarikan Saldo</small>
        </div>
        
      </Layout.Box>
    </div>
  );
};

export default Amount;

function Loading() {
  return (
    <div className="border-y py-8 space-y-4">
      <Skeleton className="bg-default-900 w-1/5 h-6 rounded-lg" />
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="bg-default-900 w-3/4 h-6 rounded-lg" />
        ))}
      </div>
    </div>
  );
}

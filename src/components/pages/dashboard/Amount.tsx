import { Layout } from "@/components/modules/import";
import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import useGetTransaction from "@/lib/hooks/transaksi/useGetTransaction";
import { calculateTotalBalance, calculateTotalDeposit, calculateTotalWithdrawal } from "@/lib/utils/Total";
import { Skeleton } from "@nextui-org/react";
import { GrMoney } from "react-icons/gr";

const Amount = () => {
  const { data: transactions, status } = useGetTransaction();
  const { data: customers } = useGetNasabah();

  const totalDeposit = calculateTotalDeposit(transactions);
  const totalWithdrawal = calculateTotalWithdrawal(transactions);
  const totalBalance = calculateTotalBalance(customers);
  
  return (
    <div className="border-b space-y-4 pb-8 mb-8">
     
      <div className="flex gap-2 items-center">
        <GrMoney size={20}/>
        <h6>Ringkasan Saldo</h6>
      </div>

      {status === 'pending' ? Loading() : (
        <Layout.Box className="flex items-center md:flex-row flex-col gap-6">
          <div className="bg-gradient-to-bl from-[#705DF8] to-[#3A2A85] text-white p-2 ps-4 pe-16 rounded-lg w-full md:w-max shadow-sm">
            <h5 className="font-bold">{totalBalance ?? 0}</h5>
            <small>Total Jumlah Saldo</small>
          </div>

          <div className="bg-gradient-to-bl from-[#FFE827] to-[#88590b] text-white p-2 ps-4 pe-16 rounded-lg w-full md:w-max shadow-sm">
            <h5 className="font-bold">{totalDeposit ?? 0}</h5>
            <small>Total Deposit</small>
          </div>

          <div className="bg-gradient-to-bl from-[#F20C35] to-[#8B1127] text-white p-2 ps-4 pe-16 rounded-lg w-full md:w-max shadow-sm">
            <h5 className="font-bold">{totalWithdrawal ?? 0}</h5>
            <small>Total Penarikan Saldo</small>
          </div>
        
        </Layout.Box>
      )}
    </div>
  );
};

export default Amount;

function Loading() {
  return (
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="bg-default-900 w-3/4 h-14 rounded-lg" />
        ))}
      </div>
  );
}

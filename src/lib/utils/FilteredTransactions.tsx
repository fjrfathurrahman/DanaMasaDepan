import { Loader } from "@/components/layouts/Loader";
import { RowTransactionProps } from "../types/Types";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import clsx from "clsx";
import Icon from "@/components/common/Icon";
import formatCurrency from "./Total";
import formatDateWithRelative from "./FormatDateRelative";

export interface FilteredTransactionsProps {
  transactions: RowTransactionProps[];
  params: {
    id: string;
  };
  statusTransaction: 'success' | 'pending' | 'error';
}

export default function FilteredTransactions({transactions, params, statusTransaction}: FilteredTransactionsProps) {
  const filteredTransactions = transactions
    ?.filter((item) => item.customer_id?.toString() === params.id)
    ?.sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
  );

  return (
    <div className="space-y-4 pt-4">
      {statusTransaction === 'success' ? (
        filteredTransactions.length > 0 ? (
          filteredTransactions.slice(0, 5).map((item) => (
            <div key={item.id} className={clsx('p-2.5 rounded-xl dark:*:text-white flex items-center gap-4 hover:scale-95 duration-500', item.type === 'deposit' ? 'bg-success-500/25' : 'bg-danger-500/25')}>
              <div className={clsx('w-max p-1.5 rounded-xl text-white', item.type === 'deposit' ? 'bg-success' : 'bg-danger')}>
                <Icon icon={item.type === 'deposit' ? IoMdTrendingUp : IoMdTrendingDown} size="md"/>
              </div>

              <div>
                <h6>{formatCurrency(Number(item.amount))}</h6>
                <small>{formatDateWithRelative(item.created_at)}</small>
              </div>
            </div>
          ))
        ) : (
          <p>Tidak ada transaksi.</p>
        )
      ) : statusTransaction === 'pending' ? <Loader.Fragment /> : <p>Terjadi Kesalahan</p>
      }
    </div>
  );
}

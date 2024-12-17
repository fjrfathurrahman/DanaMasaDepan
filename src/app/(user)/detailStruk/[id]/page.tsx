"use client";

import { RowTransactionProps } from "@/lib/types/Types";
import { Layout } from "@/components/modules/import";
import useGetTransaction from "@/lib/hooks/transaksi/useGetTransaction";
import formatDate from "@/lib/utils/FormatDate";

export default function DetailStruktur({ params }: { params: { id: string } }) {
  const { data, status } = useGetTransaction(params.id);
  const transaction = data as RowTransactionProps;

  if (status === "pending") return <p>Loading...</p>;

  return (
    <Layout.Container spacing={"py-28"}>
      <div className="border-2 p-2.5 rounded-xl mx-auto w-1/2 space-y-1.5">
        <div className="py-8 text-center border-b-2 border-dashed">
          <h4>Logo</h4>
        </div>

        <div className="py-4 border-dashed border-y-2">
          <div className="flex justify-between *:py-0">
            <p>NO TRANSAKSI</p>
            <p>TRSKS00000{transaction?.id}</p>
          </div>
          <div className="flex justify-between *:py-0">
            <p>TANGGAL</p>
            <p>{formatDate(transaction?.created_at)}</p>
          </div>
        </div>

        <div className="py-4 border-dashed border-y-2">
          <div className="flex justify-between *:py-0">
            <p>NO CUSTOMER</p>
            <p>CSTMR00000{transaction?.customer_id}</p>
          </div>
          <div className="flex justify-between *:py-0">
            <p>NO ADMIN</p>
            <p>ADMN00000{transaction?.admin_id}</p>
          </div>
          <div className="flex justify-between *:py-0 *:capitalize">
            <p>Name</p>
            <p>{transaction?.customer?.name}</p>
          </div>
          <div className="flex justify-between *:py-0 *:capitalize">
            <p>Jenis Kelamin</p>
            <p>{transaction?.customer?.gender}</p>
          </div>
          <div className="flex justify-between gap-28 *:py-0 *:capitalize">
            <p>Keahlian/Jurusan</p>
            <small className="text-right">{transaction?.customer?.major}</small>
          </div>
          <div className="flex justify-between *:py-0 *:capitalize">
            <p>NO PHONE</p>
            <p>{transaction?.customer?.phone}</p>
          </div>
          <div className="flex justify-between *:py-0 *:capitalize">
            <p>EMAIL</p>
            <p>{transaction?.customer?.email}</p>
          </div>
        </div>

        <div className="py-4 border-dashed border-y-2 text-center">
          <p>Terima Kasih Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, necessitatibus nulla quo ut fugit alias?</p>
        </div>

      </div>
    </Layout.Container>
  );
}

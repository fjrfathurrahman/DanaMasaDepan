"use client";

import Amount from "@/components/fragments/Amount";
import Banner from "@/components/fragments/Banner";
import TableData from "@/components/fragments/TableData";
import useGetTransaction from "@/lib/hooks/transaksi/useGetTransaction";
 
const columns = [
  { key: "id", label: "ID" },
  { key: "customer_id", label: "Customer" },
  { key: "admin_id", label: "Admin" },
  { key: "amount", label: "Amount" },
  { key: "type", label: "Type" },
  { key: "action", label: "Action" },
];

export default function Daashboard() {
  const { data, status } = useGetTransaction();

  return (
    <>
      <Banner />
      <Amount />

      <div className="space-y-4">
        <div>
          {/* icon */}
          <h6>Table Data</h6>
        </div>
        <TableData data={data} status={status} columns={columns} page="Transaksi" />
      </div>
{/* 
      <div>
        <h4>Statistic</h4>
      </div>

      <div>
        <h4>Aktivitas Terbaru</h4>
      </div> */}
    </>
  );
}
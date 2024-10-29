"use client";

import Amount from "@/components/fragments/Amount";
import Banner from "@/components/fragments/Banner";
import TableData from "@/components/fragments/TableData";
import useGetTransaction from "@/lib/hooks/transaksi/useGetTransaction";
import { MdOutlineBackupTable } from "react-icons/md";
 
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
        <div className="flex gap-2 items-center">
          <MdOutlineBackupTable size={20}/>
          <h6>Table Data</h6>
        </div>
        <TableData data={data} status={status} columns={columns} page="Transaksi" />
      </div>
      
    </>
  );
}
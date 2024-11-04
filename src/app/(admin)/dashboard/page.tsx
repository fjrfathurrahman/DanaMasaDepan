"use client";

import TableData from "@/components/fragments/TableData";
import Activity from "@/components/pages/dashboard/Activity";
import Amount from "@/components/pages/dashboard/Amount";
import Banner from "@/components/pages/dashboard/Banner";
import Statistics from "@/components/pages/dashboard/Statistics";
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

  return (
    <>
      <Banner />
      <Amount />
      <TableTransaction />
      <Activity/>
      <Statistics/>
    </>
  );
}

const TableTransaction = () => {
  const { data, status } = useGetTransaction();

  return (
    <div className="space-y-4 pb-8 mb-8 border-b">
      <div className="flex gap-2 items-center">
        <MdOutlineBackupTable size={20} />
        <h6>Table Data</h6>
      </div>

      <TableData
        data={data}
        status={status}
        columns={columns}
        page="Transaksi"
      />
    </div>
  );
};

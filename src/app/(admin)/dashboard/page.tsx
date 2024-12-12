"use client";

import TableData from "@/components/fragments/TableData";
import Amount from "@/components/pages/dashboard/Amount";
import Banner from "@/components/pages/dashboard/Banner";
import useGetTransaction from "@/lib/hooks/transaksi/useGetTransaction";
import { FeatureUnavailable } from "@/components/layouts/FeatureUnavailable";
import { MdOutlineBackupTable } from "react-icons/md";
import { PiListStarBold } from "react-icons/pi";
import { BsBarChart } from "react-icons/bs";

const columns = [
  { key: "id", label: "ID" },
  { key: "customer_id", label: "Customer" },
  { key: "admin_id", label: "Admin" },
  { key: "amount", label: "Amount" },
  { key: "type", label: "Type" },
  { key: "view", label: "View" },
];

export default function Dashboard() {

  return (
    <>
      <Banner />
      <Amount />
      <TableTransaction />
      <FeatureUnavailable Icon={PiListStarBold} HeaderText="Aktifitas Terbaru"/>
      <FeatureUnavailable Icon={BsBarChart} HeaderText="Data Statistik" TailwindSpacing="py-20"/>
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

      <TableData data={data} status={status} columns={columns} page="Transaksi"/>
    </div>
  );
};

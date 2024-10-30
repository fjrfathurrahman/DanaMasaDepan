"use client";

import TableData from "@/components/fragments/TableData";
import { Layout } from "@/components/modules/import";
import useGetAdmin from "@/lib/hooks/admin/useGetAdmin";
import Link from "next/link";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Nama" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "action", label: "Action" },
];

export default function TableAdmin() {
  const { data, status } = useGetAdmin();

  return (
    <Layout.Box className="space-y-8">
      <div>
        <h2>Table Admin</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel
          eos, magni illo natus ab ex fuga ratione voluptas ut?
        </p>
        <Link href="/dashboard/tambahAdmin">Tambah admin</Link>
      </div>

      <TableData data={data} status={status} columns={columns} page="Admin" />
    </Layout.Box>
  );
}

'use client'

import TableData from "@/components/fragments/TableData";
import useGetAdmin from "@/lib/hooks/admin/useGetAdmin";

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
    <div>
      <TableData data={data} status={status} columns={columns} page="Admin" />
    </div>
  );
}
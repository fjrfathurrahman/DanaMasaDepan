"use client";

import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import { Layout } from "@/components/modules/import";
import Link from "next/link";
import TableData from "@/components/fragments/TableData";
import useDeleteNasabah from "@/lib/hooks/nasabah/useDeleteNasabah";

const columns = [
  { key: "id", label: "ID" },
  { key: "nisn", label: "NISN" },
  { key: "name", label: "Nama" },
  { key: "gender", label: "Jenis Kelamin" },
  { key: "major", label: "Jurusan" },
  { key: "class", label: "Kelas" },
  { key: "balance", label: "Saldo" },
  { key: "action", label: "Aksi" },
];

export default function TableNasabah() {
  const { data, status } = useGetNasabah();
  const { mutate } = useDeleteNasabah();

  return (
    <Layout.Box className="space-y-8">
      <div>
        <h2>Table Nasabah</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel
          eos, magni illo natus ab ex fuga ratione voluptas ut?
        </p>
        <Link href="/dashboard/tambahNasabah">Tambah</Link>
      </div>

      <TableData data={data} status={status} columns={columns} page="Nasabah"  deleteItem={(id) => mutate(id.toString())}/>
    </Layout.Box>
  );
}

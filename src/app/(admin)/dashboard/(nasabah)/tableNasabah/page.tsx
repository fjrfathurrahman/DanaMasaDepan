"use client";

import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import { Layout } from "@/components/modules/import";
import Link from "next/link";
import TableData from "@/components/fragments/TableData";

const columns = [
  { key: "number", label: "No." },
  { key: "nisn", label: "NISN" },
  { key: "name", label: "Nama" },
  { key: "gender", label: "Jenis Kelamin" },
  { key: "phone", label: "Nomor Telepon" },
  { key: "action", label: "Aksi" },
];

export default function TableNasabah() {
  const { data, status } = useGetNasabah();

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

      <TableData data={data} status={status} columns={columns} page="Nasabah" />
    </Layout.Box>
  );
}

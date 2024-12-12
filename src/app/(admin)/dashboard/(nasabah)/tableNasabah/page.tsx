"use client";

import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import Link from "next/link";
import TableData from "@/components/fragments/TableData";
import useDeleteNasabah from "@/lib/hooks/nasabah/useDeleteNasabah";
import Icon from "@/components/common/Icon";
import filterDataByQuery from "@/lib/utils/FilterDataQuery";
import { Layout } from "@/components/modules/import";
import { Button, Input } from "@nextui-org/react";
import { toast } from "sonner";
import { Icons } from "@/lib/resource/icons";
import { useState } from "react";
import { RowProps } from "@/lib/types/Types";

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
  const { mutate } = useDeleteNasabah();
  const [query, setQuery] = useState<string>('');
  const { data: allData, status } = useGetNasabah();
  
  const filterKeys = ['id', 'name', 'nisn', 'major', 'class', 'gender', 'email', 'phone', 'balance'];
  const filteredData = filterDataByQuery(allData || [], query, filterKeys) as RowProps[];
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  return (
    <Layout.Box>
      <div className="pb-8 border-b space-y-2">
        <h2>Nasabah</h2>
        <p>
          Halaman ini menampilkan daftar lengkap nasabah yang
          terdaftar dalam sistem. Setiap entri pada tabel mencakup informasi
          penting seperti ID, NISN, nama, jenis kelamin, jurusan, kelas, alamat,
          email, dan nomor telepon. Tabel ini dirancang untuk memudahkan
          pengelolaan data nasabah, dengan opsi untuk melihat detail, mengedit,
          atau menghapus informasi nasabah.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button color="primary" startContent={<Icons.FaPlus size={18} />}>
            <Link href="/dashboard/tambahNasabah">Tambah nasabah</Link>
          </Button>
          <Button color="primary" variant="light" startContent={<Icons.MdOutlineRefresh size={18}/>} onClick={() => toast.info("Fitur belum tersedia")}>
            Refresh Table
          </Button>
        </div>
      </div>

      <div className="py-8 gap-4 flex items-center">
        <Input onChange={handleSearch} startContent={<Icon icon={Icons.IoSearch} />} size="lg" placeholder="Cari akun Anda berdasarkan keyword" />
        <Button variant="solid" color="primary" size="lg">Cari</Button>
      </div>

      <TableData
        data={filteredData}
        status={status}
        columns={columns}
        page="Nasabah"
        openDeleteModal={(id) => mutate(id.toString())}
      />
    </Layout.Box>
  );
}

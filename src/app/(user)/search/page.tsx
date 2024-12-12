'use client'

import Icon from "@/components/common/Icon";
import TableData from "@/components/fragments/TableData";
import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import filterDataByQuery from "@/lib/utils/FilterDataQuery";
import { Layout } from "@/components/modules/import";
import { Resource } from "@/lib/resource";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { RowCostumersProps, RowProps } from "@/lib/types/Types";


export default function Search() {
  const [query, setQuery] = useState<string>('');
  const { data: allData, status } = useGetNasabah();
  
  const filterKeys = ['id', 'name', 'nisn', 'major', 'class', 'gender', 'email', 'phone', 'balance'] as (keyof RowCostumersProps)[];
  const filteredData = filterDataByQuery(allData || [], query, filterKeys) as RowProps[];
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  return (
    <Layout.Container spacing={'py-28'}>
      <div>
        <h2>Cari Akun Anda di sini!</h2>
        <p>Fitur pencarian nasabah yang memudahkan Anda untuk menemukan data berdasarkan NISN, Nama, Jurusan, dan Kelas. Serta Anda dapat melihat informasi data detail nasabah.</p>
      </div>

      <div className="py-8 gap-4 flex items-center">
        <Input startContent={<Icon icon={Resource.dIcons.search} />} size="lg" placeholder="Cari akun Anda berdasarkan NISN, Nama, Jurusan, Kelas dan lain-lain" onChange={handleSearch} />
        <Button variant="solid" color="primary" size="lg">Cari</Button>
      </div>

      <TableData data={filteredData} status={status} columns={columns} page="Nasabah" />
    </Layout.Container>
  );
}

const columns = [
  { key: "id", label: "ID" },
  { key: "nisn", label: "NISN" },
  { key: "name", label: "Nama" },
  { key: "gender", label: "Jenis Kelamin" },
  { key: "major", label: "Jurusan" },
  { key: "class", label: "Kelas" },
  { key: "balance", label: "Saldo" },
  { key: "view", label: "Lihat" },
];
'use client'

import Icon from "@/components/common/Icon";
import TableData from "@/components/fragments/TableData";
import { Layout } from "@/components/modules/import";
import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import { Resource } from "@/lib/resource";
import { Button, Input } from "@nextui-org/react";

export default function Search() {
  const { data, status } = useGetNasabah();

  return (
    <Layout.Container spacing={'py-28'}>
      <div>
        <h2>Cari Akun Anda di sini!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam, commodi fuga quod distinctio provident quae laudantium voluptatem. Assumenda culpa ipsum sunt, excepturi aut voluptatum ex! Beatae voluptates inventore architecto.</p>
      </div>

      <div className="py-8 gap-4 flex items-center">
        <Input startContent={<Icon icon={Resource.dIcons.search} />} size="lg" placeholder="Cari akun Anda berdasarkan NISN, Nama, Jurusan, Kelas dan lain-lain" />
        <Button variant="solid" color="primary" size="lg">Cari</Button>
      </div>

      <TableData data={data} status={status} columns={columns} page="Nasabah" />
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
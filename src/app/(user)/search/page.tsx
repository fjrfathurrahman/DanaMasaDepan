'use client'

import { Layout } from "@/components/modules/import";
import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";

export default function SearchNasabah() {
  const { data, } = useGetNasabah();

  return (
    <Layout.Container spacing={['py-28']}>

      <div>
        <input type="text" placeholder="Cari Nasabah, berdasarkan NISN, Nama atau Jurusan" />
      </div>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </Layout.Container>
  );
}
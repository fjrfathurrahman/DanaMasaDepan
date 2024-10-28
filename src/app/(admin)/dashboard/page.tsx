"use client";

import { Layout } from "@/components/modules/import";
import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Dashboard() {
  const { data } = useGetNasabah();

  return (
    <Layout.Container>
      <h3>Welcome Admin</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel eos, magni illo natus ab ex fuga ratione voluptas ut?</p>

      <div className="space-x-4 mt-6">
        <Button color="primary">
          <Link href="/dashboard/tambahNasabah">Tambah Nasabah</Link>
        </Button>
        <Button color="danger" variant="solid">
          <Link href="/authentication">Logout</Link>
        </Button>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout.Container>
  );
}

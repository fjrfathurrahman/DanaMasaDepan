'use client'

import { Layout } from "@/components/modules/import";
import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Dashboard() {
  const { data } = useGetNasabah()

  return (
    <Layout.Container>
      hello world
      <Button color="danger" variant="solid">
        <Link href="/authentication">Logout</Link>
      </Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout.Container>
  );
}
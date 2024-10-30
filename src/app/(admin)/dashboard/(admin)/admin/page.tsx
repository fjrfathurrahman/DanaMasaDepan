"use client";

import Icon from "@/components/common/Icon";
import TableData from "@/components/fragments/TableData";
import { Layout } from "@/components/modules/import";
import useGetAdmin from "@/lib/hooks/admin/useGetAdmin";
import { Icons } from "@/lib/resource/icons";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "sonner";

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
    <Layout.Box>
      <div className="py-8 border-b space-y-2">
        <h2>Admin</h2>
        <p>
          Halaman ini menampilkan daftar lengkap admin yang terdaftar dalam
          sistem. Tabel ini menyajikan informasi penting tentang setiap admin,
          termasuk ID, nama, email, dan peran atau hak akses yang dimiliki.
          Halaman ini dirancang untuk memudahkan pengelolaan dan pemantauan
          admin dalam sistem, sehingga Anda dapat memastikan bahwa semua data
          dan tindakan yang dilakukan oleh admin tercatat dengan baik.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button color="primary" startContent={<Icons.FaPlus size={18} />}>
            <Link href="/dashboard/tambahAdmin">Tambah Admin</Link>
          </Button>
          <Button
            color="primary"
            variant="bordered"
            startContent={<Icons.MdOutlineRefresh size={18} />}
            onClick={() => toast.info("Fitur belum tersedia")}
          >
            Refresh Table
          </Button>
        </div>
      </div>

      <div className="py-8 gap-4 flex items-center">
        <Input
          startContent={<Icon icon={Icons.IoSearch} />}
          size="lg"
          placeholder="Cari akun Anda berdasarkan keyword"
        />
        <Button variant="solid" color="primary" size="lg">
          Cari
        </Button>
      </div>

      <TableData data={data} status={status} columns={columns} page="Admin" />
    </Layout.Box>
  );
}

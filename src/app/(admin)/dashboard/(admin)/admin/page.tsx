"use client";

import Icon from "@/components/common/Icon";
import TableData from "@/components/fragments/TableData";
import useGetAdmin from "@/lib/hooks/admin/useGetAdmin";
import Link from "next/link";
import filterDataByQuery from "@/lib/utils/FilterDataQuery";
import { Layout } from "@/components/modules/import";
import { Icons } from "@/lib/resource/icons";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import { toast } from "sonner";
import { useState } from "react";
import { RowProps } from "@/lib/types/Types";
import { Modal } from "@/components/fragments/Modal";
import useDeleteAdmin from "@/lib/hooks/admin/useDeleteAdmin";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Nama" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "action", label: "Action" },
];

export default function TableAdmin() {
  const [keyword, setKeyword] = useState<string>("");
  const { data: allData, status } = useGetAdmin();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { mutate } = useDeleteAdmin()

  const filterKeys = ["id", "name", "email", "role"];
  const filteredData = filterDataByQuery( allData || [], keyword, filterKeys) as RowProps[];
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const openModal = (itemId: number) => {
    setSelectedItem(itemId);
    onOpen();
  };

  const confirmDelete = () => {
    if (selectedItem) return mutate(selectedItem); setSelectedItem(null); onClose();
  };

  return (
    <>
      <Layout.Box>
        <Header/>

        <div className="py-8 gap-4 flex items-center">
          <Input onChange={handleSearch} startContent={<Icon icon={Icons.IoSearch} />} size="lg" placeholder="Cari akun Anda berdasarkan keyword"/>
          <Button variant="solid" color="primary" size="lg">Cari</Button>
        </div>

        <TableData data={filteredData} status={status} columns={columns} openDeleteModal={openModal} page="Admin" />
      </Layout.Box>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} variant="Delete" bodyText="Apakah Anda yakin ingin menghapus admin ini?" onPress={confirmDelete} /> 
    </>
  );
}

const Header = () => {
  return (
    <div className="pb-8 border-b space-y-2">
      <h2>Admin</h2>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidemincidunt odio voluptas est modi tenetur repellendus ea neque porroeveniet!</p>
      <div className="flex gap-4 flex-wrap">
        <Button color="primary" startContent={<Icons.FaPlus size={18} />}>
          <Link href="/dashboard/tambahAdmin">Tambah Admin</Link>
        </Button>
        <Button color="primary" variant="bordered" startContent={<Icons.MdOutlineRefresh size={18} />} onClick={() => toast.info("Fitur belum ")}>
          Refresh Table
        </Button>
      </div>
    </div>
  )
}
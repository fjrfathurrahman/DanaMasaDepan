"use client";

import TableData from "@/components/fragments/TableData";
import useGetAdmin from "@/lib/hooks/admin/useGetAdmin";
import filterDataByQuery from "@/lib/utils/FilterDataQuery";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { RowProps } from "@/lib/types/Types";
import { Modal } from "@/components/fragments/Modal";
import { TableLayout } from "@/components/layouts/TableLayout";
import { Columns } from "@/lib/resource";
import { toast } from "sonner";

export default function TableAdmin() {
  const [keyword, setKeyword] = useState<string>("");
  const { data: allData, status } = useGetAdmin();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  // const { mutate: deleteAdmin } = useDeleteAdmin();

  const filterKeys = ["id", "name", "email", "role"];
  const filteredData = filterDataByQuery(allData, keyword, filterKeys) as RowProps[];
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

  const openModal = (itemId: number) => { setSelectedItem(itemId); onOpen() };
  const confirmDelete = () => {
    if (selectedItem) return toast.warning('Admin tidak dapat dihapus!'); setSelectedItem(null); onClose();
  };

  return (
    <TableLayout
      title="Table Admin"
      linksAdd={{ name: "Tambah Admin", url: "/dashboard/tambahAdmin" }}
      search={handleSearch}
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidemincidunt odio voluptas est modi tenetur repellendus ea neque porroeveniet!"
    >
      <TableData data={filteredData} status={status} columns={Columns.admin} openDeleteModal={openModal} page="Admin" />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} variant="Delete" onPress={confirmDelete}/>
    </TableLayout>
  );
}

"use client";

import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import TableData from "@/components/fragments/TableData";
import useDeleteNasabah from "@/lib/hooks/nasabah/useDeleteNasabah";
import filterDataByQuery from "@/lib/utils/FilterDataQuery";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { RowProps } from "@/lib/types/Types";
import { Modal } from "@/components/fragments/Modal";
import { TableLayout } from "@/components/layouts/TableLayout";
import { Columns } from "@/lib/resource";

export default function TableNasabah() {
  const { mutate: deleteNasabah } = useDeleteNasabah();
  const [query, setQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data: allData, status } = useGetNasabah();

  const filterKeys = [ "id", "name", "nisn", "major", "class", "gender", "email", "phone", "balance"];
  const filteredData = filterDataByQuery(allData || [], query, filterKeys) as RowProps[];
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const openModal = (itemId: number) => { setSelectedItem(itemId); onOpen() };
  const confirmDelete = () => {
    if (selectedItem) return deleteNasabah(selectedItem.toString()); setSelectedItem(null); onClose();
  };

  return (
    <TableLayout
      title="Nasabah"
      linksAdd={{ name: "Tambah Nasabah", url: "/dashboard/tambahNasabah" }}
      search={handleSearch}
      description="Halaman ini menampilkan daftar lengkap nasabah yang
          terdaftar dalam sistem. Setiap entri pada tabel mencakup informasi
          penting seperti ID, NISN, nama, jenis kelamin, jurusan, kelas, alamat,
          email, dan nomor telepon. Tabel ini dirancang untuk memudahkan
          pengelolaan data nasabah, dengan opsi untuk melihat detail, mengedit,
          atau menghapus informasi nasabah."
    >

      {/* Server Component: Table */}
      <TableData data={filteredData} status={status} columns={Columns.nasabah} page="Nasabah" openDeleteModal={openModal}/>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        variant="Delete"
        bodyText="Apakah Anda yakin ingin menghapus admin ini?"
        onPress={confirmDelete}
      />
    </TableLayout>
  );
}

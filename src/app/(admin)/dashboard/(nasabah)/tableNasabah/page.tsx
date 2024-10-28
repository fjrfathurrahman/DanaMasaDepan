"use client";

import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import { Layout } from "@/components/modules/import";
import { MdRemoveRedEye, MdDelete, MdModeEdit } from "react-icons/md";
import { Button, ButtonGroup, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

const columns = [
  { key: "number", label: "No." },
  { key: "nisn", label: "NISN" },
  { key: "name", label: "Nama" },
  { key: "gender", label: "Jenis Kelamin" },
  { key: "phone", label: "Nomor Telepon" },
  { key: "action", label: "Aksi" },
]

export default function TableNasabah() {
  const { data, status } = useGetNasabah();

  const feedback = status === 'pending' ? 'Loading...' : status === 'error' ? 'Terjadi Kesalahan' : data?.length === 0 ? 'Data tidak ditemukan' : '';

  return (
    <Layout.Box className="space-y-8">
      <div>
        <h2>Table Nasabah</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel
          eos, magni illo natus ab ex fuga ratione voluptas ut?
        </p>
      </div>

      <Table aria-label="Table" align="center">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>

        <TableBody items={data} emptyContent={feedback}>
          {RenderCell(data)}
        </TableBody>
      </Table>

    </Layout.Box>
  );
}

function RenderCell(data: []) {

  return data?.map((item, index: number) => (
    <TableRow key={item} className="overflow-x-auto">
      {(columnKey) => (
        <TableCell className="text-wrap text-ellipsis " style={{width : columnKey === "email" ? "20px" : "auto"}}>
          {columnKey === "number" ? index + 1 : columnKey === "action" ? ButtonActions() : item[columnKey]}
        </TableCell>
      )}
    </TableRow>
  ));
}

function ButtonActions() {
  return (
    <ButtonGroup className="w-full space-x-2 *:text-white">
      <Button isIconOnly startContent={<MdRemoveRedEye size={18} />} color="warning"/>
      <Button isIconOnly startContent={<MdModeEdit size={18} />} color="primary"/>
      <Button isIconOnly startContent={<MdDelete size={18} />} color="danger"/>
    </ButtonGroup>
  )
}
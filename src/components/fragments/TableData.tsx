import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import { Page, RowProps } from "@/lib/types/Types";
import React, { useState } from "react";
import GetKeyValue from "@/lib/utils/GetKeyValue";
import { toast } from "sonner";

interface TableDataProps {
  data: RowProps[];
  status: string;
  columns: { key: string; label: string }[];
  page: Page;
  openDeleteModal?: (id: number) => void;
}

const TableData: React.FC<TableDataProps> = ({ data, status, columns, page, openDeleteModal = () => toast.info("Fitur belum tersedia")}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const totalItems: number = data?.length || 0;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const paginatedData: RowProps[] = data?.slice(startIndex, startIndex + itemsPerPage) || [];

  const handlePageChange = (newPage: number): void => setCurrentPage(newPage);

  return (
    <div className="space-y-6">
      <Table aria-label="Table" align="center">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>

        <TableBody items={paginatedData} emptyContent={status === "error" ? "Terjadi kesalahan pada server" : status === "pending" ? "Loading..." : "Data tidak ditemukan"}>
          {paginatedData?.map((item: RowProps, index: number) => (
            <TableRow key={item.id} className="overflow-x-auto">
              {(columnKey) => 
                <TableCell key={columnKey} className={"text-wrap text-ellipsis capitalize w-auto"}>
                  {GetKeyValue(item, columnKey as string, index, page, openDeleteModal)}
                </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <Button variant="bordered" color="primary" onPress={() => handlePageChange(currentPage - 1)} isDisabled={currentPage === 1 }>
          Sebelumnya
        </Button>
        <p>Halaman {currentPage} dari {totalPages}</p>
        <Button variant="bordered" color="primary" onPress={() => handlePageChange(currentPage + 1)} isDisabled={currentPage === totalPages}>
          Selanjutnya
        </Button>
      </div>
      
    </div>
  );
};

export default TableData;

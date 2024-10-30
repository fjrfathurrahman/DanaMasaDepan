import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import GetKeyValue from "@/lib/utils/GetKeyValue";
import { Page, RowProps } from "@/lib/types/Types";
import { toast } from "sonner";

interface TableDataProps {
  data: [];
  status: string;
  columns: { key: string; label: string }[];
  page: Page;
  deleteItem?: (id: string | number) => void;
}

const TableData = ({ data, status, columns, page, deleteItem = () => toast.info('Fitur belum tersedia') }: TableDataProps) => {
  return (
    <Table aria-label="Table" align="center">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={data} emptyContent={status}>
        {data?.map((item: RowProps, index: number) => (
          <TableRow key={item.id} className="overflow-x-auto">
            {(columnKey) => (
              <TableCell key={columnKey} className={"text-wrap text-ellipsis capitalize w-auto"}>
                {GetKeyValue(item, columnKey as string, index, page, () => deleteItem(item.id))}
              </TableCell>
            )}
         </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
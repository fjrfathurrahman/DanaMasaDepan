import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import FeedBack from "../common/FeedBack";
import GetKeyValue from "@/lib/utils/GetKeyValue";
import { Page } from "@/lib/types/Types";

interface TableDataProps {
  data: [];
  status: string;
  columns: { key: string; label: string }[];
  page: Page;
}

const TableData = ({ data, status, columns, page }: TableDataProps) => {
  return (
    <Table aria-label="Table" align="center">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={data} emptyContent={FeedBack(status, data)}>
        {RenderCell(data, page)}
      </TableBody>
    </Table>
  );
};

export default TableData;

function RenderCell(data: [], page: Page) {
  return data?.map((item, index: number) => (
    <TableRow key={item} className="overflow-x-auto">
      {(columnKey) => (
        <TableCell
          key={columnKey}
          className={"text-wrap text-ellipsis capitalize w-auto"}
        >
          {GetKeyValue(item, columnKey as string, index, page, () => alert("Fitur tidak tersedia"))}
        </TableCell>
      )}
    </TableRow>
  ));
}

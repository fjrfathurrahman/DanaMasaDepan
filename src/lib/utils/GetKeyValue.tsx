import { ButtonGroup, Chip } from "@nextui-org/react";
import { Page, RowProps } from "../types/Types";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { MdDelete, MdModeEdit, MdRemoveRedEye } from "react-icons/md";
import formatCurrency from "./Total";

export default function GetKeyValue( item: RowProps, columnKey: string, index: number, page: Page, deleteItem?: () => void) {
  switch (columnKey) {
    case "id":
      return index + 1;

    case "customer_id":
      return item.customer?.name;

    case "admin_id":
      return item.admin?.name;

    case "type":
      return item.type === "deposit" ? (
        <Chip color="success" variant="flat">Deposit</Chip>
      ) : item.type === "withdrawal" ? (
        <Chip color="danger" variant="flat">Withdrawal</Chip>
      ) : null;
    case "amount":
      return formatCurrency(item.amount as number);

    case "balance":
      return formatCurrency(item.balance as number);

    case "action":
      return (
        <ButtonGroup>
          <Button isIconOnly color="warning">
            <Link href={`/dashboard/detail${page}/${item.id}`} className="text-white">
              <MdRemoveRedEye size={18} />
            </Link>
          </Button>
          <Button isIconOnly color="primary">
            <Link href={`/dashboard/update${page}/${item.id}`}>
              <MdModeEdit size={18} />
            </Link>
          </Button>
          <Button
            isIconOnly
            startContent={<MdDelete size={18} />}
            color="danger"
            onClick={deleteItem}
          />
        </ButtonGroup>
      );

    case "view":
      return (
        <Button isIconOnly color="warning">
          <Link href={`/detail${page}/${item.id}`} className="text-white">
            <MdRemoveRedEye size={18} />
          </Link>
        </Button>
      )

    default:
      return item[columnKey] as React.ReactNode ?? "-";
  }
}

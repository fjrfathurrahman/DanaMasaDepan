import { ButtonGroup, Chip } from "@nextui-org/react";
import { Page } from "../types/Types";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { MdDelete, MdModeEdit, MdRemoveRedEye } from "react-icons/md";

export interface RowTransactionProps {
  id: number;
  customer_id?: number;
  admin_id?: number;
  type?: string;
  amount?: number;
  customer?: {
    id: number;
    name: string;
    email: string;
  };
  admin?: {
    id: number;
    name: string;
    email: string;
  };
  created_at?: string;
  updated_at?: string;
}

export interface RowCostumersProps {
  id: number;
  number?: number;
  name?: string;
  email?: string;
  phone?: string;
  created_at?: string;
  updated_at?: string;
}

interface RowProps extends RowTransactionProps, RowCostumersProps {
  [key: string]: unknown;
}

export default function GetKeyValue( item: RowProps, columnKey: string, index: number, page: Page, deleteItem?: (id: string) => void) {
  switch (columnKey) {
    case "id":
      return index + 1;

    case "customer_id":
      return item.customer?.name;

    case "admin_id":
      return item.admin?.name;

    case "type":
      return item.type === "deposit" ? (
        <Chip color="success" variant="flat">
          Deposit
        </Chip>
      ) : item.type === "withdrawal" ? (
        <Chip color="danger" variant="flat">
          Withdrawal
        </Chip>
      ) : null;
    case "amount":
      return "Rp. " + parseFloat((item.amount ?? 0).toString()).toFixed(2);

    case "action":
      return (
        <ButtonGroup>
          <Button isIconOnly color="warning">
            <Link href={`/dashboard/detail${page}/${item.id}`} className="text-white">
              <MdRemoveRedEye size={18} />
            </Link>
          </Button>
          <Button isIconOnly color="primary">
            <Link href={`/dashboard/edit${page}/${item.id}`}>
              <MdModeEdit size={18} />
            </Link>
          </Button>
          <Button
            isIconOnly
            startContent={<MdDelete size={18} />}
            color="danger"
            onClick={() => deleteItem}
          />
        </ButtonGroup>
      );

    default:
      return item[columnKey as keyof RowTransactionProps] ?? "-";
  }
}

import { Button } from "@nextui-org/react"
import Link from "next/link"
import { MdDelete, MdModeEdit, MdRemoveRedEye } from "react-icons/md";

const ButtonActions = ({id, onClick, page}: {id: string, page: 'Transaksi' | 'Nasabah' | 'Admin', onClick?: (id: string) => void}) => {

  return (
    <div className="w-full space-x-2 *:text-white">
      <Button isIconOnly color="warning">
        <Link href={`/dashboard/detail${page}/${id}`}>
          <MdRemoveRedEye size={18} />
        </Link>
      </Button>
      <Button isIconOnly color="primary">
        <Link href={`/dashboard/edit${page}/${id}`}>
          <MdModeEdit size={18} />
        </Link></Button>
      <Button isIconOnly startContent={<MdDelete size={18} />} color="danger" onClick={() => onClick && onClick(id)} />
    </div>
  )
}

export default ButtonActions
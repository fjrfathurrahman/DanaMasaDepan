import Icon from '../common/Icon'
import Link from 'next/link'
import { Layout } from '../modules/import'
import { Button, Input } from '@nextui-org/react'
import { Icons } from '@/lib/resource/icons'
import { toast } from 'sonner'

interface TableLayoutProps {
  children: React.ReactNode
  search: (e: React.ChangeEvent<HTMLInputElement>) => void
  title: string
  description: string
  linksAdd: { name: string; url: string }
}

export const TableLayout: React.FC<TableLayoutProps> = ({ children, linksAdd: {name, url}, search, title, description}) => {

  return (
    <Layout.Box>
      <Layout.Box className="pb-8 border-b space-y-2">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="flex gap-4 flex-wrap">
          <Button color="primary" startContent={<Icons.FaPlus size={18} />}>
            <Link href={url}>{name}</Link>
          </Button>
          <Button color="primary" variant="light" startContent={<Icons.MdOutlineRefresh size={18}/>} onClick={() => toast.info("Fitur Belum Tersedia")}>
            Refresh Table
          </Button>
        </div>
      </Layout.Box>

      <div className="py-8 gap-4 flex items-center">
        <Input onChange={search} startContent={<Icon icon={Icons.IoSearch} />} size="lg" placeholder="Cari akun Anda berdasarkan keyword" />
        <Button variant="solid" color="primary" size="lg">Cari</Button>
      </div>

      {children}
    </Layout.Box>
  )
}

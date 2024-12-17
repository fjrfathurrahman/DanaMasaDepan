'use client';

import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import useGetTransaction from "@/lib/hooks/transaksi/useGetTransaction";
import formatDate from "@/lib/utils/FormatDate";
import formatCurrency from "@/lib/utils/Total";
import Icon from "@/components/common/Icon";
import clsx from "clsx";
import { Layout } from "@/components/modules/import";
import { Chip, Image } from "@nextui-org/react";
import { RowCostumersProps, RowTransactionProps } from "@/lib/types/Types";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { Loader } from "@/components/layouts/Loader";

export default function DetailNasabah({params}: {params: { id: string }}) {
  const { data, status } = useGetNasabah(params.id);
  const { data: transaction, status: statusTransaction } = useGetTransaction();

  const nasabah = data as RowCostumersProps;

  const filteredTransactions: RowTransactionProps[] = transaction?.filter((item: RowTransactionProps) => item.customer_id?.toString() === params.id)
    ?.sort((a: RowTransactionProps, b: RowTransactionProps) => new Date(b.created_at ?? 0).getTime() - new Date(a.created_at ?? 0).getTime());
  
  return (
    <Layout.Container spacing={'py-28'}>
      <Header status={status} profile={nasabah?.image} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">

        <div>
          <div className="flex gap-2 items-center pb-2 border-b-2">
            <Icon icon={FiUser}/>
            <h5>Profil Nasabah</h5>
          </div>

          <div className="*:py-0 space-y-2.5 pt-4">
            {status === 'success' ? (
            <>
                <p>Nama : {nasabah.name}</p>
                <p>NISN : {nasabah.nisn}</p>
                <p>Jenis Kelamin : {nasabah.gender}</p>
                <p>Kelas : {nasabah.class} {nasabah.major}</p>
                <p>Email : {nasabah.email}</p>
                <p>No Telepon : {nasabah.phone}</p>
                <p>Saldo : <Chip color="primary">{formatCurrency(nasabah.balance as number)}</Chip></p>
                <p>Nasabah Dibuat : {formatDate(nasabah.created_at).slice(0, 15)}</p>
                <p>Alamat : {nasabah.address}</p>
            </>
            ): status === 'pending' ? Loader.Text(): 'Terjadi Kesalahan'}
          </div>
        </div>

        <div>
          <div className="flex gap-2 items-center pb-2 border-b-2">
            <Icon icon={TbListDetails}/>
            <h5>Transaksi Terakhir</h5>
          </div>
          
          <div className="space-y-4 pt-4">
            {statusTransaction === 'success' ? (filteredTransactions.length > 0 ? (
                filteredTransactions.slice(0, 5).map((item) => (
                  <div key={item.id} className={clsx('p-2.5 rounded-xl dark:*:text-white flex items-center gap-4 hover:scale-95 duration-500', item.type === 'deposit' ? 'bg-success-500/25' : 'bg-danger-500/25')}>
                    <div className={clsx('w-max p-1.5 rounded-xl text-white', item.type === 'deposit' ? 'bg-success' : 'bg-danger')}>
                      <Icon icon={item.type === 'deposit' ? IoMdTrendingUp : IoMdTrendingDown} size="md" />
                    </div>
          
                    <div>
                      <h6>{formatCurrency(Number(item.amount))}</h6>
                      <small>{formatDate(item.created_at)}</small>
                    </div>
                  </div>
                ))
              ) : <p>Tidak ada transaksi.</p>
            ) : statusTransaction === 'pending' ? <Loader.Fragment /> : <p>Terjadi Kesalahan</p>}
          </div>
        </div>

      </div>
    </Layout.Container>
  );
}

const Header = ({status, profile}: {status: 'pending' | 'error' | 'success', profile?: string}) => {
  return (
    <div className="relative z-50">
      <Image src='https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg?t=st=1734002973~exp=1734006573~hmac=00d362a43714f5114bf303841ac3c3834b4f4f13a11d4d25547cf537ebbb2794&w=1060' alt="image" loading="lazy" isZoomed isLoading={status === 'pending'}  className="w-screen h-56 object-cover brightness-75 dark:brightness-50 rounded-xl" />
      {status === 'success' ? <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <Image src={profile} alt="image" className="rounded-full h-28 w-28 bg-slate-500 border-8 dark:border-dark border-white"/>
      </div>: null}
    </div>
  )
}
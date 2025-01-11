"use client";

import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import useGetTransaction from "@/lib/hooks/transaksi/useGetTransaction";
import Icon from "@/components/common/Icon";
import FilteredTransactions from "@/lib/utils/FilteredTransactions";
import { Layout } from "@/components/modules/import";
import { DetailNasabahLayout } from "@/components/layouts/DetailNasabahLayout";
import { TbListDetails } from "react-icons/tb";

export default function DetailNasabah({ params }: { params: { id: string } }) {
  const { data: nasabah, status } = useGetNasabah(params.id);
  const { data: transactions, status: statusTransaction } = useGetTransaction();

  return (
    <Layout.Container spacing={"py-28"}>
      <DetailNasabahLayout
        header={{ profile: nasabah?.image, status: status }}
        nasabah={nasabah}
      >
        <div>
          <div className="flex gap-2 items-center pb-2 border-b-2">
            <Icon icon={TbListDetails} />
            <h5>Transaksi Terakhir</h5>
          </div>

          <div className="space-y-4 pt-4">
            {FilteredTransactions({ transactions, params, statusTransaction })}
          </div>
        </div>
      </DetailNasabahLayout>
    </Layout.Container>
  );
}

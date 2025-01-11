import { Chip, Image } from "@nextui-org/react";
import { FiUser } from "react-icons/fi";
import { RowCostumersProps } from "@/lib/types/Types";
import { Loader } from "./Loader";
import formatCurrency from "@/lib/utils/Total";
import Icon from "../common/Icon";
import formatDateWithRelative from "@/lib/utils/FormatDateRelative";

interface DetailNasabahProps {
  children: React.ReactNode
  header: {
    profile: string;
    status: "pending" | "error" | "success";
    banner?: string
  };
  nasabah: RowCostumersProps
}

export const DetailNasabahLayout = ({header: { profile, status, banner }, nasabah, children}: DetailNasabahProps) => {
  return (
    <>
      <div className="relative z-50">
        <Image
          src={banner ?? "https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg?t=st=1734002973~exp=1734006573~hmac=00d362a43714f5114bf303841ac3c3834b4f4f13a11d4d25547cf537ebbb2794&w=1060"}
          alt="image"
          loading="lazy"
          isLoading={status === "pending"}
          className="w-screen h-56 object-cover brightness-75 dark:brightness-50 rounded-xl"
          isZoomed
        />
        {status === "success" && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <Image src={profile} alt="image" className="rounded-full h-28 w-28 bg-slate-500 border-8 dark:border-dark border-white"/>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        <div>
          <div className="flex gap-2 items-center pb-2 border-b-2">
            <Icon icon={FiUser} />
            <h5>Profil Nasabah</h5>
          </div>

          <div className="*:py-0 space-y-2.5 pt-4">
            {status === "success" ? (
              <>
                <p>Nama : {nasabah.name}</p>
                <p>NISN : {nasabah.nisn}</p>
                <p>Jenis Kelamin : {nasabah.gender}</p>
                <p>Kelas : {nasabah.class} {nasabah.major}</p>
                <p>Email : {nasabah.email}</p>
                <p>No Telepon : {nasabah.phone}</p>
                <p>Saldo :{" "}
                  <Chip color="primary">
                    {formatCurrency(nasabah.balance as number)}
                  </Chip>
                </p>
                <p>Nasabah Dibuat : {formatDateWithRelative(nasabah.created_at)}</p>
                <p>Alamat : {nasabah.address}</p>
              </>
            ) : status === "pending" ? Loader.Text() : <p>Terjadi Kesalahan</p>}
          </div>
        </div>

        {children}
      </div>
    </>
  );
};
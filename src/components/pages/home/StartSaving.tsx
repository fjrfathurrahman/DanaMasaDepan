import { Layout } from "@/components/modules/import"
import { Resource } from "@/lib/resource"
import { Button } from "@nextui-org/react"
import Image from "next/image"

export const StartSaving = () => {
  return (
    <Layout.Container>
      <Image src={Resource.dImage.ROCKET} alt="image" height={450} quality={100} className="mx-auto" />
      <div className="text-center md:w-2/3 mx-auto space-y-4">
        <h1 className="font-bold">Mulai Menabung <br /> Sekarang!</h1>
        <p>Masa depan dimulai hari ini! Mulailah menabung sekarang dan wujudkan impian Anda dengan layanan tabungan kami yang fleksibel dan menguntungkan.</p>
        <Button color="primary" variant="solid" size="lg" className="font-semibold sm:mr-4">Daftar Sekarang</Button>
        <Button color="primary" variant="bordered" size="lg" className="font-semibold">Hubungi Admin</Button>
      </div>
    </Layout.Container>
  )
}

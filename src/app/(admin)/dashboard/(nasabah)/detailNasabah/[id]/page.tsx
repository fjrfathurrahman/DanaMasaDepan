"use client";

import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";
import { Image } from "@nextui-org/react";

export default function DetailNasabah({ params }: { params: { id: string } }) {
  const { data } = useGetNasabah(params.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
      <Image src="https://dummyimage.com/600x400/000/fff" alt="Nasabah" className="object-cover rounded-3xl w-full" height={400} />

      <div>
        <h3 className="line-clamp-2 pb-4 border-b">{data?.name?? '-'}</h3>
        
        <div className="py-4 space-4">

          <div>
            <span>NISN:</span>
            <p>{data?.nisn}</p>
          </div>
          
          <div>
            <span>Jenis Kelamin:</span>
            <p>{data?.gender}</p>
          </div>
          
          <div>
            <span>Jurusan:</span>
            <p>{data?.major}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

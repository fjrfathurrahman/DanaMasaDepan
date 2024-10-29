'use client'

import useGetNasabah from "@/lib/hooks/nasabah/useGetNasabah";

export default function DetailNasabah({ params }: { params: { id: string } }) {
  const { data, status } = useGetNasabah(params.id);

  return (
    <div>
      {status === "error" && <p>Terjadi kesalahan</p>}
      {status === "pending" && <p>Loading...</p>}
      <h4>Detail Nasabah {params.id}</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores consequatur nulla repudiandae natus, iste laborum tenetur, voluptate velit nobis qui sit tempora, blanditiis nam eaque illum voluptas iusto perferendis. Voluptate.</p>
      balance: {data?.balance}
    </div>
  );
}
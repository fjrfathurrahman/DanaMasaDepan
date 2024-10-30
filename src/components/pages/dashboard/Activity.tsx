import { PiListStarBold } from "react-icons/pi";

const Activity = () => {
  return (
    <div className="space-y-4 pb-8 mb-8 border-b">
      <div className="flex gap-2 items-center">
        <PiListStarBold size={20} />
        <h6>Aktifitas Terbaru</h6>
      </div>

      <div className="py-12 text-center border-2 border-dashed rounded-xl border-gray-500">
        <p className="w-2/3 text-small mx-auto">
          Fitur Admin saat ini tidak tersedia. Anda dapat menghubungi tim dukungan kami
          untuk pertanyaan lebih lanjut.
        </p>
      </div>
    </div>
  );
};

export default Activity;

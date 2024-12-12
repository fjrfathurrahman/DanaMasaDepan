import { TailwindSpacing } from "@/lib/types/TypeTailwind"
import { IconType } from "react-icons"

export const FeatureUnavailable = ({HeaderText, Icon, BodyText, TailwindSpacing = 'py-12'}: {HeaderText: string, Icon: IconType, BodyText?: string, TailwindSpacing?: TailwindSpacing}) => {
  return (
    <div className="space-y-4 pb-8 mb-8 border-b">
      <div className="flex gap-2 items-center">
        <Icon size={20} />
        <h6>{HeaderText}</h6>
      </div>

      <div className={`${TailwindSpacing} text-center border-2 border-dashed rounded-xl border-gray-500`}>
        <p className="w-2/3 text-small mx-auto">
          {BodyText ?? "Fitur ini belum tersedia. Anda dapat menghubungi tim dukungan kami untuk pertanyaan lebih lanjut."}
        </p>
      </div>
    </div>
  )
}

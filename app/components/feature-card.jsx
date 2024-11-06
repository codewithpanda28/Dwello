import { Icon, LucideIcon } from "lucide-react"


export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-[#F3E9E3] rounded-lg p-6 space-y-4">
      <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#2D2D2D]" />
      </div>
      <h3 className="text-xl font-semibold text-[#2D2D2D]">{title}</h3>
      <p className="text-[#4D4D4D]">{description}</p>
    </div>
  )
}
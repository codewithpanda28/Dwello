import { MapPin, UserCheck, ClipboardList, Headphones } from "lucide-react"
import FeatureCard from "./feature-card"

export default function WhyChooseUs() {
  const features = [
    {
      icon: MapPin,
      title: "Expert Guidance",
      description: "Benefit from our team's seasoned expertise for a smooth buying experience"
    },
    {
      icon: UserCheck,
      title: "Personalized Service",
      description: "Our services adapt to your unique needs, making your journey stress-free"
    },
    {
      icon: ClipboardList,
      title: "Transparent Process",
      description: "Stay informed with our clear and honest approach to buying your home"
    },
    {
      icon: Headphones,
      title: "Exceptional Support",
      description: "Providing peace of mind with our responsive and attentive customer service"
    }
  ]

  return (
    <section className="py-16 px-4 container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">
          Why Choose Us
        </h2>
        <p className="text-[#4D4D4D]">
          Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}
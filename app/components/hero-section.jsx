import Image from "next/image"
import StatsCard from "./statscard"

export default function HeroSection() {
  return (
    <section className="py-16 px-4 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="./home2.svg"
            height={500}
            width={600}
            alt="Luxury modern home"
 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
            We Help You To Find Your Dream Home
          </h1>
          
          <p className="text-lg text-[#4D4D4D]">
            From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality
          </p>
          
          <div className="grid grid-cols-3 gap-8">
            <StatsCard number="8K+" label="Houses Available" />
            <StatsCard number="6K+" label="Houses Sold" />
            <StatsCard number="2K+" label="Trusted Agents" />
          </div>
        </div>
      </div>
    </section>
  )
}
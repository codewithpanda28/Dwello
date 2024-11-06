import Image from "next/image"
import { Button } from "@/components/ui/button"
import SearchBar from "./search-bar"

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#FDF8F5] pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] leading-tight">
              Find Your
              <br />
              Dream Home
            </h1>
            <p className="text-lg text-[#4D4D4D] max-w-md">
              Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
            </p>
            <Button className="bg-[#2D2D2D] text-white hover:bg-[#4D4D4D] px-8 py-6 text-lg">
              Sign up
            </Button>
          </div>
          
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/home1.svg"
              width={600}
              height={500}
              alt="Modern luxury house"
          
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
        
        <div className="relative -mt-8 z-10 pb-12">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}
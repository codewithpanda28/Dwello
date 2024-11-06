import Image from "next/image"
import { MapPin, Bed, Square } from "lucide-react"
import { Button } from "@/components/ui/button"

const PropertyCard = ({ image, location, rooms, sqft, price }) => {
  return (
    <div className="bg-[#F3E9E3] rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-[240px]">
        <Image
          src={image}
          alt={location}
        fill    
          className="object-cover"
        />
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2 text-[#2D2D2D]">
          <MapPin className="h-4 w-4" />
          <span className="font-medium">{location}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Bed className="h-4 w-4 text-[#2D2D2D]" />
              <span>{rooms} Rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Square className="h-4 w-4 text-[#2D2D2D]" />
              <span>{sqft} sq ft</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <Button variant="default" className="bg-[#2D2D2D] hover:bg-[#4D4D4D] text-white">
            Sign up
          </Button>
          <span className="text-xl font-bold text-[#2D2D2D]">
            ${price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SearchBar() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-[#F3E9E3] rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ny">New York</SelectItem>
            <SelectItem value="la">Los Angeles</SelectItem>
            <SelectItem value="ch">Chicago</SelectItem>
          </SelectContent>
        </Select>
        
        <Select>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
          </SelectContent>
        </Select>
        
        <Select>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="100k-300k">$100k - $300k</SelectItem>
            <SelectItem value="300k-500k">$300k - $500k</SelectItem>
            <SelectItem value="500k-1m">$500k - $1M</SelectItem>
          </SelectContent>
        </Select>
        
        <Button className="bg-[#2D2D2D] text-white hover:bg-[#4D4D4D] w-full">
          Sign up
        </Button>
      </div>
    </div>
  )
}
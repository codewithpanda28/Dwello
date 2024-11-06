'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, User, Search, LogOut, Star, Package, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])

  // Mock data for demonstration
  const mockProducts = [
    { id: 1, name: "Modern Sofa", price: "$599" },
    { id: 2, name: "Dining Table", price: "$399" },
    { id: 3, name: "Bed Frame", price: "$699" },
  ]

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setSearchResults([])
      return
    }
    
    // Filter products based on search query
    const filtered = mockProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(filtered)
  }

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo placeholder */}
          <div className="font-bold text-3xl items-center justify-center">
       Dwello
          </div>

          {/* Search bar with results */}
          <div className="relative flex-1 max-w-md">
            <div className="relative">
              <Input
                type="search"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-4 w-full"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            {/* Search results dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="p-3 hover:bg-gray-50 cursor-pointer flex justify-between"
                  >
                    <span>{product.name}</span>
                    <span className="text-gray-600">{product.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Profile dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gradient-to-b from-gray-800 to-purple-700">
                <DropdownMenuItem className="text-white cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Manage My Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white cursor-pointer">
                  <Package className="mr-2 h-4 w-4" />
                  <span>My Order</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white cursor-pointer">
                  <X className="mr-2 h-4 w-4" />
                  <span>My Cancellations</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white cursor-pointer">
                  <Star className="mr-2 h-4 w-4" />
                  <span>My Reviews</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
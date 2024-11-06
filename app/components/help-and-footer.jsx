'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, HelpCircle, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="bg-[#FDF6F4]">
      {/* Help Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D1810] mb-2">
            Do You Have Any Questions?
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#2D1810] mb-8">
            Get Help From Us
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="w-6 h-6 text-[#2D1810]" />
              <span className="text-[#2D1810]">Chat live with our support team</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#2D1810]" />
              <span className="text-[#2D1810]">Browse our FAQ</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address..."
              className="bg-[#F5E6E0] border-none"
            />
            <Button className="bg-[#2D1810] text-white hover:bg-[#2D1810]/90">
              Submit
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  )
}
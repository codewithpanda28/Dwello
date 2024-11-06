'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, HelpCircle, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div>
       <footer className="bg-[#E8D5CE] px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.svg"
              alt="Dwello Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-[#2D1810] max-w-xs">
              Bringing you closer to your dream home, one click at a time.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold text-[#2D1810] mb-4">About</h4>
            <ul className="space-y-2">
              {['Our Story', 'Careers', 'Our Team', 'Resources'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#2D1810] hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-[#2D1810] mb-4">Support</h4>
            <ul className="space-y-2">
              {['FAQ', 'Contact Us', 'Help Center', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#2D1810] hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us Links */}
          <div>
            <h4 className="font-semibold text-[#2D1810] mb-4">Find Us</h4>
            <ul className="space-y-2">
              {['Events', 'Locations', 'Newsletter'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#2D1810] hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-[#2D1810] mb-4">Our Social</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-[#2D1810] hover:underline flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#2D1810] hover:underline flex items-center gap-2">
                  <Facebook className="w-4 h-4" /> Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#2D1810] hover:underline flex items-center gap-2">
                  <Twitter className="w-4 h-4" /> Twitter (X)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

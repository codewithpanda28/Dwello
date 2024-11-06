'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Sarah Nguyen",
      location: "San Francisco",
      rating: 5.0,
      image: "/testi1.svg",
      profileImage: "/placeholder.svg?height=48&width=48",
      text: "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."
    },
    {
      name: "Michael Rodriguez",
      location: "San Diego",
      rating: 4.5,
      image: "/testi2.svg",
      profileImage: "/placeholder.svg?height=48&width=48",
      text: "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!"
    },
    {
      name: "Emily Johnson",
      location: "Los Angeles",
      rating: 5.0,
      image: "/testi3.svg",
      profileImage: "/placeholder.svg?height=48&width=48",
      text: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="px-4 py-12 bg-[#FDF6F4]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D1810] mb-12">
          What People Say
          <br />
          About Dwello
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden bg-[#F5E6E0]">
                    <div className="relative h-64 w-full">
                      <Image
                        src={testimonial.image}
                        alt="Interior space"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.profileImage}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#2D1810]">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                        <div className="ml-auto flex items-center">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="ml-1 font-medium">{testimonial.rating}</span>
                        </div>
                      </div>
                      <p className="text-[#2D1810]">{testimonial.text}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-[#2D1810] text-white hover:bg-[#2D1810]/90"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-[#2D1810] text-white hover:bg-[#2D1810]/90"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
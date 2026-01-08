"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  company: string
  title: string
  person: string
  role: string
  quote: string
  metric: string
  metricLabel: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    company: "Cosmed",
    title: "See how Overcast helped this Medical Manufacturing Company cut MTTR in half",
    person: "Engineering Team",
    role: "Cosmed",
    quote:
      "We had a few tracing issues...we solved 7 different issues but couldn't find the last one for days...with Overcast we were able to find it and fix it in less then 30 mins",
    metric: "50%",
    metricLabel: "MTTR REDUCTION",
    image: "/images/cosmed-athlete-training.png",
  },
  {
    company: "Playgent AI",
    title: "This YC backed company used Overcast to manage downtime during their initial launch",
    person: "Development Team",
    role: "Playgent AI",
    quote:
      "...to be honest, yeah, and it's super useful for keeping things online otherwise we had to keep pulling the site down and fix it in dev but Overcast really saves the time with finding and fixing...",
    metric: "99.9%",
    metricLabel: "UPTIME",
    image: "/images/playgent-cityscape.png",
  },
  {
    company: "Bedrock AI",
    title: "Impliments Overcast for post prod. on their growing rental property management platform",
    person: "Operations Team",
    role: "Bedrock AI",
    quote:
      "yeah, like lately we've been ramping up our GTM...so we've had doubled traffic to the app but since we don't use any op management software we had a hard time before Overcast",
    metric: "2x",
    metricLabel: "TRAFFIC GROWTH",
    image: "/images/bedrock-buildings-new.jpeg",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = testimonials[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 15000) // 15 seconds

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="min-h-screen bg-black py-8 sm:py-12 px-0">
      <div className="max-w-full">
        {/* Header */}
        <div className="mb-8 sm:mb-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light leading-tight text-balance text-white">
            See how enterprises scaled
            <br />
            reliably with Overcast
          </h1>
        </div>

        {/* Testimonial Card */}
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800">
            <div className="flex flex-col lg:flex-row">
              {/* Left: Image Section with gradient overlay */}
              <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-900 overflow-hidden flex items-center justify-center">
                <img
                  src={current.image || "/placeholder.svg"}
                  alt="Customer"
                  className={`w-full h-full object-cover ${
                    current.company === "Cosmed" ? "object-top" : "object-center"
                  }`}
                />
                {/* Grey gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/70 via-gray-600/75 to-gray-700/80 mix-blend-multiply"></div>

                {/* Metric Overlay */}
                <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12">
                  <p className="text-white text-[10px] sm:text-xs font-medium mb-1 tracking-wider opacity-90">
                    {current.metricLabel}
                  </p>
                  <p className="text-white text-5xl sm:text-7xl lg:text-8xl font-light">{current.metric}</p>
                </div>
              </div>

              {/* Right: Content Section */}
              <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-black">
                <div>
                  {/* Logo */}
                  <div className="mb-4 sm:mb-8">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{current.company}</p>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-normal mb-6 sm:mb-10 leading-snug text-balance text-white">
                    {current.title}
                  </h2>
                </div>

                {/* Quote Section */}
                <div className="flex-1 flex flex-col justify-end">
                  {/* Author Information */}
                  <div className="mb-4">
                    <p className="text-white text-base sm:text-lg font-medium">{current.person}</p>
                    <p className="text-gray-400 text-sm sm:text-base">{current.role}</p>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-white text-lg sm:text-2xl lg:text-3xl leading-relaxed font-light">
                    "{current.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
            <button
              onClick={prevSlide}
              className="p-1.5 sm:p-2 rounded-full hover:bg-gray-900 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            </button>

            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-6 sm:w-8" : "bg-gray-700 w-1.5 sm:w-2 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-1.5 sm:p-2 rounded-full hover:bg-gray-900 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

export function LogoCarousel() {
  const logos = [
    { name: "Company 1", src: "/images/logo-1.png" },
    { name: "Pima Pharma", src: "/images/logo-2.png" },
    { name: "PolicyCortex", src: "/images/logo-3.png" },
    { name: "Bedrock", src: "/images/bedrock-pentagon.png" },
    { name: "Company 6", src: "/images/logo-6.png" },
    { name: "Playgent", src: "/images/playgent-logo.png" },
  ]

  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div key={`scroll-1-${index}`} className="flex-shrink-0 px-12 md:px-16">
              <div className="flex items-center justify-center h-20 md:h-24">
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-12 md:h-16 w-auto max-w-[180px] object-contain opacity-40 hover:opacity-60 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex animate-scroll" aria-hidden="true">
          {duplicatedLogos.map((logo, index) => (
            <div key={`scroll-2-${index}`} className="flex-shrink-0 px-12 md:px-16">
              <div className="flex items-center justify-center h-20 md:h-24">
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-12 md:h-16 w-auto max-w-[180px] object-contain opacity-40 hover:opacity-60 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

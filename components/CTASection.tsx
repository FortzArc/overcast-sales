import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-12 md:py-24 font-[family-name:var(--font-poppins)]">
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-0">
        <div className="bg-gradient-to-br from-[#1c87ec] via-[#6ec5eb] via-[#007cca] to-[#c5e3ff] p-8 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center">
          {/* Better Uptimes - Bottom Left */}
          <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-8 md:left-12 lg:left-16">
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-none text-white">
              Better
            </h2>
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-none text-white">
              Uptimes
            </h2>
          </div>

          {/* Faster Response - Top Right */}
          <div className="absolute top-8 md:top-12 lg:top-16 right-8 md:right-12 lg:right-16">
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-none text-white text-right">
              Faster
            </h2>
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-none text-white text-right">
              Response
            </h2>
          </div>

          {/* Bottom Right Content */}
          <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 right-8 md:right-12 lg:right-16 max-w-md lg:max-w-lg xl:max-w-xl">
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6 text-right">
              Solve complex post prod issues with total clarity, speed, and confidence.
            </p>
            
            <div className="flex justify-end">
              <Link 
                href="https://platform.overcastsre.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white text-xl md:text-2xl lg:text-3xl font-light border-2 md:border-4 border-white px-6 md:px-8 lg:px-10 py-3 md:py-4 hover:bg-white hover:text-black transition-colors"
              >
                SIGN UP
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


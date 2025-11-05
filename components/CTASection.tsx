import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedElement } from "@/components/AnimatedElement"

export function CTASection() {
  return (
    <section className="py-12 md:py-24 font-[family-name:var(--font-poppins)]">
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-0">
        <div className="bg-gradient-to-br from-[#1c87ec] via-[#6ec5eb] via-[#007cca] to-[#c5e3ff] p-8 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden">
          
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col gap-8 md:hidden">
            <AnimatedElement animation="fade-in-up" delay={0}>
              <h2 className="text-4xl font-light leading-tight text-white">
                Faster<br />Response
              </h2>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in-up" delay={200}>
              <h2 className="text-4xl font-light leading-tight text-white">
                Better<br />Uptimes
              </h2>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in-up" delay={400}>
              <div>
                <p className="text-white text-base leading-relaxed mb-4">
                  Solve complex post prod issues with total clarity, speed, and confidence.
                </p>
                
                <Link 
                  href="https://platform.overcastsre.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white text-lg font-light border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
                >
                  SIGN UP
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedElement>
          </div>

          {/* Desktop Layout - Absolute Positioning */}
          <div className="hidden md:block min-h-[500px] lg:min-h-[600px]">
            {/* Better Uptimes - Bottom Left */}
            <AnimatedElement animation="fade-in-left" className="absolute bottom-12 lg:bottom-16 left-12 lg:left-16">
              <h2 className="text-7xl lg:text-8xl xl:text-9xl font-light leading-none text-white">
                Better
              </h2>
              <h2 className="text-7xl lg:text-8xl xl:text-9xl font-light leading-none text-white">
                Uptimes
              </h2>
            </AnimatedElement>

            {/* Faster Response - Top Right */}
            <AnimatedElement animation="fade-in-right" className="absolute top-12 lg:top-16 right-12 lg:right-16">
              <h2 className="text-7xl lg:text-8xl xl:text-9xl font-light leading-none text-white text-right">
                Faster
              </h2>
              <h2 className="text-7xl lg:text-8xl xl:text-9xl font-light leading-none text-white text-right">
                Response
              </h2>
            </AnimatedElement>

            {/* Bottom Right Content */}
            <AnimatedElement animation="fade-in-up" delay={200} className="absolute bottom-12 lg:bottom-16 right-12 lg:right-16 max-w-md lg:max-w-lg xl:max-w-xl">
              <p className="text-white text-xl lg:text-2xl leading-relaxed mb-6 text-right">
                Solve complex post prod issues with total clarity, speed, and confidence.
              </p>
              
              <div className="flex justify-end">
                <Link 
                  href="https://platform.overcastsre.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white text-2xl lg:text-3xl font-light border-4 border-white px-8 lg:px-10 py-4 hover:bg-white hover:text-black transition-colors"
                >
                  SIGN UP
                  <ArrowUpRight className="w-8 h-8 lg:w-10 lg:h-10" />
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
}


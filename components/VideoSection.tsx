"use client"

import { AnimatedElement } from "./AnimatedElement"

interface VideoSectionProps {
  videoSrc: string
  title?: string
  description?: string
  className?: string
}

export function VideoSection({ 
  videoSrc, 
  title, 
  description, 
  className = "" 
}: VideoSectionProps) {
  return (
    <section className={`py-12 md:py-24 font-[family-name:var(--font-poppins)] ${className}`}>
      <div className="max-w-[1400px] w-full mx-auto px-4">
        {title && (
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 md:mb-16 text-center">
              {title}
            </h2>
          </AnimatedElement>
        )}
        
        {description && (
          <AnimatedElement animation="fade-in-up" delay={200}>
            <p className="text-lg md:text-xl lg:text-2xl text-center mb-8 md:mb-16 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </AnimatedElement>
        )}

        <AnimatedElement animation="scale-in" delay={400}>
          <div className="relative max-w-5xl mx-auto">
            {/* Video container with border styling to match site design */}
            <div className="border-2 border-white bg-black overflow-hidden">
              <video
                className="w-full h-auto"
                controls
                preload="metadata"
                poster="/placeholder.jpg" // You can replace this with a custom poster image
                playsInline
              >
                {/* Try the original file first with proper MIME type detection */}
                {videoSrc.endsWith('.mp4') && (
                  <source src={videoSrc} type="video/mp4" />
                )}
                {videoSrc.endsWith('.mov') && (
                  <>
                    <source src={videoSrc} type="video/quicktime" />
                    <source src={videoSrc} type="video/mp4" />
                  </>
                )}
                {videoSrc.endsWith('.webm') && (
                  <source src={videoSrc} type="video/webm" />
                )}
                
                {/* Fallback message with more helpful information */}
                <div className="p-8 text-center text-white bg-gray-800">
                  <p className="mb-4">Your browser doesn't support this video format.</p>
                  <p className="text-sm text-gray-300">
                    Try opening this page in Safari, Chrome, or Edge for the best video experience.
                  </p>
                  <a 
                    href={videoSrc} 
                    className="inline-block mt-4 px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors"
                    download
                  >
                    Download Video
                  </a>
                </div>
              </video>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface CommunityPost {
  author: string
  handle: string
  role: string
  avatar: string
  content: string
}

const communityPosts: CommunityPost[] = [
  {
    author: "Alex Rivera",
    handle: "@alexrivera",
    role: "",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Overcast has completely transformed how we handle incidents. The AI detection is incredibly accurate and fast!",
  },
  {
    author: "Sam Chen",
    handle: "@samchen_dev",
    role: "",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "This platform is a game changer. The observability insights we get are exactly what we needed for our growing infrastructure.",
  },
  {
    author: "Jordan Blake",
    handle: "@jordanblake",
    role: "",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Switched to Overcast last month and our MTTR dropped significantly. The distributed tracing is next level.",
  },
  {
    author: "Taylor Morgan",
    handle: "@taylormorgan",
    role: "",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "The setup was incredibly smooth. Within 30 minutes we had full visibility into our entire stack. Highly recommend!",
  },
  {
    author: "Casey Wu",
    handle: "@caseywu",
    role: "",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Been using Overcast for a few weeks now. The real-time alerts and root cause analysis have saved us countless hours.",
  },
  {
    author: "Riley Parker",
    handle: "@rileyparker_",
    role: "",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Finally an observability tool that actually understands our needs. The AI-powered insights are spot on every time.",
  },
]

export function CommunityCarousel() {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            let currentCount = 0
            const target = 100
            const duration = 2000 // 2 seconds
            const increment = target / (duration / 16) // 60fps

            const timer = setInterval(() => {
              currentCount += increment
              if (currentCount >= target) {
                setCount(target)
                clearInterval(timer)
              } else {
                setCount(Math.floor(currentCount))
              }
            }, 16)

            return () => clearInterval(timer)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  // Duplicate posts for seamless infinite scroll
  const duplicatedPosts = [...communityPosts, ...communityPosts, ...communityPosts]

  return (
    <div ref={sectionRef} className="bg-black text-white py-8 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8 sm:mb-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-white">Join Our Developer Community</h2>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/Overcastsre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-colors bg-white/5 hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-label="X (Twitter)">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-xs font-light">Follow on X</span>
              </a>
              <a
                href="https://discord.gg/U8ZYN7bwHW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-colors bg-white/5 hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-label="Discord">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.076.076 0 0 0 .084.028a14.09 14.09 0 0 0 1.226-1.994a.077.077 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span className="text-xs font-light">Join Discord</span>
              </a>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-5xl sm:text-7xl md:text-8xl font-light text-white">{count.toLocaleString()}+</p>
            <p className="text-white/80 text-base sm:text-lg md:text-xl mt-2 font-light leading-relaxed">
              Active Developers + Tried & Tested by Engineers @
            </p>
            <div className="flex items-center justify-start sm:justify-end gap-3 sm:gap-4 mt-3">
              <Image
                src="/images/microsoft-logo.png"
                alt="Microsoft"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
              <Image
                src="/images/meta-logo.png"
                alt="Meta"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div className="relative flex">
            <div className="flex animate-scroll gap-4 sm:gap-6">
              {duplicatedPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] sm:w-[400px] bg-[#05020f] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#252336]"
                >
                  <div className="flex flex-col gap-1 mb-3 sm:mb-4">
                    <p className="font-light text-white text-sm sm:text-base">{post.author}</p>
                    <p className="text-xs sm:text-sm text-slate-400">{post.handle}</p>
                  </div>
                  <p className="text-white/90 font-light leading-relaxed text-sm sm:text-base">{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

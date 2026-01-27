"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export const Navigation = () => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { href: "/solutions", label: "Solutions" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div className="absolute top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo - Left side */}
        <Link href="/" className="flex items-center gap-1.5">
          <img src="/images/overcast-header-logo.png" alt="Overcast logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="text-base sm:text-lg text-white font-medium">Overcast</span>
        </Link>

        {/* Menu - Right side */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === link.href ? "text-white" : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" asChild>
            <a href="https://platform.overcastsre.com/login" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 py-4 px-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="w-full" asChild>
              <a href="https://platform.overcastsre.com/login" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

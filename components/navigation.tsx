"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export const Navigation = () => {
  const pathname = usePathname()

  const links = [
    { href: "/solutions", label: "Solutions" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-inset">
      <div className="flex items-center justify-between backdrop-blur-xl bg-background/30 border-2 border-border/50 rounded-full px-6 py-3 shadow-lg">
        <Link href="/" className="font-serif text-2xl italic text-foreground hover:opacity-80 transition-opacity">
          Overcast
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href ? "text-foreground" : "text-foreground/60",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" shine asChild>
            <a href="https://platform.overcastsre.com" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { cn } from "@/lib/utils"
import { V0Provider } from "@/lib/context"
// import dynamic from "next/dynamic"
// const V0Setup = dynamic(() => import("@/components/v0-setup"))

const poppinsLight = localFont({
  src: "../public/fonts/Poppins-Light.ttf",
  variable: "--font-poppins-light",
  weight: "300 700", // Light (300) and Bold (700) weights
})

const poppinsMedium = localFont({
  src: "../public/fonts/Poppins-Medium.ttf",
  variable: "--font-poppins-medium",
})

const isV0 = process.env["VERCEL_URL"]?.includes("vusercontent.net") ?? false

export const metadata: Metadata = {
  title: {
    template: "%s | Overcast",
    default: "Overcast - Your AI Operations Engineer",
  },
  description:
    "Transform incident response from reactive firefighting into proactive, AI-powered operations engineering. Solve complex post prod issues with total clarity, speed, and confidence.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(poppinsLight.variable, poppinsMedium.variable, "font-light antialiased")}>
        <V0Provider isV0={isV0}>
          {children}
          {/* {isV0 && <V0Setup />} */}
        </V0Provider>
      </body>
    </html>
  )
}

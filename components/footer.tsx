import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16 px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 lg:gap-24">
          {/* Logo and Compliance Section */}
          <div className="flex flex-col gap-6">
            <Image src="/images/image.png" alt="Overcast" width={48} height={48} className="h-12 w-12" />

            {/* Compliance Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-400/10 rounded-md px-2.5 py-1.5 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              <span className="text-emerald-400 text-xs font-medium">Compliant</span>
            </div>

            {/* Certification Badges */}
            <div className="flex gap-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700">
                <div className="text-center">
                  <p className="text-[9px] font-semibold text-white leading-tight">SOC2</p>
                  <p className="text-[7px] text-zinc-400 leading-tight">Type II</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700">
                <div className="text-center">
                  <p className="text-[9px] font-semibold text-white leading-tight">ISO</p>
                  <p className="text-[7px] text-zinc-400 leading-tight">27001</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700">
                <div className="text-center">
                  <p className="text-[9px] font-semibold text-white leading-tight">ISO</p>
                  <p className="text-[7px] text-zinc-400 leading-tight">27018</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700">
                <p className="text-[9px] font-semibold text-white">5+</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 border-l border-zinc-800 pl-8 lg:pl-12">
            {/* Resources Section */}
            <div>
              <h3 className="text-white font-medium mb-6 text-lg">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/Overcastsre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    X
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-white font-medium mb-6 text-lg">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Security & Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

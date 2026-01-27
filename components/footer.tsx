import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8 px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 lg:gap-12">
          {/* Logo and Compliance Section */}
          <div className="flex flex-col gap-3">
            <Image src="/images/overcast-header-logo.png" alt="Overcast" width={40} height={40} className="h-10 w-10" />

            {/* Certification Badge */}
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-lg bg-zinc-900 border-2 border-emerald-500/50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12L11 14L15 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-xs font-semibold text-emerald-500">HIPAA</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 border-l border-zinc-800 pl-6 lg:pl-8">
            {/* Resources Section */}
            <div>
              <h3 className="text-white font-medium mb-3 text-sm">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/Overcastsre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    X
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-white font-medium mb-3 text-sm">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Security & Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Terms of Service
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

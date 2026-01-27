import { Background } from "@/components/background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security & Compliance",
  description: "Learn about Overcast's enterprise-grade security, compliance certifications, and data protection practices.",
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="fixed inset-0 z-0">
        <img
          src="/images/image-fotor.jpeg"
          alt="Mountain landscape"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
      </div>

      <Navigation />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-8xl text-white font-light">Security & Compliance</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Enterprise-grade security built into every layer of our platform
            </p>
          </div>

          {/* Certifications */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl text-white font-light text-center">
              Our Certifications
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-6 text-center space-y-3">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-white leading-tight">SOC2</p>
                    <p className="text-xs text-white/70 leading-tight">Type II</p>
                  </div>
                </div>
                <h3 className="font-medium text-white">SOC 2 Type II</h3>
                <p className="text-sm text-white/70">
                  Audited controls for security, availability, and confidentiality
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-6 text-center space-y-3">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-white leading-tight">ISO</p>
                    <p className="text-xs text-white/70 leading-tight">27001</p>
                  </div>
                </div>
                <h3 className="font-medium text-white">ISO 27001</h3>
                <p className="text-sm text-white/70">
                  International standard for information security management
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-6 text-center space-y-3">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-white leading-tight">ISO</p>
                    <p className="text-xs text-white/70 leading-tight">27018</p>
                  </div>
                </div>
                <h3 className="font-medium text-white">ISO 27018</h3>
                <p className="text-sm text-white/70">Cloud privacy and PII protection standards</p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-6 text-center space-y-3">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 mx-auto flex items-center justify-center">
                  <p className="text-lg font-semibold text-white">GDPR</p>
                </div>
                <h3 className="font-medium text-white">GDPR Compliant</h3>
                <p className="text-sm text-white/70">Full compliance with EU data protection regulations</p>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl text-white font-light">Security Architecture</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl text-white font-medium flex items-center gap-3">
                  <CheckIcon className="w-6 h-6" />
                  Multi-Tenant Isolation
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Complete customer isolation with row-level security ensures your data stays yours. Every tenant
                  operates in a logically isolated environment with dedicated encryption keys.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl text-white font-medium flex items-center gap-3">
                  <CheckIcon className="w-6 h-6" />
                  Encryption Everywhere
                </h3>
                <p className="text-white/80 leading-relaxed">
                  All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Encryption keys
                  are managed using industry-standard HSMs and rotated regularly.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl text-white font-medium flex items-center gap-3">
                  <CheckIcon className="w-6 h-6" />
                  Access Controls
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Role-based access control (RBAC) with granular permissions, SSO/SAML support, and multi-factor
                  authentication (MFA) for all user accounts.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl text-white font-medium flex items-center gap-3">
                  <CheckIcon className="w-6 h-6" />
                  Audit Logging
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Comprehensive audit trails for all system access and data modifications. Immutable logs stored for
                  compliance and forensic analysis.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl text-white font-medium flex items-center gap-3">
                  <CheckIcon className="w-6 h-6" />
                  Network Security
                </h3>
                <p className="text-white/80 leading-relaxed">
                  DDoS protection, Web Application Firewall (WAF), and intrusion detection systems (IDS) protect our
                  infrastructure 24/7.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl text-white font-medium flex items-center gap-3">
                  <CheckIcon className="w-6 h-6" />
                  Regular Penetration Testing
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Third-party security audits and penetration testing performed quarterly to identify and remediate
                  vulnerabilities proactively.
                </p>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12 space-y-6">
            <h2 className="text-4xl md:text-5xl text-white font-light">Data Protection</h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <div>
                <h3 className="font-medium text-lg text-white mb-2">Data Residency</h3>
                <p>
                  Choose where your data is stored with regional deployment options in US, EU, and APAC. Enterprise
                  customers can specify exact data center locations.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-white mb-2">Data Retention</h3>
                <p>
                  Configurable data retention policies based on your compliance requirements. Automated data deletion
                  after retention period expires.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-white mb-2">Data Portability</h3>
                <p>
                  Export your data at any time in standard formats. No lock-in — your data is always accessible and
                  portable.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-white mb-2">Right to Be Forgotten</h3>
                <p>
                  Complete data deletion upon request, including all backups and replicas, in compliance with GDPR and
                  other privacy regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Enterprise Compliance */}
          <div className="backdrop-blur-xl bg-white/10 border-2 border-white/10 rounded-3xl p-12 space-y-6">
            <h2 className="text-4xl md:text-5xl text-white font-light text-center">
              Enterprise Compliance
            </h2>
            <p className="text-lg text-white/80 text-center max-w-3xl mx-auto">
              Need HIPAA, FedRAMP, or other specialized compliance? Our Enterprise plan offers additional certifications
              and on-premise deployment options.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl px-6 py-3">
                <span className="font-medium text-white">HIPAA Available</span>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl px-6 py-3">
                <span className="font-medium text-white">FedRAMP In Progress</span>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl px-6 py-3">
                <span className="font-medium text-white">On-Premise Options</span>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl px-6 py-3">
                <span className="font-medium text-white">Custom BAA/DPA</span>
              </div>
            </div>
          </div>

          {/* Vulnerability Disclosure */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12 space-y-6">
            <h2 className="text-3xl text-white font-light">Responsible Disclosure</h2>
            <p className="text-white/80 leading-relaxed">
              If you discover a security vulnerability, please report it responsibly to{" "}
              <a href="mailto:security@overcastsre.com" className="text-white hover:underline">
                security@overcastsre.com
              </a>
              . We appreciate your help in keeping Overcast secure.
            </p>
            <p className="text-white/80 leading-relaxed">
              We commit to acknowledging reports within 24 hours and providing regular updates on remediation progress.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

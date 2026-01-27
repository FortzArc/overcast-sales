import { Background } from "@/components/background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Overcast's Privacy Policy - Learn how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
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
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl text-white font-light">Privacy Policy</h1>
              <p className="text-white/60 text-sm">Last Updated: January 27, 2026</p>
            </div>

            <div className="space-y-6 text-white/80 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">1. Introduction</h2>
                <p>
                  At Overcast ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when you use our AI-powered operations
                  engineering platform and services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">2. Information We Collect</h2>
                <h3 className="font-medium text-foreground">2.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (name, email address, company details)</li>
                  <li>Billing information (processed securely through third-party payment processors)</li>
                  <li>Communication data (support tickets, feedback, inquiries)</li>
                </ul>

                <h3 className="font-medium text-foreground mt-4">2.2 Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Log data (IP address, browser type, operating system)</li>
                  <li>Usage data (feature usage, performance metrics, incident data)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3 className="font-medium text-foreground mt-4">2.3 Technical and Incident Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Application logs and error reports</li>
                  <li>System metrics and performance data</li>
                  <li>Distributed tracing information</li>
                  <li>GitHub integration data (with your permission)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Perform root cause analysis and incident resolution</li>
                  <li>Send technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues and security incidents</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">4. Data Security and Isolation</h2>
                <p>
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Multi-tenant architecture with complete customer isolation</li>
                  <li>Row-level security ensuring your data stays yours</li>
                  <li>Encryption in transit and at rest</li>
                  <li>Regular security audits and compliance certifications (SOC 2 Type II, ISO 27001, ISO 27018)</li>
                  <li>HIPAA and FedRAMP compliance options for enterprise customers</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">5. Data Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share your information only in these circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (hosting,
                    analytics, customer support)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law, subpoena, or government request
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly authorize us to share specific information
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">6. Data Retention</h2>
                <p>
                  We retain your information for as long as necessary to provide our services and fulfill the purposes
                  outlined in this policy. Retention periods vary by plan:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Devs & Indies: 7-day history</li>
                  <li>Startups & SMBs: 30-day history</li>
                  <li>Enterprise: 1-year+ history (customizable)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">8. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence.
                  We ensure appropriate safeguards are in place to protect your information in accordance with this
                  Privacy Policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">9. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under 18. We do not knowingly collect personal information
                  from children.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">11. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="pl-6">
                  <p>Email: privacy@overcastsre.com</p>
                  <p>Web: https://overcastsre.com/contact</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

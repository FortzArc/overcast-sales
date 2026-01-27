import { Background } from "@/components/background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Overcast's Terms of Service - Legal agreement for using our platform and services.",
}

export default function TermsPage() {
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
              <h1 className="text-5xl md:text-7xl text-white font-light">Terms of Service</h1>
              <p className="text-white/60 text-sm">Last Updated: January 27, 2026</p>
            </div>

            <div className="space-y-6 text-white/80 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">1. Agreement to Terms</h2>
                <p>
                  By accessing or using Overcast's services ("Service"), you agree to be bound by these Terms of Service
                  ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">2. Description of Service</h2>
                <p>
                  Overcast provides an AI-powered operations engineering platform that offers incident response, root cause
                  analysis, distributed tracing, and related services to help organizations manage their production
                  systems and resolve technical issues.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">3. Account Registration</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must provide accurate, current, and complete information during registration</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You are responsible for all activities that occur under your account</li>
                  <li>You must notify us immediately of any unauthorized access or security breach</li>
                  <li>You must be at least 18 years old to use the Service</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">4. Subscription Plans and Billing</h2>
                <h3 className="font-medium text-foreground">4.1 Plans</h3>
                <p>We offer multiple subscription plans:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Devs & Indies: $8/user/month</li>
                  <li>Startups & SMBs: $50/user/month</li>
                  <li>Enterprise: Custom pricing</li>
                </ul>

                <h3 className="font-medium text-foreground mt-4">4.2 Billing</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscription fees are billed in advance on a monthly basis</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>You authorize us to charge your payment method for all fees</li>
                  <li>We may change our pricing with 30 days' notice</li>
                  <li>Failure to pay may result in service suspension or termination</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">5. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Service for any illegal purpose or in violation of any laws</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Transmit any malware, viruses, or harmful code</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                  <li>Use the Service to compete with us or build a similar product</li>
                  <li>Share your account credentials with others</li>
                  <li>Exceed rate limits or abuse the Service</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">6. Intellectual Property</h2>
                <h3 className="font-medium text-foreground">6.1 Our Property</h3>
                <p>
                  The Service, including its original content, features, and functionality, is owned by Overcast and is
                  protected by international copyright, trademark, patent, trade secret, and other intellectual property
                  laws.
                </p>

                <h3 className="font-medium text-foreground mt-4">6.2 Your Data</h3>
                <p>
                  You retain all rights to the data you submit to the Service. By using the Service, you grant us a
                  license to use, process, and analyze your data solely to provide and improve the Service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">7. Data Security and Privacy</h2>
                <p>
                  We implement industry-standard security measures including multi-tenant architecture with complete
                  customer isolation and row-level security. For details on how we collect and use your data, see our
                  Privacy Policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">8. Service Level Agreement (SLA)</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Startups & SMBs: 99.9% uptime SLA</li>
                  <li>Enterprise: 99.99% uptime SLA with 24/7 support</li>
                  <li>Devs & Indies: No SLA guarantee, community support</li>
                </ul>
                <p className="mt-2">
                  SLA credits will be provided according to the specific terms in your Enterprise agreement if applicable.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Overcast shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including lost profits, data loss, or business
                  interruption, arising from your use of or inability to use the Service.
                </p>
                <p>
                  Our total liability shall not exceed the amount you paid to us in the 12 months preceding the claim.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">10. Warranties</h2>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">11. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately, without prior notice, for any reason including
                  breach of these Terms. Upon termination, your right to use the Service will immediately cease.
                </p>
                <p>
                  You may cancel your subscription at any time through your account settings. No refunds will be provided
                  for partial months.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">12. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will provide notice of material changes by
                  posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the
                  Service after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">13. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
                  United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl text-white font-medium">14. Contact Information</h2>
                <p>If you have questions about these Terms, please contact us:</p>
                <div className="pl-6">
                  <p>Email: legal@overcastsre.com</p>
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

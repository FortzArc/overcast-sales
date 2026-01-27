"use client"

import { Background } from "@/components/background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/lib/actions"
import { useState } from "react"
import type { Metadata } from "next"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus(null)

    const result = await sendContactEmail(formData)

    if (result.success) {
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' })
      // Reset form
      const form = document.querySelector('form') as HTMLFormElement
      form?.reset()
    } else {
      setSubmitStatus({ type: 'error', message: result.error || 'Failed to send message. Please try again.' })
    }

    setIsSubmitting(false)
  }
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
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-8xl text-white font-light">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 space-y-6">
              <h2 className="font-serif text-3xl italic text-white">Send us a message</h2>
              
              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-emerald-500/20 border border-emerald-500/50' : 'bg-red-500/20 border border-red-500/50'}`}>
                  <p className={`text-sm ${submitStatus.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {submitStatus.message}
                  </p>
                </div>
              )}

              <form action={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-background/40 border-border/50 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-background/40 border-border/50 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-white">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    className="bg-background/40 border-border/50 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                    className="bg-background/40 border-border/50 backdrop-blur-sm"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-2xl text-white font-medium">Email</h3>
                <div className="space-y-2 text-white/80">
                  <p>
                    <strong>General Inquiries:</strong>
                    <br />
                    <a href="mailto:hello@overcastsre.com" className="hover:text-white transition-colors">
                      raghav@overcastsre.com
                    </a>
                  </p>
                  <p>
                    <strong>Support:</strong>
                    <br />
                    <a href="mailto:support@overcastsre.com" className="hover:text-white transition-colors">
                      support@overcastsre.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-2xl text-white font-medium">Headquarters</h3>
                <p className="text-white/80">
                  Dallas, Texas
                  <br />
                  United States
                </p>
              </div>

              {/* Social Media */}
              <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-2xl text-white font-medium">Connect With Us</h3>
                <div className="space-y-2">
                  <a
                    href="https://x.com/Overcastsre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    𝕏 (Twitter): @Overcastsre
                  </a>
                  <a
                    href="#"
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    Discord Community
                  </a>
                  <a
                    href="#"
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Contact */}
          <div className="backdrop-blur-xl bg-white/10 border-2 border-white/10 rounded-3xl p-12 text-center space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl italic text-white">Enterprise Solutions</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Looking for custom pricing, HIPAA/FedRAMP compliance, or on-premise deployment? Schedule a call with our
              enterprise team.
            </p>
            <Button size="lg" shine asChild>
              <a
                href="https://calendly.com/raghavb5120/30min?month=2026-01"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Demo
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

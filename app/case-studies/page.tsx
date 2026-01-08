import { Background } from "@/components/background"
import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real companies, real results. See how teams are transforming their incident response with Overcast.",
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Medical Devices",
      quote:
        "We had a few tracing issues...we solved 7 different issues but couldn't find the last one for days...with [overcast] we were able to find it and fix it in less then 30 mins",
      description: "See how Overcast helped this Medical Manufacturing Company cut MTTR in half with AI-powered RCA",
      industry: "Healthcare",
    },
    {
      title: "YC Backed Agent Testing",
      quote:
        "...to be honest, yeah, and it's super useful for keeping things online otherwise we had to keep pulling the site down and fix it in dev but [Overcast] really saves the time with finding and fixing...",
      description: "This YC backed-company used Overcast to manage downtime during their initial launch",
      industry: "Technology",
    },
    {
      title: "Property Management",
      quote:
        "yeah, like lately we've been ramping up our GTM...so we've had doubled traffic to the app but since we don't use any op management software we had a hard time before [Overcast]",
      description: "Implements Overcast for post prod. on their growing rental property management platform",
      industry: "Real Estate Tech",
    },
  ]

  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 p-inset -z-10">
        <div className="relative h-full w-full">
          <Background src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alt-g7Cv2QzqL3k6ey3igjNYkM32d8Fld7.mp4" placeholder="/alt-placeholder.png" />
        </div>
      </div>

      <Navigation />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="font-serif text-6xl md:text-8xl italic text-foreground">Case Studies</h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto text-pretty">
              Real companies, real results. See how teams are transforming their incident response with Overcast.
            </p>
          </div>

          {/* Case Study Cards */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-primary/20 border-2 border-border/50 rounded-3xl p-10 space-y-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-4xl italic text-foreground mb-2">{study.title}</h2>
                    <span className="inline-block px-4 py-1 rounded-full bg-background/40 border border-border/30 text-sm text-foreground/70">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <blockquote className="border-l-4 border-foreground/30 pl-6 py-2">
                  <p className="text-lg italic text-foreground/90 leading-relaxed">{study.quote}</p>
                </blockquote>

                <p className="text-foreground/80 text-lg leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="backdrop-blur-xl bg-primary/30 border-2 border-border/50 rounded-3xl p-12 text-center space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl italic text-foreground">
              Ready to transform your operations?
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Join these companies in solving complex post prod issues with total clarity, speed, and confidence.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

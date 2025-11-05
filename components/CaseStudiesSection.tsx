import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "Medical Devices",
      quote: `"We had a few tracing issues...we solved 7 different issues but couldn't find the last one for days...with [overcast] we were able to find it and fix it in less then 30 mins"`,
      description: "See how Overcast helped this Medical Manufacturing Company cut MTTR in half with AI-powered RCA"
    },
    {
      company: "YC Backed Agent Testing",
      quote: `"...to be honest, yeah, and it's super useful for keeping things online otherwise we had to keep pulling the site down and fix it in dev but [Overcast] really saves the time with finding and fixing..."`,
      description: "This YC backed-company used Overcast to manage downtime during their initial launch"
    },
    {
      company: "Property Management",
      quote: `"yeah, like lately we've been ramping up our GTM...so we've had doubled traffic to the app but since we don't use any op management software we had a hard time before [Overcast]"`,
      description: "Impliments Overcast for post prod. on their growing rental property management platform"
    }
  ]

  return (
    <section id="case-studies" className="py-12 md:py-24 font-[family-name:var(--font-poppins)]">
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-0">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-8 md:mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light">
            Case Studies
          </h2>

        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="border-4 border-white bg-black">
              {/* Quote Box with Gradient */}
              <div className="bg-gradient-to-br from-[#1c87ec] via-[#6ec5eb] via-[#007cca] to-[#c5e3ff] p-6 md:p-8">
                <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
                  {study.quote}
                </p>
              </div>
              
              {/* Company Info */}
              <div className="p-6 md:p-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                  {study.company}
                </h3>
                <p className="text-base md:text-lg lg:text-xl italic leading-relaxed">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


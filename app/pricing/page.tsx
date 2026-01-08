import { Background } from "@/components/background"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the Overcast plan that fits your team. Scale as you grow with flexible pricing for developers, startups, and enterprises.",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Devs & Indies",
      price: "$8",
      period: "/user/mo",
      description: "Plug-and-play sidecar for instant reliability",
      features: [
        "Overcast SDK — scale without infra setup",
        "Auto incident reports + recovery guidance",
        "3 agents",
        "7-day history",
        "Community support",
      ],
    },
    {
      name: "Startups & SMBs",
      price: "$50",
      period: "/user/mo",
      description: "Compliance-ready audit trails + secure logging",
      features: [
        "Advanced tracing + multi-agent RCA",
        "Automated postmortems into Jira/Confluence",
        "10 agents",
        "30-day history",
        "99.9% SLA",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Unlimited agents + custom integrations",
      features: [
        "HIPAA/FedRAMP compliance + on-prem options",
        "Predictive analytics + full observability mesh",
        "Unlimited agents",
        "1-year+ history",
        "24/7 support · 99.99% SLA",
      ],
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
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="font-serif text-6xl md:text-8xl italic text-foreground">Pricing</h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto text-pretty">
              Choose the plan that fits your team. Scale as you grow.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl border-2 rounded-3xl p-8 space-y-6 flex flex-col ${
                  plan.featured
                    ? "bg-primary/30 border-foreground/30 ring-2 ring-foreground/20"
                    : "bg-primary/20 border-border/50"
                }`}
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl italic text-foreground">{plan.name}</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-foreground/60">{plan.period}</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.featured ? "default" : "outline"} shine={plan.featured}>
                  {plan.price === "Custom" ? "Talk to us" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="backdrop-blur-xl bg-primary/30 border-2 border-border/50 rounded-3xl p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-6xl italic text-foreground">Faster Response</h2>
              <h2 className="font-serif text-5xl md:text-6xl italic text-foreground">Better Uptimes</h2>
            </div>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Solve complex post prod issues with total clarity, speed, and confidence.
            </p>
            <Button size="lg" shine>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

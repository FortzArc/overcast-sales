import { Background } from "@/components/background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation",
  description: "Get started with Overcast - API documentation, guides, and technical resources.",
}

export default function DocsPage() {
  const quickStartSteps = [
    {
      title: "1. Create an Account",
      description: "Sign up for Overcast and choose the plan that fits your team size and needs.",
    },
    {
      title: "2. Install the SDK",
      description: "Add Overcast to your project with a single command: npm install @overcast/sdk",
    },
    {
      title: "3. Configure Agents",
      description: "Set up monitoring agents for your services and infrastructure.",
    },
    {
      title: "4. Start Monitoring",
      description: "Let Overcast automatically detect and analyze incidents in real-time.",
    },
  ]

  const features = [
    {
      category: "Getting Started",
      items: [
        { title: "Quick Start Guide", description: "Get up and running in 5 minutes" },
        { title: "Installation", description: "Install and configure the Overcast SDK" },
        { title: "Authentication", description: "API keys and authentication methods" },
        { title: "Basic Configuration", description: "Configure your first monitoring agent" },
      ],
    },
    {
      category: "Core Features",
      items: [
        { title: "Distributed Tracing", description: "Set up cross-service tracing" },
        { title: "Incident Detection", description: "Automatic incident detection and alerting" },
        { title: "Root Cause Analysis", description: "AI-powered RCA configuration" },
        { title: "GitHub Integration", description: "Connect your repositories for git blame" },
      ],
    },
    {
      category: "MCP Commands",
      items: [
        { title: "list_incidents", description: "Query and filter incidents" },
        { title: "root_cause", description: "Get RCA for specific incidents" },
        { title: "analyze_logs", description: "Analyze log patterns and anomalies" },
        { title: "safe_rollback", description: "Automated rollback procedures" },
      ],
    },
    {
      category: "Integrations",
      items: [
        { title: "Jira & Confluence", description: "Automated postmortem documentation" },
        { title: "Slack & PagerDuty", description: "Alert routing and notifications" },
        { title: "GitHub & GitLab", description: "Source control integration" },
        { title: "Datadog & New Relic", description: "Existing observability tools" },
      ],
    },
    {
      category: "API Reference",
      items: [
        { title: "REST API", description: "Complete REST API documentation" },
        { title: "WebSocket API", description: "Real-time streaming API" },
        { title: "SDK Reference", description: "Language-specific SDK documentation" },
        { title: "Rate Limits", description: "API rate limits and quotas" },
      ],
    },
    {
      category: "Advanced Topics",
      items: [
        { title: "Custom Runbooks", description: "Create automated incident response runbooks" },
        { title: "Alert Rules", description: "Advanced alert configuration" },
        { title: "Data Retention", description: "Configure retention policies" },
        { title: "Security & Compliance", description: "HIPAA, FedRAMP, and custom compliance" },
      ],
    },
  ]

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
            <h1 className="text-6xl md:text-8xl text-white font-light">Documentation</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Everything you need to get started with Overcast
            </p>
          </div>

          {/* Quick Start */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl text-white font-light">Quick Start</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quickStartSteps.map((step, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-6 space-y-3"
                >
                  <h3 className="text-xl text-white font-medium">{step.title}</h3>
                  <p className="text-white/80 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-4">
              <Button size="lg" shine asChild>
                <a href="https://platform.overcastsre.com/login" target="_blank" rel="noopener noreferrer">
                  Get Started Now
                </a>
              </Button>
            </div>
          </div>

          {/* Installation Example */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12 space-y-6">
            <h2 className="text-3xl text-white font-medium">Installation</h2>
            <div className="space-y-4">
              <p className="text-white/80">Install the Overcast SDK using your preferred package manager:</p>
              <div className="backdrop-blur-sm bg-black/90 border border-white/20 rounded-xl p-4 font-mono text-sm">
                <p className="text-white/60 mb-2"># npm</p>
                <p className="text-white">npm install @overcast/sdk</p>
                <p className="text-white/60 mt-4 mb-2"># yarn</p>
                <p className="text-white">yarn add @overcast/sdk</p>
                <p className="text-white/60 mt-4 mb-2"># pnpm</p>
                <p className="text-white">pnpm add @overcast/sdk</p>
              </div>
              <div className="backdrop-blur-sm bg-black/90 border border-white/20 rounded-xl p-4 font-mono text-sm mt-4">
                <p className="text-white/60 mb-2">// Initialize in your application</p>
                <p className="text-white">
                  <span className="text-purple-400">import</span> {`{ `}Overcast {`}`}{" "}
                  <span className="text-purple-400">from</span> <span className="text-green-400">'@overcast/sdk'</span>
                </p>
                <p className="text-white mt-2">
                  <span className="text-purple-400">const</span> overcast ={" "}
                  <span className="text-purple-400">new</span> Overcast({`{`}
                </p>
                <p className="text-white ml-4">
                  apiKey: <span className="text-green-400">process.env.OVERCAST_API_KEY</span>,
                </p>
                <p className="text-white">{`}`})</p>
              </div>
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl text-white font-light text-center">
              Explore the Docs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((section, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 space-y-6"
                >
                  <h3 className="text-2xl text-white font-medium">{section.category}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="border-l-2 border-foreground/30 pl-4 py-2 hover:border-foreground/70 transition-colors cursor-pointer">
                        <h4 className="font-medium text-white">{item.title}</h4>
                        <p className="text-sm text-white/70">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="backdrop-blur-xl bg-white/10 border-2 border-white/10 rounded-3xl p-12 space-y-6">
            <h2 className="text-4xl md:text-5xl text-white font-light text-center">Need Help?</h2>
            <p className="text-lg text-white/80 text-center max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Support</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://x.com/Overcastsre" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://x.com/Overcastsre" target="_blank" rel="noopener noreferrer">
                  Community Forum
                </a>
              </Button>
            </div>
          </div>

          {/* Status Notice */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 text-center">
            <p className="text-white/70">
              📚 Full interactive documentation launching soon. Current plan subscribers get early access.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

import { Background } from "@/components/background"
import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Transform incident response from reactive firefighting into proactive, AI-powered operations engineering with Overcast's suite of solutions.",
}

export default function SolutionsPage() {
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
            <h1 className="font-serif text-6xl md:text-8xl italic text-foreground">Solutions</h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto text-pretty">
              Transform incident response from reactive firefighting into proactive, AI-powered operations engineering
            </p>
          </div>

          {/* Solution Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Distributed Tracing */}
            <div className="backdrop-blur-xl bg-primary/20 border-2 border-border/50 rounded-3xl p-8 space-y-4">
              <h2 className="font-serif text-3xl italic text-foreground">Distributed Tracing</h2>
              <p className="text-foreground/80 leading-relaxed">
                Automatically correlates logs from multiple agents and systems into a single, coherent incident timeline
                showing exactly how failures propagate.
              </p>
            </div>

            {/* GitHub Ingestions */}
            <div className="backdrop-blur-xl bg-primary/20 border-2 border-border/50 rounded-3xl p-8 space-y-4">
              <h2 className="font-serif text-3xl italic text-foreground">GitHub Ingestions</h2>
              <p className="text-foreground/80 leading-relaxed">
                Identifies which code changes caused incidents with git blame, PR tracking, and stack trace analysis.
                Know who changed what and when.
              </p>
            </div>

            {/* Domain-Specific AI */}
            <div className="backdrop-blur-xl bg-primary/20 border-2 border-border/50 rounded-3xl p-8 space-y-4">
              <h2 className="font-serif text-3xl italic text-foreground">Domain-Specific AI</h2>
              <p className="text-foreground/80 leading-relaxed">
                AI learns your tech stack, naming conventions, and infrastructure patterns. Get Windows PowerShell or
                Linux bash — whatever fits your environment.
              </p>
            </div>

            {/* Lightning Fast Analysis */}
            <div className="backdrop-blur-xl bg-primary/20 border-2 border-border/50 rounded-3xl p-8 space-y-4">
              <h2 className="font-serif text-3xl italic text-foreground">Lightning Fast Analysis</h2>
              <p className="text-foreground/80 leading-relaxed">
                8-15 seconds from log ingestion to complete incident analysis. Intelligent filtering reduces LLM costs
                by 80%.
              </p>
            </div>

            {/* AI That Actually Solves RCA */}
            <div className="backdrop-blur-xl bg-primary/20 border-2 border-border/50 rounded-3xl p-8 space-y-4">
              <h2 className="font-serif text-3xl italic text-foreground">AI That Actually Solves RCA</h2>
              <p className="text-foreground/80 leading-relaxed">
                Complete root cause analysis with evidence, timeline reconstruction, and confidence scoring. Not just
                anomaly detection—real answers.
              </p>
            </div>

            {/* Enterprise-Ready Security */}
            <div className="backdrop-blur-xl bg-primary/20 border-2 border-border/50 rounded-3xl p-8 space-y-4">
              <h2 className="font-serif text-3xl italic text-foreground">Enterprise-Ready Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                Multi-tenant architecture with complete customer isolation. Row-level security ensures your data stays
                yours.
              </p>
            </div>
          </div>

          {/* MCP Section */}
          <div className="backdrop-blur-xl bg-primary/30 border-2 border-border/50 rounded-3xl p-12 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl italic text-foreground text-center">
              With Overcast MCP, you control your incidents
            </h2>
            <p className="text-lg text-foreground/80 text-center max-w-4xl mx-auto leading-relaxed">
              We fill in the gaps so teams can ship safely. Overcast commands are fast, quick, and to the point. A layer
              on top of your observability with MCP agents - tracing performance, limiting risky actions, and turning
              noisy signals into decisive fixes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {[
                "list_incidents",
                "root_cause",
                "analyze_logs",
                "deploy_diff",
                "assign_owner",
                "link_ticket",
                "runbook_apply",
                "safe_rollback",
                "silence_alerts",
                "guardrails_verify",
                "sim_incident",
                "auto_fix",
                "status_board",
                "trace_perf",
                "agent_mesh",
                "resume_tl",
              ].map((command) => (
                <div
                  key={command}
                  className="backdrop-blur-sm bg-background/40 border border-border/30 rounded-2xl px-4 py-3 text-sm font-mono text-foreground/90 text-center"
                >
                  {command}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

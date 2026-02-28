"use client"

const RL_NODES = [
  { id: "observation", label: "OBSERVATION" },
  { id: "preprocess", label: "PREPROCESS" },
  { id: "rl_agent", label: "RL_AGENT" },
  { id: "validate", label: "VALIDATE" },
  { id: "action", label: "ACTION" },
]

export function RlFlowStatic() {
  return (
    <div className="relative border-2 border-foreground bg-background" style={{ height: "320px", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div className="flex items-center gap-4 w-full max-w-full overflow-x-auto">
        {RL_NODES.map((node, index) => (
          <div key={node.id} className="flex items-center gap-4 flex-shrink-0">
            {/* Node Box */}
            <div className="border-2 border-[#6B7C85] bg-[#1e2a2a] px-6 py-4 min-w-[120px] text-center">
              <div className="text-sm font-mono font-bold tracking-tight uppercase text-[#C8CDD0]">
                {node.label}
              </div>
            </div>
            
            {/* Arrow (except for last node) */}
            {index < RL_NODES.length - 1 && (
              <svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0 text-[#6B7C85]">
                <path
                  d="M8 4 L16 12 L8 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


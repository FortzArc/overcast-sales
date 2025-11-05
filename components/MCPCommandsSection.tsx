export function MCPCommandsSection() {
  const commands = [
    // Row 1
    ['list_incidents', 'root_cause', 'analyze_logs', 'deploy_diff'],
    // Row 2
    ['assign_owner', 'link_ticket', 'runbook_apply', 'safe_rollback'],
    // Row 3
    ['silence_alerts', 'guardrails_verify', 'sim_incident', 'auto_fix'],
    // Row 4
    ['status_board', 'trace_perf', 'agent_mesh', 'resume_tl'],
  ]

  return (
    <section className="py-12 md:py-24 font-[family-name:var(--font-poppins)]">
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-0">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8">
          With Overcast MCP, you control your incidents
        </h2>
        
        {/* Section Description */}
        <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed mb-12 md:mb-16 max-w-[1400px]">
          We fill in the gaps so teams can ship safely. Overcast commands are fast, quick, and to the point. A layer on top of your observability with MCP agents - tracing performance, limiting risky actions, and turning noisy signals into decisive fixes.
        </p>

        {/* Commands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {commands.flat().map((command, index) => (
            <div 
              key={index}
              className={`border-4 border-white bg-black p-4 md:p-6 lg:p-8 flex items-center justify-center font-[family-name:var(--font-fira-code)] text-white ${
                index >= 8 ? 'hidden lg:flex' : ''
              }`}
            >
              <span className="text-xs md:text-base lg:text-xl xl:text-2xl font-medium text-center break-words">
                {command}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


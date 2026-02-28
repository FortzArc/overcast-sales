"use client"

export function RlAlgorithmsChart() {
  return (
    <div className="relative border-2 border-foreground bg-[#111418]" style={{ display: "flex", flexDirection: "column" }}>
      {/* File tab */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#2E3F4F] bg-[#0a0c0e]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#6B7C85]" />
        <span className="text-[9px] font-mono font-semibold text-[#C8CDD0] tracking-wider">
          rl_agent.py
        </span>
        <span className="ml-auto text-[8px] text-[#6B7C85] tracking-wider uppercase border border-[#2E3F4F] px-1.5 py-0.5">
          rl algorithms
        </span>
      </div>

      {/* Chart area */}
      <div className="p-3.5 px-3 pb-0 relative flex-1">
        <svg className="w-full h-full" viewBox="0 0 316 200" style={{ overflow: "visible" }} xmlns="http://www.w3.org/2000/svg">
          {/* Grid lines */}
          <line className="stroke-[#1e2530]" strokeWidth="0.5" x1="30" y1="10" x2="310" y2="10" />
          <line className="stroke-[#1e2530]" strokeWidth="0.5" x1="30" y1="52" x2="310" y2="52" />
          <line className="stroke-[#1e2530]" strokeWidth="0.5" x1="30" y1="94" x2="310" y2="94" />
          <line className="stroke-[#1e2530]" strokeWidth="0.5" x1="30" y1="136" x2="310" y2="136" />
          <line className="stroke-[#1e2530]" strokeWidth="0.5" x1="30" y1="178" x2="310" y2="178" />

          {/* Y-axis labels */}
          <text x="24" y="13" textAnchor="end" fontSize="7" fill="#3a4a58" fontFamily="JetBrains Mono, monospace">1.0</text>
          <text x="24" y="55" textAnchor="end" fontSize="7" fill="#3a4a58" fontFamily="JetBrains Mono, monospace">0.7</text>
          <text x="24" y="97" textAnchor="end" fontSize="7" fill="#3a4a58" fontFamily="JetBrains Mono, monospace">0.4</text>
          <text x="24" y="139" textAnchor="end" fontSize="7" fill="#3a4a58" fontFamily="JetBrains Mono, monospace">0.1</text>

          {/* X-axis labels */}
          <text x="30" y="195" textAnchor="middle" fontSize="7" fill="#3a4a58" fontFamily="JetBrains Mono, monospace">0</text>
          <text x="100" y="195" textAnchor="middle" fontSize="7" fill="#3a4a58" fontFamily="JetBrains Mono, monospace">200</text>
          <text x="170" y="195" textAnchor="middle" fontSize="7" fill="#3a4a58" fontFamily="JetBrains Mono, monospace">400</text>
          <text x="240" y="195" textAnchor="middle" fontSize="7" fill="#3a4a58" fontFamily="JetBrains Mono, monospace">600</text>
          <text x="310" y="195" textAnchor="middle" fontSize="7" fill="#3a4a58" fontFamily="JetBrains Mono, monospace">800</text>

          {/* Forecast zone */}
          <rect fill="rgba(200,205,208,0.04)" x="245" y="10" width="65" height="168" />
          <line stroke="#2E3F4F" strokeWidth="0.5" strokeDasharray="2 2" x1="245" y1="10" x2="245" y2="178" />
          <text x="247" y="19" fontSize="6.5" fill="#2E3F4F" fontFamily="JetBrains Mono, monospace">forecast</text>

          {/* Baseline (dashed) */}
          <polyline
            fill="none"
            stroke="#2E3F4F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 3"
            points="30,136 60,133 90,131 120,129 150,128 180,127 210,127 240,126 245,126 270,124 295,123 310,122"
          />

          {/* DQN */}
          <polyline
            fill="none"
            stroke="#6B7C85"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="30,148 50,135 70,120 90,108 110,102 130,92 150,85 170,80 190,77 210,75 230,73 245,72 260,69 280,66 310,63"
          />

          {/* A3C */}
          <polyline
            fill="none"
            stroke="#8E9BA3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="30,153 45,135 60,117 80,95 100,82 120,70 140,61 160,55 180,50 200,46 220,43 240,40 245,39 262,35 285,30 310,25"
          />

          {/* PPO (best) */}
          <polyline
            fill="none"
            stroke="#C8CDD0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="30,156 42,127 55,100 70,78 88,60 108,45 130,33 152,25 170,19 190,16 210,15 230,15 245,15 260,15 280,15 310,15"
          />

          {/* Anomaly at ~ep 480 on PPO */}
          <circle fill="none" stroke="#C8CDD0" strokeWidth="1" opacity="0.4" cx="210" cy="15" r="5" />
          <circle fill="#C8CDD0" cx="210" cy="15" r="2" />

          {/* Anomaly label */}
          <text x="215" y="14" fontSize="6" fill="#C8CDD0" fontFamily="JetBrains Mono, monospace">policy collapse risk</text>
        </svg>
      </div>

      {/* Actionable advice callout */}
      <div className="mx-3 mb-0 border border-[#2E3F4F] bg-[#0a0c0e] p-1.5 px-2.5 flex gap-2 items-start">
        <span className="text-[8px] text-[#C8CDD0] flex-shrink-0 mt-0.5" style={{ letterSpacing: 0 }}>▸</span>
        <span className="text-[8px] text-[#6B7C85] leading-snug" style={{ letterSpacing: "0.02em", lineHeight: "1.6" }}>
          <strong className="text-[#C8CDD0] font-semibold">PPO</strong> approaching entropy collapse at ep ~480.
          Recommend increasing <strong className="text-[#C8CDD0] font-semibold">ent_coef</strong> to 0.02 and
          clipping reward signal — projected <strong className="text-[#C8CDD0] font-semibold">+12% stability</strong>.
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 flex-wrap px-3 py-2 border-t border-[#1e2530] text-[7.5px] text-[#6B7C85] tracking-wider uppercase">
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-0.5 rounded-sm bg-[#C8CDD0]" />
          ppo
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-0.5 rounded-sm bg-[#8E9BA3]" />
          a3c
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-0.5 rounded-sm bg-[#6B7C85]" />
          dqn
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-0 border-t border-t-[#2E3F4F] border-dashed" style={{ borderTopWidth: "1.5px" }} />
          baseline
        </span>
        <span className="ml-auto text-[#1e2530]">800 episodes</span>
      </div>
    </div>
  )
}


"use client"

export function FragmentedToolsAnimation() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <svg width="400" height="400" viewBox="0 0 400 400">
        {/* Background glow effects */}
        <defs>
          <radialGradient id="toolGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Failed connection attempts - broken lines */}
        <g className="broken-connections">
          {/* Top connection attempt */}
          <g opacity="0.6">
            <line x1="100" y1="100" x2="160" y2="100" stroke="#fff" strokeWidth="3">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="240" y1="100" x2="300" y2="100" stroke="#fff" strokeWidth="3">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </line>
            {/* Gap indicator */}
            <circle cx="200" cy="100" r="8" fill="#fff">
              <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Right connection attempt */}
          <g opacity="0.6">
            <line x1="300" y1="100" x2="300" y2="160" stroke="#fff" strokeWidth="3">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </line>
            <line x1="300" y1="240" x2="300" y2="300" stroke="#fff" strokeWidth="3">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </line>
            <circle cx="300" cy="200" r="8" fill="#fff">
              <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </circle>
          </g>

          {/* Bottom connection attempt */}
          <g opacity="0.6">
            <line x1="100" y1="300" x2="160" y2="300" stroke="#fff" strokeWidth="3">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
            </line>
            <line x1="240" y1="300" x2="300" y2="300" stroke="#fff" strokeWidth="3">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
            </line>
            <circle cx="200" cy="300" r="8" fill="#fff">
              <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="1s" />
            </circle>
          </g>

          {/* Left connection attempt */}
          <g opacity="0.6">
            <line x1="100" y1="100" x2="100" y2="160" stroke="#fff" strokeWidth="3">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.5s" />
            </line>
            <line x1="100" y1="240" x2="100" y2="300" stroke="#fff" strokeWidth="3">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.5s" />
            </line>
            <circle cx="100" cy="200" r="8" fill="#fff">
              <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin="1.5s" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="1.5s" />
            </circle>
          </g>
        </g>

        {/* Data packets trying to communicate but bouncing back */}
        <g className="failed-data-packets">
          {/* Packet 1: Datadog to Grafana */}
          <circle cx="100" cy="100" r="5" fill="#fff">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M 0,0 L 80,0 L 40,0 L 0,0" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.6;1" dur="1.5s" repeatCount="indefinite" />
          </circle>

          {/* Packet 2: Grafana to Sentry */}
          <circle cx="300" cy="100" r="5" fill="#fff">
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.4s" path="M 0,0 L 0,80 L 0,40 L 0,0" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.6;1" dur="1.5s" repeatCount="indefinite" begin="0.4s" />
          </circle>

          {/* Packet 3: Sentry to PagerDuty */}
          <circle cx="300" cy="300" r="5" fill="#fff">
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.8s" path="M 0,0 L -80,0 L -40,0 L 0,0" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.6;1" dur="1.5s" repeatCount="indefinite" begin="0.8s" />
          </circle>

          {/* Packet 4: PagerDuty to Datadog */}
          <circle cx="100" cy="300" r="5" fill="#fff">
            <animateMotion dur="1.5s" repeatCount="indefinite" begin="1.2s" path="M 0,0 L 0,-80 L 0,-40 L 0,0" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.6;1" dur="1.5s" repeatCount="indefinite" begin="1.2s" />
          </circle>
        </g>

        {/* Tool icons with better styling */}
        <g className="tools">
          {/* Datadog - top left (Logs) */}
          <g className="tool-node">
            <circle cx="100" cy="100" r="42" fill="url(#toolGlow)" opacity="0.4">
              <animate attributeName="r" values="42;46;42" dur="3s" repeatCount="indefinite" />
            </circle>
            <rect x="70" y="70" width="60" height="60" rx="8" fill="#000" stroke="#fff" strokeWidth="3">
              <animate attributeName="stroke-width" values="3;4;3" dur="3s" repeatCount="indefinite" />
            </rect>
            <text x="100" y="95" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Logs</text>
            <text x="100" y="110" textAnchor="middle" fill="#999" fontSize="9">Datadog</text>
          </g>
          
          {/* Grafana - top right (Metrics) */}
          <g className="tool-node">
            <circle cx="300" cy="100" r="42" fill="url(#toolGlow)" opacity="0.4">
              <animate attributeName="r" values="42;46;42" dur="3s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <rect x="270" y="70" width="60" height="60" rx="8" fill="#000" stroke="#fff" strokeWidth="3">
              <animate attributeName="stroke-width" values="3;4;3" dur="3s" repeatCount="indefinite" begin="0.5s" />
            </rect>
            <text x="300" y="95" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Metrics</text>
            <text x="300" y="110" textAnchor="middle" fill="#999" fontSize="9">Grafana</text>
          </g>
          
          {/* Sentry - bottom left (Errors) */}
          <g className="tool-node">
            <circle cx="100" cy="300" r="42" fill="url(#toolGlow)" opacity="0.4">
              <animate attributeName="r" values="42;46;42" dur="3s" repeatCount="indefinite" begin="1s" />
            </circle>
            <rect x="70" y="270" width="60" height="60" rx="8" fill="#000" stroke="#fff" strokeWidth="3">
              <animate attributeName="stroke-width" values="3;4;3" dur="3s" repeatCount="indefinite" begin="1s" />
            </rect>
            <text x="100" y="295" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Errors</text>
            <text x="100" y="310" textAnchor="middle" fill="#999" fontSize="9">Sentry</text>
          </g>
          
          {/* PagerDuty - bottom right (Alerts) */}
          <g className="tool-node">
            <circle cx="300" cy="300" r="42" fill="url(#toolGlow)" opacity="0.4">
              <animate attributeName="r" values="42;46;42" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <rect x="270" y="270" width="60" height="60" rx="8" fill="#000" stroke="#fff" strokeWidth="3">
              <animate attributeName="stroke-width" values="3;4;3" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </rect>
            <text x="300" y="295" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Alerts</text>
            <text x="300" y="310" textAnchor="middle" fill="#999" fontSize="9">PagerDuty</text>
          </g>

          {/* Jaeger - center top (Traces) */}
          <g className="tool-node">
            <circle cx="200" cy="50" r="35" fill="url(#toolGlow)" opacity="0.4">
              <animate attributeName="r" values="35;38;35" dur="3s" repeatCount="indefinite" begin="0.3s" />
            </circle>
            <circle cx="200" cy="50" r="32" fill="#000" stroke="#fff" strokeWidth="3">
              <animate attributeName="stroke-width" values="3;4;3" dur="3s" repeatCount="indefinite" begin="0.3s" />
            </circle>
            <text x="200" y="53" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Traces</text>
            <text x="200" y="64" textAnchor="middle" fill="#999" fontSize="7">Jaeger</text>
          </g>

          {/* Splunk - center bottom (Search) */}
          <g className="tool-node">
            <circle cx="200" cy="350" r="35" fill="url(#toolGlow)" opacity="0.4">
              <animate attributeName="r" values="35;38;35" dur="3s" repeatCount="indefinite" begin="0.8s" />
            </circle>
            <circle cx="200" cy="350" r="32" fill="#000" stroke="#fff" strokeWidth="3">
              <animate attributeName="stroke-width" values="3;4;3" dur="3s" repeatCount="indefinite" begin="0.8s" />
            </circle>
            <text x="200" y="353" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Search</text>
            <text x="200" y="364" textAnchor="middle" fill="#999" fontSize="7">Splunk</text>
          </g>
        </g>

        {/* Error indicators - X marks with emphasis */}
        <g className="error-indicators" filter="url(#glow)">
          {/* X between Datadog and Grafana */}
          <g>
            <circle cx="200" cy="100" r="18" fill="#000" stroke="#fff" strokeWidth="3" opacity="0.9">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <line x1="191" y1="91" x2="209" y2="109" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
            <line x1="209" y1="91" x2="191" y2="109" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
          </g>

          {/* X between Grafana and PagerDuty */}
          <g>
            <circle cx="300" cy="200" r="18" fill="#000" stroke="#fff" strokeWidth="3" opacity="0.9">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
            </circle>
            <line x1="291" y1="191" x2="309" y2="209" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
            <line x1="309" y1="191" x2="291" y2="209" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
          </g>

          {/* X between Sentry and PagerDuty */}
          <g>
            <circle cx="200" cy="300" r="18" fill="#000" stroke="#fff" strokeWidth="3" opacity="0.9">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
            </circle>
            <line x1="191" y1="291" x2="209" y2="309" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
            <line x1="209" y1="291" x2="191" y2="309" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
          </g>

          {/* X between Datadog and Sentry */}
          <g>
            <circle cx="100" cy="200" r="18" fill="#000" stroke="#fff" strokeWidth="3" opacity="0.9">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" begin="0.9s" />
            </circle>
            <line x1="91" y1="191" x2="109" y2="209" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
            <line x1="109" y1="191" x2="91" y2="209" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
          </g>
        </g>

        {/* "No Connection" text that fades in */}
        <text x="200" y="210" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="1s" />
          NO SYNC
        </text>
      </svg>
    </div>
  )
}


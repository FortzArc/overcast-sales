"use client"

export function FragmentedToolsAnimation() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <svg width="400" height="400" viewBox="0 0 400 400">
        {/* Connection lines with X marks */}
        <g className="connections">
          {/* Horizontal line top */}
          <line x1="100" y1="100" x2="300" y2="100" stroke="#555" strokeWidth="3" strokeDasharray="8,8">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
          </line>
          {/* Horizontal line bottom */}
          <line x1="100" y1="300" x2="300" y2="300" stroke="#555" strokeWidth="3" strokeDasharray="8,8">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
          </line>
          {/* Vertical line left */}
          <line x1="100" y1="100" x2="100" y2="300" stroke="#555" strokeWidth="3" strokeDasharray="8,8">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
          </line>
          {/* Vertical line right */}
          <line x1="300" y1="100" x2="300" y2="300" stroke="#555" strokeWidth="3" strokeDasharray="8,8">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
          </line>
          {/* Diagonal lines */}
          <line x1="100" y1="100" x2="300" y2="300" stroke="#555" strokeWidth="3" strokeDasharray="8,8">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="300" y1="100" x2="100" y2="300" stroke="#555" strokeWidth="3" strokeDasharray="8,8">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
          </line>
        </g>

        {/* X marks on connections - animated */}
        <g className="x-marks">
          {/* Center X */}
          <g className="animate-x-pulse" style={{ transformOrigin: '200px 200px' }}>
            <line x1="185" y1="185" x2="215" y2="215" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <line x1="215" y1="185" x2="185" y2="215" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </g>
          
          {/* Top X */}
          <g className="animate-x-pulse" style={{ transformOrigin: '200px 100px', animationDelay: '0.3s' }}>
            <line x1="185" y1="85" x2="215" y2="115" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <line x1="215" y1="85" x2="185" y2="115" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </g>
          
          {/* Bottom X */}
          <g className="animate-x-pulse" style={{ transformOrigin: '200px 300px', animationDelay: '0.6s' }}>
            <line x1="185" y1="285" x2="215" y2="315" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <line x1="215" y1="285" x2="185" y2="315" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </g>
          
          {/* Left X */}
          <g className="animate-x-pulse" style={{ transformOrigin: '100px 200px', animationDelay: '0.9s' }}>
            <line x1="85" y1="185" x2="115" y2="215" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <line x1="115" y1="185" x2="85" y2="215" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </g>
          
          {/* Right X */}
          <g className="animate-x-pulse" style={{ transformOrigin: '300px 200px', animationDelay: '1.2s' }}>
            <line x1="285" y1="185" x2="315" y2="215" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <line x1="315" y1="185" x2="285" y2="215" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </g>
        </g>

        {/* Tool nodes */}
        <g className="tools">
          {/* Datadog - top left */}
          <g className="animate-tool-float" style={{ transformOrigin: '100px 100px', animationDelay: '0s' }}>
            <circle cx="100" cy="100" r="35" fill="#1a1a1a" stroke="#fff" strokeWidth="3" />
            <text x="100" y="108" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">DD</text>
          </g>
          
          {/* Splunk - top right */}
          <g className="animate-tool-float" style={{ transformOrigin: '300px 100px', animationDelay: '0.5s' }}>
            <circle cx="300" cy="100" r="35" fill="#1a1a1a" stroke="#fff" strokeWidth="3" />
            <text x="300" y="108" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">SPL</text>
          </g>
          
          {/* GitHub - bottom left */}
          <g className="animate-tool-float" style={{ transformOrigin: '100px 300px', animationDelay: '1s' }}>
            <circle cx="100" cy="300" r="35" fill="#1a1a1a" stroke="#fff" strokeWidth="3" />
            <text x="100" y="308" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">GH</text>
          </g>
          
          {/* PagerDuty - bottom right */}
          <g className="animate-tool-float" style={{ transformOrigin: '300px 300px', animationDelay: '1.5s' }}>
            <circle cx="300" cy="300" r="35" fill="#1a1a1a" stroke="#fff" strokeWidth="3" />
            <text x="300" y="308" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">PD</text>
          </g>
        </g>

        <style jsx>{`
          @keyframes x-pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.2);
            }
          }
          
          @keyframes tool-float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          
          .animate-x-pulse {
            animation: x-pulse 2s ease-in-out infinite;
          }
          
          .animate-tool-float {
            animation: tool-float 3s ease-in-out infinite;
          }
        `}</style>
      </svg>
    </div>
  )
}


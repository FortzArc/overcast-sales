"use client"

export function SurfaceAnalysisAnimation() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <svg width="400" height="400" viewBox="0 0 400 400">
        {/* Background service mesh */}
        <g className="service-connections" opacity="0.4">
          <line x1="200" y1="100" x2="100" y2="200" stroke="#888" strokeWidth="2.5" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="100" x2="300" y2="200" stroke="#888" strokeWidth="2.5" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="200" x2="200" y2="300" stroke="#888" strokeWidth="2.5" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="300" y1="200" x2="200" y2="300" stroke="#888" strokeWidth="2.5" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="200" x2="300" y2="200" stroke="#888" strokeWidth="2.5" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Service nodes */}
        <g className="services">
          {/* API Gateway - top */}
          <g>
            <circle cx="200" cy="100" r="32" fill="#1a1a1a" stroke="#666" strokeWidth="3">
              <animate attributeName="r" values="32;35;32" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="200" y="107" textAnchor="middle" fill="#999" fontSize="13" fontWeight="bold">API</text>
          </g>

          {/* Auth Service - left */}
          <g>
            <circle cx="100" cy="200" r="32" fill="#1a1a1a" stroke="#666" strokeWidth="3">
              <animate attributeName="r" values="32;35;32" dur="2s" repeatCount="indefinite" begin="0.3s" />
            </circle>
            <text x="100" y="207" textAnchor="middle" fill="#999" fontSize="13" fontWeight="bold">Auth</text>
          </g>

          {/* Payment Service - right (appears to be the problem - pulsing) */}
          <g className="problem-service">
            <circle cx="300" cy="200" r="32" fill="#1a1a1a" stroke="#fff" strokeWidth="3">
              <animate attributeName="r" values="32;38;32" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="200" r="40" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5">
              <animate attributeName="r" values="40;50;40" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <text x="300" y="207" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">Pay</text>
          </g>

          {/* Database - bottom (actual root cause - hidden deeper) */}
          <g className="root-cause">
            <circle cx="200" cy="300" r="32" fill="#1a1a1a" stroke="#999" strokeWidth="3">
              <animate attributeName="r" values="32;35;32" dur="2s" repeatCount="indefinite" begin="0.6s" />
            </circle>
            {/* Subtle warning indicator that grows */}
            <circle cx="200" cy="300" r="40" fill="none" stroke="#fff" strokeWidth="2" opacity="0">
              <animate attributeName="r" values="40;50;40" dur="3s" repeatCount="indefinite" begin="2s" />
              <animate attributeName="opacity" values="0;0.7;0" dur="3s" repeatCount="indefinite" begin="2s" />
            </circle>
            <text x="200" y="307" textAnchor="middle" fill="#999" fontSize="13" fontWeight="bold">DB</text>
          </g>
        </g>

        {/* Animated logs/data packets */}
        <g className="data-packets">
          {/* Packet 1: API to Payment */}
          <circle cx="200" cy="100" r="5" fill="#ccc">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 0,0 L 100,100" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Packet 2: Payment to DB */}
          <circle cx="300" cy="200" r="5" fill="#ccc">
            <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path="M 0,0 L -100,100" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>

          {/* Packet 3: DB slow response indicator */}
          <circle cx="200" cy="300" r="5" fill="#aaa">
            <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 0,0 L 100,-100" />
            <animate attributeName="opacity" values="0;1;1;0.5" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>
        </g>

        {/* Surface level indicator - magnifying glass on Payment */}
        <g className="magnifying-glass" opacity="0.8">
          <circle cx="330" cy="170" r="25" fill="none" stroke="#ffffff" strokeWidth="3">
            <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
          </circle>
          <line x1="348" y1="188" x2="363" y2="203" stroke="#ffffff" strokeWidth="3" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Hidden correlation indicator - appears after delay */}
        <g className="hidden-correlation">
          <path d="M 300,200 Q 250,250 200,300" fill="none" stroke="#fff" strokeWidth="3.5" strokeDasharray="8,8" opacity="0">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" begin="3s" />
            <animate attributeName="opacity" values="0;0;0.8;0.8;0" keyTimes="0;0.6;0.7;0.95;1" dur="5s" repeatCount="indefinite" />
          </path>
          {/* Arrow pointing to real root cause */}
          <polygon points="193,298 207,298 200,290" fill="#fff" opacity="0">
            <animate attributeName="opacity" values="0;0;0.8;0.8;0" keyTimes="0;0.6;0.7;0.95;1" dur="5s" repeatCount="indefinite" />
          </polygon>
        </g>

        {/* Text labels */}
        <text x="330" y="230" fill="#fff" fontSize="12" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
          Surface
        </text>
        <text x="200" y="350" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" opacity="0">
          <animate attributeName="opacity" values="0;0;0.8;0.8;0" keyTimes="0;0.6;0.7;0.95;1" dur="5s" repeatCount="indefinite" />
          Root Cause
        </text>
      </svg>
    </div>
  )
}


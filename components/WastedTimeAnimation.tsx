"use client"

export function WastedTimeAnimation() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <svg width="400" height="400" viewBox="0 0 400 400">
        {/* Clock in center */}
        <g className="clock">
          <circle cx="200" cy="200" r="60" fill="#1a1a1a" stroke="#fff" strokeWidth="4" />
          
          {/* Clock numbers */}
          <text x="200" y="155" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">12</text>
          <text x="245" y="210" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">3</text>
          <text x="200" y="250" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">6</text>
          <text x="155" y="210" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">9</text>
          
          {/* Hour hand - rotating slowly */}
          <line x1="200" y1="200" x2="200" y2="170" stroke="#fff" strokeWidth="5" strokeLinecap="round">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              from="0 200 200" 
              to="360 200 200" 
              dur="8s" 
              repeatCount="indefinite"
            />
          </line>
          
          {/* Minute hand - rotating faster */}
          <line x1="200" y1="200" x2="200" y2="160" stroke="#ccc" strokeWidth="3" strokeLinecap="round">
            <animateTransform 
              attributeName="transform" 
              type="rotate" 
              from="0 200 200" 
              to="360 200 200" 
              dur="2s" 
              repeatCount="indefinite"
            />
          </line>
          
          {/* Center dot */}
          <circle cx="200" cy="200" r="6" fill="#fff" />
        </g>

        {/* Document stack 1 - Top Left */}
        <g className="document-stack-1">
          <rect x="50" y="60" width="60" height="80" fill="#1a1a1a" stroke="#fff" strokeWidth="2.5" rx="3">
            <animate attributeName="y" values="60;55;60" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1" keyTimes="0;0.3;1" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="55" y="55" width="60" height="80" fill="#1a1a1a" stroke="#999" strokeWidth="2.5" rx="3">
            <animate attributeName="y" values="55;50;55" dur="2s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="opacity" values="0;1;1" keyTimes="0;0.3;1" dur="3s" repeatCount="indefinite" begin="0.3s" />
          </rect>
          <rect x="60" y="50" width="60" height="80" fill="#1a1a1a" stroke="#666" strokeWidth="2.5" rx="3">
            <animate attributeName="y" values="50;45;50" dur="2s" repeatCount="indefinite" begin="0.6s" />
            <animate attributeName="opacity" values="0;1;1" keyTimes="0;0.3;1" dur="3s" repeatCount="indefinite" begin="0.6s" />
          </rect>
          <text x="90" y="100" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">
            <animate attributeName="opacity" values="0;1;1" keyTimes="0;0.3;1" dur="3s" repeatCount="indefinite" begin="0.6s" />
            Report
          </text>
        </g>

        {/* Document stack 2 - Top Right */}
        <g className="document-stack-2">
          <rect x="290" y="60" width="60" height="80" fill="#1a1a1a" stroke="#fff" strokeWidth="2.5" rx="3">
            <animate attributeName="y" values="60;55;60" dur="2s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="0;1;1" keyTimes="0;0.3;1" dur="3s" repeatCount="indefinite" begin="1s" />
          </rect>
          <rect x="285" y="55" width="60" height="80" fill="#1a1a1a" stroke="#999" strokeWidth="2.5" rx="3">
            <animate attributeName="y" values="55;50;55" dur="2s" repeatCount="indefinite" begin="0.8s" />
            <animate attributeName="opacity" values="0;1;1" keyTimes="0;0.3;1" dur="3s" repeatCount="indefinite" begin="1.3s" />
          </rect>
          <rect x="280" y="50" width="60" height="80" fill="#1a1a1a" stroke="#666" strokeWidth="2.5" rx="3">
            <animate attributeName="y" values="50;45;50" dur="2s" repeatCount="indefinite" begin="1.1s" />
            <animate attributeName="opacity" values="0;1;1" keyTimes="0;0.3;1" dur="3s" repeatCount="indefinite" begin="1.6s" />
          </rect>
          <text x="310" y="100" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">
            <animate attributeName="opacity" values="0;1;1" keyTimes="0;0.3;1" dur="3s" repeatCount="indefinite" begin="1.6s" />
            Docs
          </text>
        </g>

        {/* Meeting notification - Bottom Left */}
        <g className="meeting-icon">
          <rect x="50" y="280" width="70" height="55" fill="#1a1a1a" stroke="#fff" strokeWidth="3" rx="4">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </rect>
          <text x="85" y="312" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">
            Meeting
          </text>
          {/* Notification badge */}
          <circle cx="110" cy="285" r="10" fill="#ff4444">
            <animate attributeName="r" values="10;12;10" dur="1s" repeatCount="indefinite" />
          </circle>
          <text x="110" y="290" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">5</text>
        </g>

        {/* Tool switching - Bottom Right */}
        <g className="tool-switching">
          <rect x="280" y="280" width="70" height="55" fill="#1a1a1a" stroke="#fff" strokeWidth="3" rx="4" />
          
          {/* Slack icon text - fades in and out */}
          <g opacity="1">
            <animate attributeName="opacity" values="1;1;0;0;0;0;0;0" keyTimes="0;0.3;0.35;0.45;0.55;0.65;0.75;1" dur="3s" repeatCount="indefinite" />
            <text x="315" y="312" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">Slack</text>
          </g>
          
          {/* Teams icon text - fades in and out */}
          <g opacity="0">
            <animate attributeName="opacity" values="0;0;1;1;0;0;0;0" keyTimes="0;0.3;0.35;0.45;0.5;0.6;0.7;1" dur="3s" repeatCount="indefinite" />
            <text x="315" y="312" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">Teams</text>
          </g>
          
          {/* Docs icon text - fades in and out */}
          <g opacity="0">
            <animate attributeName="opacity" values="0;0;0;0;1;1;0;0" keyTimes="0;0.4;0.5;0.6;0.65;0.75;0.8;1" dur="3s" repeatCount="indefinite" />
            <text x="315" y="312" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">GDocs</text>
          </g>
          
          {/* Email icon text - fades in and out */}
          <g opacity="0">
            <animate attributeName="opacity" values="0;0;0;0;0;0;1;1" keyTimes="0;0.5;0.6;0.7;0.75;0.8;0.85;1" dur="3s" repeatCount="indefinite" />
            <text x="315" y="312" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">Email</text>
          </g>
        </g>

        {/* Connecting lines showing chaos */}
        <g className="chaos-lines" opacity="0.5">
          <line x1="90" y1="140" x2="200" y2="200" stroke="#888" strokeWidth="2" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="310" y1="140" x2="200" y2="200" stroke="#888" strokeWidth="2" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" begin="0.2s" />
          </line>
          <line x1="85" y1="280" x2="200" y2="200" stroke="#888" strokeWidth="2" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" begin="0.4s" />
          </line>
          <line x1="315" y1="280" x2="200" y2="200" stroke="#888" strokeWidth="2" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" begin="0.6s" />
          </line>
        </g>

        {/* Percentage indicator */}
        <text x="200" y="330" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          20-25%
        </text>
        <text x="200" y="350" textAnchor="middle" fill="#999" fontSize="14">
          Time Wasted
        </text>
      </svg>
    </div>
  )
}


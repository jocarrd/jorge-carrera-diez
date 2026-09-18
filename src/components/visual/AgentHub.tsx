const NODES = [
  { x: 34, y: 26 },
  { x: 146, y: 26 },
  { x: 34, y: 118 },
  { x: 146, y: 118 },
];

export function AgentHub() {
  return (
    <span className="agent-hub" aria-hidden>
      <svg viewBox="0 0 180 144" fill="none">
        <defs>
          <radialGradient id="hub-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#fb923c" stopOpacity="0.16" />
            <stop offset="1" stopColor="#fb923c" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="90" cy="72" r="46" fill="url(#hub-glow)" />

        {NODES.map((node) => (
          <path
            key={`${node.x}-${node.y}`}
            d={`M 90 72 L ${node.x} ${node.y}`}
            className="hub-link"
          />
        ))}

        {NODES.map((node) => (
          <circle
            key={`n-${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r="7"
            className="hub-node"
          />
        ))}

        <circle cx="90" cy="72" r="26" className="hub-ring" />
        <circle cx="90" cy="72" r="13" className="hub-core" />
      </svg>
    </span>
  );
}

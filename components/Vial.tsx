type VialProps = {
  label?: string;
  abbr?: string;
  tone?: string;
  className?: string;
};

/**
 * Self-contained SVG of a lyophilized-peptide vial.
 * No external image assets required.
 */
export default function Vial({
  label = "RESEARCH PEPTIDE",
  abbr = "CL",
  tone = "#1f6f5c",
  className = "",
}: VialProps) {
  return (
    <svg
      viewBox="0 0 120 300"
      className={className}
      role="img"
      aria-label={label}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`glass-${abbr}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.28" stopColor="#eef1f0" stopOpacity="0.65" />
          <stop offset="0.55" stopColor="#dfe5e3" stopOpacity="0.5" />
          <stop offset="1" stopColor="#c5cdca" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={`cap-${abbr}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={tone} stopOpacity="0.95" />
          <stop offset="1" stopColor="#0d2b22" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={`powder-${abbr}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eef0ee" />
        </linearGradient>
      </defs>

      {/* shadow */}
      <ellipse cx="60" cy="288" rx="34" ry="6" fill="#000" opacity="0.07" />

      {/* glass body */}
      <rect x="26" y="70" width="68" height="210" rx="14" fill={`url(#glass-${abbr})`} stroke="#cfd6d3" strokeWidth="1.5" />
      {/* shoulder */}
      <path d="M26 92 Q26 70 48 64 H72 Q94 70 94 92" fill={`url(#glass-${abbr})`} stroke="#cfd6d3" strokeWidth="1.5" />

      {/* lyophilized powder cake */}
      <rect x="32" y="196" width="56" height="80" rx="8" fill={`url(#powder-${abbr})`} />
      <rect x="32" y="196" width="56" height="10" fill={tone} opacity="0.08" />

      {/* neck */}
      <rect x="44" y="44" width="32" height="26" rx="3" fill="#eef1f0" stroke="#cfd6d3" strokeWidth="1.2" />
      {/* crimp */}
      <rect x="40" y="30" width="40" height="20" rx="4" fill="#d9dedb" stroke="#c2cac6" strokeWidth="1" />
      {/* cap */}
      <rect x="44" y="14" width="32" height="20" rx="5" fill={`url(#cap-${abbr})`} />
      <ellipse cx="60" cy="14" rx="16" ry="4" fill={tone} opacity="0.85" />

      {/* label */}
      <rect x="30" y="120" width="60" height="64" rx="5" fill="#ffffff" stroke="#e7e7e0" strokeWidth="1" />
      <rect x="30" y="120" width="60" height="14" rx="5" fill={tone} opacity="0.12" />
      <text x="60" y="131" textAnchor="middle" fontSize="8" fontFamily="monospace" letterSpacing="1" fill={tone}>
        CARBON LAB
      </text>
      <text x="60" y="158" textAnchor="middle" fontSize="20" fontWeight="700" fontFamily="sans-serif" fill="#14171a">
        {abbr}
      </text>
      <text x="60" y="174" textAnchor="middle" fontSize="6.5" fontFamily="monospace" letterSpacing="0.5" fill="#8a9099">
        LYOPHILIZED · RUO
      </text>

      {/* highlight */}
      <rect x="34" y="80" width="7" height="180" rx="3.5" fill="#ffffff" opacity="0.55" />
    </svg>
  );
}

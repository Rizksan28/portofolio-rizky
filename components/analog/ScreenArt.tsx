interface Props {
  slug: string;
  accent: string;
  className?: string;
}

const ink = "#F1E5D0";
const cols = ["TODO", "DOING", "DONE"];

export default function ScreenArt({ slug, accent, className = "" }: Props) {
  const colColors = [accent, "#F5BA60", "#6FC6BE"];
  return (
    <svg
      viewBox="0 0 320 240"
      className={`w-full h-full ${className}`}
      role="img"
      aria-label={`Stylised interface of the ${slug} project`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="320" height="240" fill="#0d0b12" />
      <g stroke="rgba(255,255,255,0.05)">
        {Array.from({ length: 16 }).map((_, i) => <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="240" />)}
        {Array.from({ length: 12 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 20} x2="320" y2={i * 20} />)}
      </g>
      <rect x="0" y="0" width="320" height="22" fill="rgba(255,255,255,0.06)" />
      <circle cx="12" cy="11" r="3" fill={accent} />
      <circle cx="24" cy="11" r="3" fill="#F5BA60" />
      <circle cx="36" cy="11" r="3" fill="#6FC6BE" />

      {slug === "daging-people-hris" && (
        <g>
          <rect x="20" y="40" width="130" height="90" rx="4" fill="rgba(255,255,255,0.04)" stroke={accent} strokeOpacity="0.5" />
          <circle cx="85" cy="85" r="34" fill="none" stroke={accent} strokeOpacity="0.6" strokeDasharray="3 4" />
          <circle cx="85" cy="85" r="16" fill="none" stroke={accent} strokeOpacity="0.8" />
          <path d="M85 70c-6 0-10 4-10 9 0 7 10 17 10 17s10-10 10-17c0-5-4-9-10-9z" fill={accent} />
          <circle cx="85" cy="79" r="3.5" fill="#0d0b12" />
          <rect x="165" y="40" width="135" height="12" rx="2" fill="rgba(255,255,255,0.12)" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <rect x="165" y={62 + i * 18} width="135" height="12" rx="2" fill="rgba(255,255,255,0.05)" />
              <rect x="165" y={62 + i * 18} width={40 + ((i * 37) % 80)} height="12" rx="2" fill={accent} fillOpacity="0.55" />
            </g>
          ))}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} x={24 + i * 40} y={210 - (20 + ((i * 29) % 50))} width="26" height={20 + ((i * 29) % 50)} fill="#6FC6BE" fillOpacity="0.7" />
          ))}
          <text x="20" y="150" fill={ink} fontSize="9" fontFamily="monospace" opacity="0.85">GPS OK 08:02 / SHIFT A / NFC TAP</text>
        </g>
      )}

      {slug === "costtrack" && (
        <g>
          <text x="20" y="46" fill={ink} fontSize="11" fontFamily="monospace" opacity="0.9">USD/IDR  16,284.50</text>
          <text x="20" y="62" fill="#6FC6BE" fontSize="9" fontFamily="monospace">JISDOR UP 0.42%</text>
          <polyline fill="none" stroke={accent} strokeWidth="2" points="20,170 60,150 100,160 140,120 180,130 220,90 260,100 300,60" />
          <polyline fill="none" stroke="#6FC6BE" strokeWidth="1.5" strokeDasharray="4 3" points="20,180 60,172 100,170 140,150 180,152 220,130 260,128 300,112" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={30 + i * 46} y={218 - (14 + ((i * 23) % 30))} width="28" height={14 + ((i * 23) % 30)} fill="#F5BA60" fillOpacity="0.55" />
          ))}
          <rect x="220" y="34" width="80" height="22" rx="3" fill="none" stroke={accent} />
          <text x="228" y="49" fill={ink} fontSize="10" fontFamily="monospace">HPE TOTAL</text>
        </g>
      )}

      {slug === "tasktracker" && (
        <g>
          {cols.map((c, ci) => (
            <g key={c}>
              <text x={22 + ci * 100} y="42" fill={colColors[ci]} fontSize="10" fontFamily="monospace" fontWeight="700">{c}</text>
              {[0, 1, 2].slice(0, ci === 1 ? 2 : 3).map((i) => (
                <g key={i}>
                  <rect x={18 + ci * 100} y={52 + i * 54} width="90" height="44" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
                  <rect x={26 + ci * 100} y={62 + i * 54} width={50 + (((i + ci) * 13) % 30)} height="5" rx="2" fill={ink} fillOpacity="0.7" />
                  <rect x={26 + ci * 100} y={74 + i * 54} width="34" height="4" rx="2" fill={colColors[ci]} fillOpacity="0.8" />
                </g>
              ))}
            </g>
          ))}
        </g>
      )}

      {!["daging-people-hris", "costtrack", "tasktracker"].includes(slug) && (
        <rect x="40" y="50" width="240" height="150" rx="6" fill="none" stroke={accent} strokeOpacity="0.6" />
      )}
    </svg>
  );
}

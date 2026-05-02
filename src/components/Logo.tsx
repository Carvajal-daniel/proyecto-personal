export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="alt-g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <path
          d="M16 2 L29 9.5 V22.5 L16 30 L3 22.5 V9.5 Z"
          fill="url(#alt-g)"
        />
        <path
          d="M16 10 L21.5 21 H10.5 Z"
          fill="white"
          fillOpacity="0.95"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">Altair</span>
    </div>
  );
}

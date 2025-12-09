"use client"

export function AnimatedLogo({ size = "default" }: { size?: "default" | "large" }) {
  const dimensions = size === "large" ? "h-10 w-10" : "h-8 w-8"
  const innerDimensions = size === "large" ? "h-6 w-6" : "h-5 w-5"

  return (
    <div className={`relative ${dimensions} flex items-center justify-center`}>
      {/* Outer rotating ring */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_8s_linear_infinite]`}
        style={{
          borderTopColor: "hsl(var(--primary))",
          borderRightColor: "transparent",
        }}
      />

      {/* Pulsing glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />

      {/* Inner static circle with logo */}
      <div className={`relative ${innerDimensions} rounded-full bg-primary flex items-center justify-center`}>
        {/* Stylized P with data wave */}
        <svg viewBox="0 0 24 24" fill="none" className="h-3/4 w-3/4" xmlns="http://www.w3.org/2000/svg">
          {/* Letter P */}
          <path
            d="M7 4h6a4 4 0 0 1 0 8H7V4z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary-foreground"
          />
          <path d="M7 4v16" stroke="currentColor" strokeWidth="2" className="text-primary-foreground" />
          {/* Animated wave/data line */}
          <path
            d="M10 16 L12 14 L14 16 L16 13 L18 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-foreground animate-[pulse_2s_ease-in-out_infinite]"
          />
        </svg>
      </div>

      {/* Orbiting dot */}
      <div
        className="absolute h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_2px_hsl(var(--primary))]"
        style={{
          animation: "orbit 4s linear infinite",
        }}
      />

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(${size === "large" ? "18px" : "14px"}) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(${size === "large" ? "18px" : "14px"}) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  )
}

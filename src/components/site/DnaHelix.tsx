import { useEffect, useRef } from "react";

interface DnaHelixProps {
  className?: string;
  density?: number;
  speed?: number;
  /** Visual mode: full helix sculpture, or particle field */
  variant?: "helix" | "field";
}

/**
 * Animated SVG DNA-inspired helix. Pure CSS/SVG, no WebGL — fast & elegant.
 * Two intertwined sine waves with rungs that fade based on depth.
 */
export function DnaHelix({ className, density = 38, speed = 1, variant = "helix" }: DnaHelixProps) {
  const ref = useRef<SVGSVGElement>(null);
  const tRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      tRef.current += dt * speed;
      const svg = ref.current;
      if (svg) {
        const t = tRef.current;
        svg.style.setProperty("--t", String(t));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  if (variant === "field") {
    // particle field
    const points = Array.from({ length: density }, (_, i) => {
      const x = (i * 53) % 100;
      const y = (i * 37) % 100;
      const r = 0.6 + ((i * 13) % 10) / 10;
      return { x, y, r, i };
    });
    return (
      <svg ref={ref} className={className} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <defs>
          <radialGradient id="dot-g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--teal-sci)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--teal-sci)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {points.map((p) => (
          <circle
            key={p.i}
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill="url(#dot-g)"
            style={{
              transformOrigin: `${p.x}px ${p.y}px`,
              animation: `float-y ${4 + (p.i % 5)}s var(--ease-lux) ${(p.i % 7) * 0.3}s infinite`,
            }}
          />
        ))}
      </svg>
    );
  }

  // helix
  const rungs = Array.from({ length: density }, (_, i) => i);

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 400 800"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="strand-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--teal-sci)" />
          <stop offset="100%" stopColor="var(--emerald-deep)" />
        </linearGradient>
        <linearGradient id="strand-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--dna-blue)" />
          <stop offset="100%" stopColor="var(--emerald-deep)" />
        </linearGradient>
        <radialGradient id="bead" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.95" />
          <stop offset="60%" stopColor="var(--teal-sci)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--teal-sci)" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <g className="animate-helix-drift" style={{ transformOrigin: "200px 400px" }}>
        {rungs.map((i) => {
          const yT = i / (density - 1);
          const y = yT * 760 + 20;
          const phase = yT * Math.PI * 6;
          const ax = 200 + Math.sin(phase) * 110;
          const bx = 200 + Math.sin(phase + Math.PI) * 110;
          const depth = (Math.cos(phase) + 1) / 2; // 0..1
          const op = 0.25 + depth * 0.75;
          return (
            <g key={i} style={{ opacity: op }}>
              <line x1={ax} y1={y} x2={bx} y2={y} stroke="var(--emerald-deep)" strokeOpacity="0.25" strokeWidth="1" />
              <circle cx={ax} cy={y} r={3 + depth * 2.5} fill="url(#bead)" filter="url(#glow)" />
              <circle cx={bx} cy={y} r={3 + depth * 2.5} fill="url(#bead)" filter="url(#glow)" />
            </g>
          );
        })}

        {/* continuous strands */}
        {(() => {
          const steps = 200;
          const pathA: string[] = [];
          const pathB: string[] = [];
          for (let i = 0; i <= steps; i++) {
            const yT = i / steps;
            const y = yT * 760 + 20;
            const phase = yT * Math.PI * 6;
            const ax = 200 + Math.sin(phase) * 110;
            const bx = 200 + Math.sin(phase + Math.PI) * 110;
            pathA.push(`${i === 0 ? "M" : "L"}${ax.toFixed(2)},${y.toFixed(2)}`);
            pathB.push(`${i === 0 ? "M" : "L"}${bx.toFixed(2)},${y.toFixed(2)}`);
          }
          return (
            <>
              <path d={pathA.join(" ")} stroke="url(#strand-a)" strokeWidth="2.5" strokeLinecap="round" />
              <path d={pathB.join(" ")} stroke="url(#strand-b)" strokeWidth="2.5" strokeLinecap="round" />
            </>
          );
        })()}
      </g>
    </svg>
  );
}

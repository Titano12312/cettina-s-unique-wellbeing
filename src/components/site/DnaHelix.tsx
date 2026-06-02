import { memo, useMemo } from "react";

interface DnaHelixProps {
  className?: string;
  density?: number;
  speed?: number;
  variant?: "helix" | "field";
}

/**
 * Animated SVG DNA-inspired helix.
 * Pure SVG + CSS animations (no rAF, no per-element filters) for max perf.
 */
function DnaHelixBase({ className, density = 28, variant = "helix" }: DnaHelixProps) {
  if (variant === "field") {
    const points = useMemo(() => {
      const cap = Math.min(density, 36);
      return Array.from({ length: cap }, (_, i) => ({
        x: (i * 53) % 100,
        y: (i * 37) % 100,
        r: 0.6 + ((i * 13) % 10) / 10,
        d: (i % 7) * 0.3,
        s: 4 + (i % 5),
        i,
      }));
    }, [density]);

    return (
      <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
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
              animation: `float-y ${p.s}s var(--ease-lux) ${p.d}s infinite`,
              willChange: "transform",
            }}
          />
        ))}
      </svg>
    );
  }

  // helix - precompute paths/rungs (memoized; no rAF)
  const cap = Math.min(density, 32);
  const { rungs, pathA, pathB } = useMemo(() => {
    const rungs = [] as { y: number; ax: number; bx: number; op: number; r: number }[];
    for (let i = 0; i < cap; i++) {
      const yT = i / (cap - 1);
      const y = yT * 760 + 20;
      const phase = yT * Math.PI * 6;
      const ax = 200 + Math.sin(phase) * 110;
      const bx = 200 + Math.sin(phase + Math.PI) * 110;
      const depth = (Math.cos(phase) + 1) / 2;
      rungs.push({ y, ax, bx, op: 0.25 + depth * 0.75, r: 3 + depth * 2.5 });
    }
    const steps = 80;
    const a: string[] = [];
    const b: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const yT = i / steps;
      const y = yT * 760 + 20;
      const phase = yT * Math.PI * 6;
      const ax = 200 + Math.sin(phase) * 110;
      const bx = 200 + Math.sin(phase + Math.PI) * 110;
      a.push(`${i === 0 ? "M" : "L"}${ax.toFixed(2)},${y.toFixed(2)}`);
      b.push(`${i === 0 ? "M" : "L"}${bx.toFixed(2)},${y.toFixed(2)}`);
    }
    return { rungs, pathA: a.join(" "), pathB: b.join(" ") };
  }, [cap]);

  return (
    <svg className={className} viewBox="0 0 400 800" fill="none" aria-hidden>
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
      </defs>

      <g
        className="animate-helix-drift"
        style={{ transformOrigin: "200px 400px", willChange: "transform" }}
      >
        {rungs.map((r, i) => (
          <g key={i} style={{ opacity: r.op }}>
            <line x1={r.ax} y1={r.y} x2={r.bx} y2={r.y} stroke="var(--emerald-deep)" strokeOpacity="0.25" strokeWidth="1" />
            <circle cx={r.ax} cy={r.y} r={r.r} fill="url(#bead)" />
            <circle cx={r.bx} cy={r.y} r={r.r} fill="url(#bead)" />
          </g>
        ))}
        <path d={pathA} stroke="url(#strand-a)" strokeWidth="2.5" strokeLinecap="round" />
        <path d={pathB} stroke="url(#strand-b)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export const DnaHelix = memo(DnaHelixBase);

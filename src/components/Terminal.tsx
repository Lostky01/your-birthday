import { useEffect, useState } from "react";

interface TerminalProps {
  onComplete: () => void;
  delayMs?: number; // optional delay before starting terminal
}

const Terminal: React.FC<TerminalProps> = ({ onComplete, delayMs = 200 }) => {
  const lines = [
    "falah-os: initializing core modules...",
    "↳ loading personality-engine (stable build)...",
    "↳ syncing mood drivers... ok",
    "↳ optimizing serotonin pipeline...",
    "↳ enabling anti-drama firewall...",
    "↳ calibrating neon-pink & soft-blue palette...",
    "system: connecting to happiness-network...",
    "warning: detected rising joy levels... (acceptable)",
    "ai-core: generating birthday protocols...",
    "ai-core: compiling warm wishes...",
    "kernel: preparing celebration subsystem...",
    "bootloader: final checks passed.",
    "system: launch sequence ready.",
    "status: birthday-environment successfully deployed ✔"
  ];

  const [displayed, setDisplayed] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (index < lines.length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => [...prev, lines[index]]);
          setIndex(index + 1);
        }, 600);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => onComplete(), 800);
      }
    }, delayMs);

    return () => clearTimeout(startTimeout);
  }, [index, lines, onComplete, delayMs]);

  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-[#4e2c46] via-[#0a0003] to-black overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 animate-pulse"
        style={{
          background: 'repeating-linear-gradient(to bottom, rgba(0, 255, 0, 0.08) 0px, rgba(0, 255, 0, 0.08) 1px, transparent 2px, transparent 3px)'
        }}
      />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-pink-500/10 via-transparent to-transparent" />
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-[90%] max-w-4xl p-8">
          {displayed.map((line, i) => (
            <div 
              key={i} 
              className="mb-2 text-[hsl(var(--pastel-pink))] font-mono text-lg md:text-xl tracking-wide opacity-0 animate-fadeIn"
              style={{ 
                textShadow: '0 0 10px hsl(var(--pastel-pink)), 0 0 20px hsl(var(--pastel-pink) / 0.5)',
                animationDelay: `${i * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              {line}
            </div>
          ))}
          <div className="inline-block mt-2 text-[hsl(var(--pastel-pink))] text-xl animate-pulse"
            style={{ textShadow: '0 0 10px hsl(var(--pastel-pink))' }}
          >
            ▌
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
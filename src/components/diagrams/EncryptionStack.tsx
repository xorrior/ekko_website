"use client";

import { motion } from "framer-motion";

interface Layer {
  name: string;
  protocol: string;
  purpose: string;
  color: "cyan" | "purple" | "blue";
}

const colorMap = {
  cyan: { bg: "bg-accent-cyan/8", border: "border-accent-cyan/25", text: "text-accent-cyan", glow: "shadow-accent-cyan/10" },
  purple: { bg: "bg-accent-purple/8", border: "border-accent-purple/25", text: "text-accent-purple", glow: "shadow-accent-purple/10" },
  blue: { bg: "bg-accent-blue/8", border: "border-accent-blue/25", text: "text-accent-blue", glow: "shadow-accent-blue/10" },
};

export default function EncryptionStack({ layers, label }: { layers: Layer[]; label?: string }) {
  return (
    <div className="my-6">
      {label && <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">{label}</h4>}
      <div className="space-y-2">
        {layers.map((layer, i) => {
          const c = colorMap[layer.color];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative rounded-xl ${c.bg} border ${c.border} p-4 shadow-md ${c.glow}`}
              style={{ marginLeft: `${i * 12}px`, marginRight: `${(layers.length - 1 - i) * 12}px` }}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  {/* Lock icon */}
                  <div className={`w-8 h-8 rounded-lg ${c.bg} flex items-center justify-center shrink-0`}>
                    <svg className={`w-4 h-4 ${c.text}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${c.text}`}>{layer.name}</p>
                    <p className="text-xs text-muted">{layer.purpose}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-muted bg-background/50 px-2 py-1 rounded-md">{layer.protocol}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Arrow pointing inward to show nesting */}
      <div className="flex justify-center mt-3">
        <span className="text-xs text-muted flex items-center gap-1">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Your message (innermost layer)
        </span>
      </div>
    </div>
  );
}

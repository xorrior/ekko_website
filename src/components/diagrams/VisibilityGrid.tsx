"use client";

import { motion } from "framer-motion";

interface VisibilityItem {
  label: string;
  visible: boolean;
  note?: string;
}

export default function VisibilityGrid({ items, title }: { items: VisibilityItem[]; title?: string }) {
  return (
    <div className="my-6">
      {title && <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">{title}</h4>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            className={`flex items-center gap-3 p-3 rounded-xl border ${
              item.visible
                ? "bg-emerald-400/5 border-emerald-400/20"
                : "bg-red-400/5 border-orange-400/20"
            }`}
          >
            {/* Icon */}
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              item.visible ? "bg-emerald-400/15" : "bg-orange-400/15"
            }`}>
              {item.visible ? (
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              )}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              {item.note && <p className="text-[10px] text-muted">{item.note}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";

const platforms = [
  {
    name: "iOS",
    subtitle: "iPhone & iPad",
    storeLabel: "Download on the App Store",
    storeUrl: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    name: "Android",
    subtitle: "All Android devices",
    storeLabel: "Get it on Google Play",
    storeUrl: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 006 7h12c0-2.21-1.2-4.15-2.97-5.18-.15-.09-.32-.27-.5-.66zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
      </svg>
    ),
  },
  {
    name: "macOS",
    subtitle: "Native desktop app",
    storeLabel: "Download for Mac",
    storeUrl: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2h-6l1 2h2v1H7v-1h2l1-2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v10h16V6H4z" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Install Ekko",
    desc: "Download from your app store. No account creation, no email verification.",
  },
  {
    num: "02",
    title: "Identity Generated",
    desc: "Your cryptographic identity is created instantly on your device. It never leaves.",
  },
  {
    num: "03",
    title: "Add Contacts",
    desc: "Meet someone in person and scan each other's QR codes. Or discover contacts nearby via Bluetooth.",
  },
  {
    num: "04",
    title: "Start Messaging",
    desc: "Ekko automatically selects the best transport. Your messages are encrypted end-to-end, always.",
  },
];

export default function DownloadPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Get <span className="gradient-text">Ekko</span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Available on iOS, Android, and macOS. Windows coming soon. No
              account needed — install and start messaging.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.12}>
                <motion.a
                  href={p.storeUrl}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="block h-full gradient-border cursor-pointer"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-surface flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mb-6">
                      {p.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
                    <p className="text-sm text-muted mb-6">{p.subtitle}</p>
                    <div className="mt-auto w-full">
                      <span className="block w-full px-6 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-background text-sm font-semibold text-center">
                        {p.storeLabel}
                      </span>
                    </div>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple text-sm">
              <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
              Windows version in development
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 md:py-28 bg-surface/50">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Up and Running in <span className="gradient-text">Seconds</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-2xl bg-background border border-border">
                  <span className="text-3xl font-extrabold gradient-text shrink-0">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32 text-center">
        <AnimatedSection>
          <p className="text-2xl md:text-3xl font-bold mb-2">
            Your messages. Your device.
          </p>
          <p className="text-xl gradient-text font-bold">No middlemen.</p>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";

const transports = [
  {
    name: "Bluetooth",
    desc: "Direct device-to-device messaging within 30 feet. No internet needed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "DHT Network",
    desc: "Messages stored on a global peer-to-peer network. No central server.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    name: "Tor Onion",
    desc: "Anonymous connections through 3 encrypted hops. IP addresses hidden.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "QUIC Relay",
    desc: "NAT-busting P2P connections. Punches through firewalls.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Mesh Gossip",
    desc: "Devices relay encrypted messages for others. Extends reach everywhere.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" />
        <path d="M5 8v2a4 4 0 004 4h6a4 4 0 004-4V8M12 14v2" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "No Accounts",
    desc: "Your identity is a cryptographic key generated on your device. No sign-up, no email, no phone number.",
    gradient: "from-accent-cyan to-accent-blue",
  },
  {
    title: "End-to-End Encrypted",
    desc: "Every message encrypted with ChaCha20-Poly1305. Per-message forward secrecy with ephemeral ECDH.",
    gradient: "from-accent-purple to-pink-500",
  },
  {
    title: "Works Offline",
    desc: "Bluetooth messaging works with no internet. Meet in person, exchange messages directly.",
    gradient: "from-accent-blue to-accent-purple",
  },
  {
    title: "Metadata Protected",
    desc: "No server knows who you talk to, when, or how often. Your social graph stays private.",
    gradient: "from-emerald-400 to-accent-cyan",
  },
];

const comparisonData = [
  { feature: "Requires Account", ekko: "No", whatsapp: "Phone", signal: "Phone", imessage: "Apple ID" },
  { feature: "Central Server", ekko: "None", whatsapp: "Meta", signal: "Signal", imessage: "Apple" },
  { feature: "E2E Encryption", ekko: "Yes", whatsapp: "Yes", signal: "Yes", imessage: "Yes" },
  { feature: "Metadata Protection", ekko: "Yes", whatsapp: "No", signal: "Partial", imessage: "No" },
  { feature: "Works Offline", ekko: "Yes (BLE)", whatsapp: "No", signal: "No", imessage: "No" },
  { feature: "Mesh Networking", ekko: "Yes", whatsapp: "No", signal: "No", imessage: "No" },
  { feature: "Anonymous Routing", ekko: "Yes (Tor)", whatsapp: "No", signal: "No", imessage: "No" },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-40 md:pb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              Decentralized & Encrypted
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]">
              <span className="block">Messaging</span>
              <span className="block mt-2">
                Without{" "}
                <span className="gradient-text text-glow-cyan">Middlemen</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
            >
              Messages travel directly between devices through Bluetooth, the
              internet, and anonymous networks. No servers. No accounts. No data
              collection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/download"
                className="px-8 py-3.5 text-base font-semibold rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-background hover:shadow-lg hover:shadow-accent-cyan/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Download Ekko Chat
              </Link>
              <Link
                href="/docs"
                className="px-8 py-3.5 text-base font-semibold rounded-full border border-border text-foreground hover:bg-surface-light transition-all hover:border-accent-cyan/30"
              >
                Read the Docs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transports */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Five Paths. <span className="gradient-text">No Infrastructure Required.</span>
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              From fully peer-to-peer connections like BLE to lightweight relay services,
              Ekko Chat automatically selects the best available path. You never need to run a server—your messages always find a way.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {transports.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full p-6 rounded-2xl bg-surface border border-border hover:border-accent-cyan/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mb-4 group-hover:bg-accent-cyan/20 transition-colors">
                    {t.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{t.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 md:py-32 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Privacy by <span className="gradient-text">Design</span>
            </h2>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Not privacy by policy. Every architectural decision puts your
              security first.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="gradient-border h-full">
                  <div className="relative h-full p-8 rounded-2xl bg-surface">
                    <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${f.gradient} mb-6`} />
                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                    <p className="text-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              How Ekko Chat <span className="gradient-text">Compares</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl border border-border overflow-hidden bg-surface">
              <div className="overflow-x-auto">
                <table className="docs-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th className="!text-accent-cyan">Ekko Chat</th>
                      <th>WhatsApp</th>
                      <th>Signal</th>
                      <th>iMessage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row) => (
                      <tr key={row.feature}>
                        <td className="font-medium">{row.feature}</td>
                        <td className="text-accent-cyan font-semibold">{row.ekko}</td>
                        <td className="text-muted">{row.whatsapp}</td>
                        <td className="text-muted">{row.signal}</td>
                        <td className="text-muted">{row.imessage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[120px]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Take Back Your <span className="gradient-text">Conversations</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
              Install Ekko Chat. Your identity is generated automatically. Meet a
              contact, scan QR codes, and start messaging. No sign-up needed.
            </p>
            <Link
              href="/download"
              className="inline-flex px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-background hover:shadow-xl hover:shadow-accent-cyan/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Ekko Chat Now
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}

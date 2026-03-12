"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import FlowDiagram from "@/components/diagrams/FlowDiagram";
import SequenceDiagram from "@/components/diagrams/SequenceDiagram";
import EncryptionStack from "@/components/diagrams/EncryptionStack";
import RiskGrid from "@/components/diagrams/RiskGrid";
import VisibilityGrid from "@/components/diagrams/VisibilityGrid";
import SecurityMatrix from "@/components/diagrams/SecurityMatrix";
import AttackScenario from "@/components/diagrams/AttackScenario";
import Link from "next/link";

function DocSection({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <AnimatedSection>
      <section id={id} className="scroll-mt-24 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
          <div className="w-8 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
          {title}
        </h2>
        {children}
      </section>
    </AnimatedSection>
  );
}

const tocItems = [
  { id: "overview", label: "Overview" },
  { id: "crypto-primitives", label: "Cryptographic Primitives" },
  { id: "encryption-pipeline", label: "Encryption Pipeline" },
  { id: "ble", label: "BLE Transport" },
  { id: "dht", label: "DHT Transport" },
  { id: "tor", label: "Tor P2P" },
  { id: "iroh", label: "iroh (QUIC)" },
  { id: "gossip", label: "BLE Gossip" },
  { id: "security-matrix", label: "Security Matrix" },
  { id: "attack-surface", label: "Attack Surface" },
];

export default function TransportSecurityPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12 md:pt-32 md:pb-16">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/docs" className="text-muted hover:text-accent-cyan text-sm transition-colors">
                Docs
              </Link>
              <span className="text-muted">/</span>
              <span className="px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-xs font-semibold uppercase tracking-wider">
                Technical
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Transport <span className="gradient-text">Security</span>
            </h1>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed">
              Complete technical documentation of Ekko Chat&apos;s cryptographic architecture,
              transport-level security, and attack surface analysis.
            </p>
            <p className="mt-2 text-sm text-muted">Version 1.0 &middot; March 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex gap-12">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24">
              <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">On this page</h4>
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-muted hover:text-accent-cyan transition-colors py-1 pl-3 border-l border-border hover:border-accent-cyan"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-4xl">

            {/* ─── OVERVIEW ─── */}
            <DocSection title="Overview" id="overview">
              <p className="text-muted leading-relaxed mb-6">
                Ekko Chat is a censorship-resistant messaging application that delivers messages
                through multiple independent transport channels. All transports share a common
                application-level encryption layer.
              </p>

              {/* Transport priority visual */}
              <div className="rounded-2xl bg-surface border border-border p-6 my-6">
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Transport Priority (automatic fallback)</h4>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { label: "BLE", color: "bg-accent-cyan", desc: "Fastest" },
                    { label: "iroh", color: "bg-accent-blue", desc: "NAT punch" },
                    { label: "Tor", color: "bg-accent-purple", desc: "Anonymous" },
                    { label: "DHT", color: "bg-amber-400", desc: "Fallback" },
                  ].map((t, i) => (
                    <div key={t.label} className="flex items-center gap-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border"
                      >
                        <div className={`w-2.5 h-2.5 rounded-full ${t.color}`} />
                        <span className="text-sm font-semibold">{t.label}</span>
                        <span className="text-[10px] text-muted">{t.desc}</span>
                      </motion.div>
                      {i < 3 && (
                        <svg className="w-4 h-4 text-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-4 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-accent-cyan shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  Messages are encrypted once at the application layer before being handed to any transport.
                </p>
              </div>
            </DocSection>

            {/* ─── CRYPTO PRIMITIVES ─── */}
            <DocSection title="Core Cryptographic Primitives" id="crypto-primitives">
              <p className="text-muted leading-relaxed mb-6">
                All cryptographic operations are implemented in Rust using audited crates. No custom cryptography.
              </p>

              {/* Key types as visual cards */}
              <h3 className="text-lg font-semibold mb-4">Key Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                {[
                  { name: "Identity", algo: "Ed25519", lifetime: "Device lifetime", purpose: "Signing & authentication", color: "accent-cyan", icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                  )},
                  { name: "Exchange", algo: "X25519", lifetime: "Device lifetime", purpose: "Static key agreement", color: "accent-purple", icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )},
                  { name: "Ephemeral", algo: "X25519", lifetime: "Single message", purpose: "Forward secrecy", color: "accent-blue", icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )},
                ].map((k) => (
                  <motion.div
                    key={k.name}
                    whileHover={{ y: -2 }}
                    className={`p-5 rounded-2xl bg-surface border border-border hover:border-${k.color}/30 transition-colors`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-${k.color}/10 text-${k.color} flex items-center justify-center mb-3`}>
                      {k.icon}
                    </div>
                    <h4 className="font-bold text-foreground">{k.name}</h4>
                    <p className="text-xs font-mono text-accent-cyan mt-1">{k.algo}</p>
                    <div className="mt-3 space-y-1">
                      <p className="text-xs text-muted"><span className="text-foreground/70">Lifetime:</span> {k.lifetime}</p>
                      <p className="text-xs text-muted"><span className="text-foreground/70">Purpose:</span> {k.purpose}</p>
                    </div>
                    <p className="text-[10px] font-mono text-muted mt-2">32-byte secret + 32-byte public</p>
                  </motion.div>
                ))}
              </div>

              {/* Algorithms as compact grid */}
              <h3 className="text-lg font-semibold mb-4">Algorithms</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-8">
                {[
                  { fn: "Encryption", algo: "ChaCha20-Poly1305", detail: "256-bit key, 96-bit nonce" },
                  { fn: "Key Agreement", algo: "X25519 ECDH", detail: "32-byte shared secret" },
                  { fn: "Key Derivation", algo: "HKDF-SHA256", detail: "RFC 5869" },
                  { fn: "Signatures", algo: "Ed25519", detail: "64-byte deterministic" },
                  { fn: "Fingerprints", algo: "BLAKE2b-256", detail: "128 bits displayed" },
                  { fn: "Memory Cleanup", algo: "Zeroize", detail: "ZeroizeOnDrop trait" },
                ].map((a) => (
                  <div key={a.fn} className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border">
                    <div className="w-2 h-8 rounded-full bg-gradient-to-b from-accent-cyan to-accent-purple shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted">{a.fn}</p>
                      <p className="text-sm font-semibold text-foreground truncate">{a.algo}</p>
                      <p className="text-[10px] text-muted">{a.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Crate deps as pills */}
              <h3 className="text-lg font-semibold mb-3">Rust Crate Dependencies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "x25519-dalek", purpose: "Key agreement" },
                  { name: "ed25519-dalek", purpose: "Signatures" },
                  { name: "chacha20poly1305", purpose: "AEAD" },
                  { name: "hkdf + sha2", purpose: "KDF" },
                  { name: "snow", purpose: "Noise protocol" },
                  { name: "rand", purpose: "CSPRNG" },
                  { name: "zeroize", purpose: "Memory cleanup" },
                ].map((c) => (
                  <div key={c.name} className="px-3 py-1.5 rounded-full bg-surface border border-border text-xs">
                    <span className="font-mono text-accent-cyan">{c.name}</span>
                    <span className="text-muted ml-1.5">{c.purpose}</span>
                  </div>
                ))}
              </div>
            </DocSection>

            {/* ─── ENCRYPTION PIPELINE ─── */}
            <DocSection title="Message Encryption Pipeline" id="encryption-pipeline">
              <p className="text-muted leading-relaxed mb-2">
                Every message, regardless of transport, passes through this pipeline.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Encryption flow */}
                <div>
                  <FlowDiagram
                    title="Encryption (Sender)"
                    steps={[
                      { label: "Plaintext Message", detail: "content_type, content, filename, metadata", color: "blue" },
                      { label: "Generate Message ID", detail: "16 random bytes from OS CSPRNG", color: "cyan" },
                      { label: "Generate Ephemeral X25519 Keypair", detail: "Fresh keypair created — destroyed after use", color: "cyan" },
                      { label: "ECDH Key Agreement", detail: "DH(ephemeral_secret, recipient_public) → 32-byte shared secret", color: "purple" },
                      { label: "HKDF-SHA256 Key Derivation", detail: "salt=message_id, info=\"DeadDrop-v1-message-key\" → 32-byte key", color: "purple" },
                      { label: "ChaCha20-Poly1305 Encrypt", detail: "random 12-byte nonce, AAD=message_id → ciphertext + 16-byte auth tag", color: "emerald" },
                      { label: "Ed25519 Sign", detail: "Sign(identity_secret, message_id || ciphertext) → 64-byte signature", color: "emerald" },
                      { label: "Encrypted Message", detail: "message_id + ephemeral_pub + nonce + ciphertext + timestamp + signature", color: "blue" },
                    ]}
                  />
                </div>

                {/* Decryption flow */}
                <div>
                  <FlowDiagram
                    title="Decryption (Recipient)"
                    steps={[
                      { label: "Encrypted Message Received", detail: "From any transport (BLE, DHT, Tor, iroh)", color: "blue" },
                      { label: "Verify Ed25519 Signature", detail: "Verify(sender_public, message_id || ciphertext, signature) — reject if invalid", color: "emerald" },
                      { label: "ECDH Key Recovery", detail: "DH(recipient_secret, ephemeral_public) → same 32-byte shared secret", color: "purple" },
                      { label: "HKDF-SHA256 Key Derivation", detail: "Same salt + info → same 32-byte encryption key", color: "purple" },
                      { label: "ChaCha20-Poly1305 Decrypt", detail: "Verify auth tag, decrypt ciphertext → reject if tag fails", color: "cyan" },
                      { label: "Plaintext Message", detail: "Original content recovered and stored locally", color: "blue" },
                    ]}
                  />
                </div>
              </div>

              {/* Forward Secrecy visual */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-surface border border-accent-cyan/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-accent-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <h4 className="font-semibold text-accent-cyan">Forward Secrecy</h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    Each message generates a fresh ephemeral key. After the DH operation, the ephemeral secret
                    is consumed by Rust&apos;s ownership system and zeroized. Past ciphertexts cannot be recovered.
                  </p>
                </div>
                <div className="rounded-xl bg-surface border border-accent-purple/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-accent-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                    </svg>
                    <h4 className="font-semibold text-accent-purple">Limitation</h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    No Double Ratchet — each message is independently encrypted. If the recipient&apos;s exchange key
                    is compromised before decryption, in-transit messages are vulnerable.
                  </p>
                </div>
              </div>
            </DocSection>

            {/* ─── BLE ─── */}
            <DocSection title="BLE (Bluetooth Low Energy)" id="ble">
              <p className="text-muted leading-relaxed mb-4">
                Direct device-to-device messaging within ~10m. No network infrastructure required.
              </p>

              <EncryptionStack
                label="Encryption Layers"
                layers={[
                  { name: "Transport Layer", protocol: "Noise_XX_25519_ChaChaPoly_SHA256", purpose: "Session encryption, mutual authentication", color: "cyan" },
                  { name: "Application Layer", protocol: "ChaCha20-Poly1305 + Ed25519", purpose: "Per-message encryption & signing", color: "purple" },
                ]}
              />

              <h3 className="text-lg font-semibold mt-8 mb-3">Noise XX Handshake</h3>
              <SequenceDiagram
                leftLabel="Alice (Initiator)"
                rightLabel="Bob (Responder)"
                messages={[
                  { from: "left", label: "Ephemeral public key", detail: "32 bytes, unencrypted", encrypted: false },
                  { from: "right", label: "Ephemeral + Static key", detail: "80 bytes, partially encrypted with DH(e,e)", encrypted: true },
                  { from: "left", label: "Static key", detail: "48 bytes, fully encrypted", encrypted: true },
                ]}
                result="Symmetric transport keys established (one per direction)"
              />

              <h3 className="text-lg font-semibold mt-8 mb-1">Message Exchange Protocol</h3>
              <p className="text-sm text-muted mb-4">After Noise handshake, an application-level exchange runs over the encrypted channel:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { step: "1", label: "MsgCount", desc: "Announce queued messages" },
                  { step: "2", label: "MsgData", desc: "Transmit encrypted messages" },
                  { step: "3", label: "MsgAck", desc: "Per-message acknowledgment" },
                  { step: "4", label: "Complete", desc: "Signal exchange done" },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface border border-border">
                    <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">{s.step}</span>
                    <div>
                      <p className="text-xs font-semibold font-mono text-foreground">{s.label}</p>
                      <p className="text-[10px] text-muted">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold mt-4 mb-1">Security Risks</h3>
              <RiskGrid risks={[
                { name: "BLE Range Limitation", severity: "Low", note: "~10m range limits interception to physical proximity" },
                { name: "BLE Advertising Metadata", severity: "Low", note: "Rotating IDs derived via HKDF prevent device tracking" },
                { name: "Relay Attack (MITM)", severity: "Low", note: "Noise XX provides mutual authentication — MITM requires real-time key substitution" },
                { name: "Radio Jamming / DoS", severity: "Medium", note: "Radio-level jamming can prevent BLE communication; no mitigation possible at protocol level" },
              ]} />
            </DocSection>

            {/* ─── DHT ─── */}
            <DocSection title="DHT (Distributed Hash Table)" id="dht">
              <p className="text-muted leading-relaxed mb-4">
                Messages encrypted and published to the public BitTorrent Mainline DHT as BEP44 mutable items.
              </p>

              {/* DHT architecture visual */}
              <div className="rounded-2xl bg-surface border border-border p-6 my-6">
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">How DHT Delivery Works</h4>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  {/* Sender */}
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background border border-border min-w-[120px]">
                    <svg className="w-8 h-8 text-accent-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="18" r="1" />
                    </svg>
                    <span className="text-xs font-semibold">Sender</span>
                  </div>
                  {/* Arrow */}
                  <div className="flex flex-col items-center gap-1">
                    <svg className="w-8 h-8 text-accent-cyan md:rotate-0 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[10px] text-muted">Encrypt & Publish</span>
                  </div>
                  {/* DHT Cloud */}
                  <div className="flex-1 p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 text-center">
                    <div className="flex justify-center gap-1 mb-2">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0.3 }}
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ delay: i * 0.15, duration: 2, repeat: Infinity }}
                          className="w-3 h-3 rounded-full bg-accent-cyan/40"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-semibold text-accent-cyan">BitTorrent Mainline DHT</p>
                    <p className="text-[10px] text-muted mt-1">Thousands of independent nodes worldwide</p>
                    <p className="text-[10px] text-muted">Slots 0-100 &middot; BEP44 mutable items</p>
                  </div>
                  {/* Arrow */}
                  <div className="flex flex-col items-center gap-1">
                    <svg className="w-8 h-8 text-accent-purple md:rotate-0 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[10px] text-muted">Poll & Decrypt</span>
                  </div>
                  {/* Recipient */}
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background border border-border min-w-[120px]">
                    <svg className="w-8 h-8 text-accent-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="18" r="1" />
                    </svg>
                    <span className="text-xs font-semibold">Recipient</span>
                  </div>
                </div>

                {/* Key derivation mini-diagram */}
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-muted mb-2 font-semibold">Key Derivation Chain</p>
                  <div className="flex flex-wrap items-center gap-2 text-[10px]">
                    <span className="px-2 py-1 rounded bg-accent-purple/10 text-accent-purple font-mono">X25519 public key</span>
                    <span className="text-muted">&rarr;</span>
                    <span className="px-2 py-1 rounded bg-accent-blue/10 text-accent-blue font-mono">SHA-512</span>
                    <span className="text-muted">&rarr;</span>
                    <span className="px-2 py-1 rounded bg-accent-cyan/10 text-accent-cyan font-mono">Ed25519 seed</span>
                    <span className="text-muted">&rarr;</span>
                    <span className="px-2 py-1 rounded bg-emerald-400/10 text-emerald-400 font-mono">BEP44 signing key</span>
                  </div>
                </div>
              </div>

              <RiskGrid risks={[
                { name: "Slot Enumeration", severity: "Medium", note: "Observers can correlate slots 0-100 to a single recipient by access patterns" },
                { name: "Volume Analysis", severity: "Medium", note: "Number of occupied slots reveals approximate message count" },
                { name: "IP Address Exposure", severity: "Medium", note: "DHT participation reveals the device's IP address to DHT peers" },
                { name: "Timing Correlation", severity: "Medium", note: "Publish/fetch timing can correlate sender and recipient" },
                { name: "No Confidentiality at Rest", severity: "Low", note: "Mitigated by application-level encryption; DHT nodes see only ciphertext" },
                { name: "Stale Message Replay", severity: "Low", note: "48h TTL, message ID dedup, and BEP44 sequence numbers prevent replay" },
              ]} />
            </DocSection>

            {/* ─── TOR ─── */}
            <DocSection title="Tor P2P (Onion-Routed Peer-to-Peer)" id="tor">
              <p className="text-muted leading-relaxed mb-4">
                Devices create Tor v3 onion services and establish direct WebSocket connections through the Tor network.
              </p>

              <EncryptionStack
                label="Encryption Layers (3 deep)"
                layers={[
                  { name: "Network Layer", protocol: "Tor v3 onion routing (3-hop)", purpose: "Anonymity, circuit encryption", color: "purple" },
                  { name: "Transport Layer", protocol: "WebSocket over TCP", purpose: "Message framing", color: "blue" },
                  { name: "Application Layer", protocol: "ChaCha20-Poly1305 + Ed25519", purpose: "Per-message encryption & signing", color: "cyan" },
                ]}
              />

              <div className="rounded-xl bg-surface border border-accent-cyan/20 p-4 my-6 flex items-center gap-3">
                <svg className="w-5 h-5 text-accent-cyan shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p className="text-sm text-muted">
                  <strong className="text-accent-cyan">No exit nodes used.</strong> All connections are .onion-to-.onion, remaining entirely within the Tor network.
                </p>
              </div>

              <h3 className="text-lg font-semibold mt-8 mb-3">Connection Protocol</h3>
              <SequenceDiagram
                leftLabel="Client"
                rightLabel="Server (.onion)"
                messages={[
                  { from: "left", label: "SOCKS5 tunnel", detail: "Routes through Tor to .onion:80", encrypted: true },
                  { from: "right", label: "WebSocket upgrade", detail: "HTTP 101 Switching Protocols", encrypted: true },
                  { from: "left", label: "Ed25519 identity key", detail: "32-byte public key", encrypted: true },
                  { from: "right", label: "Ed25519 identity key", detail: "Server sends own public key", encrypted: true },
                  { from: "right", label: "Nonce challenge", detail: "32-byte random nonce", encrypted: true },
                  { from: "left", label: "Nonce response", detail: "Echo nonce back", encrypted: true },
                  { from: "right", label: "\"OK\"", detail: "Contact verified", encrypted: true },
                ]}
                result="Authenticated — encrypted messages flow bidirectionally"
              />

              {/* Platform grid */}
              <h3 className="text-lg font-semibold mt-8 mb-3">Platform Implementation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                {[
                  { platform: "iOS", framework: "Tor.framework", method: "ADD_ONION via control port" },
                  { platform: "macOS", framework: "Tor.framework", method: "ADD_ONION via control port" },
                  { platform: "Android", framework: "tor_hidden_service", method: "Automatic" },
                ].map((p) => (
                  <div key={p.platform} className="p-4 rounded-xl bg-surface border border-border text-center">
                    <p className="font-bold text-foreground">{p.platform}</p>
                    <p className="text-xs font-mono text-accent-cyan mt-1">{p.framework}</p>
                    <p className="text-[10px] text-muted mt-1">{p.method}</p>
                    <p className="text-[10px] text-muted">SOCKS5 :9050</p>
                  </div>
                ))}
              </div>

              <RiskGrid risks={[
                { name: "DHT Rendezvous Metadata", severity: "Medium", note: "DHT queries for .onion addresses are not anonymous; DHT peers see the lookup" },
                { name: "Timing Correlation", severity: "Medium", note: "Message timing patterns visible to ISP-level observers watching both endpoints" },
                { name: "Message Size Analysis", severity: "Low", note: "No padding; file transfer sizes are observable at the network level" },
                { name: "Tor Circuit Compromise", severity: "Low", note: "Requires control of both guard and rendezvous point; v3 onion services mitigate" },
              ]} />
            </DocSection>

            {/* ─── IROH ─── */}
            <DocSection title="iroh (QUIC-Based P2P)" id="iroh">
              <p className="text-muted leading-relaxed mb-4">
                QUIC-based P2P from n0.computer with NAT traversal and UDP hole-punching. Custom ALPN
                protocol <code className="text-accent-cyan text-xs font-mono">deaddrop/msg/v1</code>.
              </p>

              <EncryptionStack
                label="Double Encryption"
                layers={[
                  { name: "Transport Layer", protocol: "QUIC / TLS 1.3 / ChaCha20-Poly1305", purpose: "Transport confidentiality via iroh", color: "blue" },
                  { name: "Application Layer", protocol: "ChaCha20-Poly1305 + Ed25519", purpose: "Per-message encryption & signing", color: "cyan" },
                ]}
              />

              <VisibilityGrid
                title="What the Relay Server Can See"
                items={[
                  { label: "Message content", visible: false, note: "Double-encrypted — app layer + QUIC" },
                  { label: "Message metadata", visible: true, note: "Timestamps and sizes" },
                  { label: "Connection patterns", visible: true, note: "EndpointIds reveal who contacts whom" },
                  { label: "IP addresses", visible: true, note: "Both peers' IPs visible" },
                  { label: "Message frequency", visible: true, note: "Timing patterns observable" },
                  { label: "Message decryption", visible: false, note: "Even if QUIC is broken, app-layer protects" },
                ]}
              />

              <RiskGrid risks={[
                { name: "Relay Metadata Visibility", severity: "Medium", note: "n0 relay sees connection patterns and IP addresses of both peers" },
                { name: "IP Address Exposure", severity: "Medium", note: "Both peers' IPs visible to relay; no anonymity layer" },
                { name: "DHT Endpoint Visibility", severity: "Low", note: "Published EndpointIds are publicly queryable on the DHT" },
                { name: "Message Size Analysis", severity: "Low", note: "Packet sizes visible to relay and network observers" },
              ]} />
            </DocSection>

            {/* ─── GOSSIP ─── */}
            <DocSection title="BLE Gossip (Proximity Relay)" id="gossip">
              <p className="text-muted leading-relaxed mb-4">
                After standard BLE exchange, devices relay encrypted messages for third-party recipients using
                the existing Noise-encrypted channel. Relays can&apos;t read or identify recipients.
              </p>

              {/* Visual flow */}
              <div className="rounded-2xl bg-surface border border-border p-6 my-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  {/* Device A */}
                  <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background border border-accent-cyan/20">
                    <svg className="w-8 h-8 text-accent-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="18" r="1" />
                    </svg>
                    <span className="text-xs font-semibold">Device A</span>
                    <span className="text-[10px] text-muted">Has internet</span>
                  </div>
                  {/* BLE waves */}
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1">
                      {[1, 2, 3].map((n) => (
                        <motion.div
                          key={n}
                          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.1, 0.8] }}
                          transition={{ delay: n * 0.2, duration: 1.5, repeat: Infinity }}
                          className="w-2 h-6 rounded-full bg-accent-blue/40"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-accent-blue mt-1">BLE Gossip</span>
                  </div>
                  {/* Device B (relay) */}
                  <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background border border-accent-purple/20">
                    <svg className="w-8 h-8 text-accent-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="18" r="1" />
                    </svg>
                    <span className="text-xs font-semibold">Device B</span>
                    <span className="text-[10px] text-muted">Relay (can&apos;t read)</span>
                  </div>
                  {/* Arrow */}
                  <div className="flex flex-col items-center">
                    <svg className="w-6 h-6 text-muted md:rotate-0 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[10px] text-muted">Later</span>
                  </div>
                  {/* Device C */}
                  <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background border border-emerald-400/20">
                    <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="18" r="1" />
                    </svg>
                    <span className="text-xs font-semibold">Device C</span>
                    <span className="text-[10px] text-muted">Intended recipient</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: "Store Limits", value: "50 MB max, 48-hour TTL", icon: "M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7" },
                  { label: "Acceptance", value: "Probabilistic via bloom filter digests", icon: "M22 11.08V12a10 10 0 11-5.93-9.14" },
                  { label: "Metadata Leakage", value: "None — relay sees only encrypted blobs", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
                  { label: "Chunking", value: "4-byte length prefix + 500-byte chunks", icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" },
                ].map((prop) => (
                  <div key={prop.label} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
                    <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-accent-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d={prop.icon} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-foreground">{prop.label}</span>
                      <p className="text-xs text-muted mt-0.5">{prop.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DocSection>

            {/* ─── SECURITY MATRIX ─── */}
            <DocSection title="Comparative Security Matrix" id="security-matrix">
              <p className="text-muted leading-relaxed mb-6">
                Side-by-side comparison of security properties across all four transport layers.
              </p>
              <SecurityMatrix transports={[
                {
                  name: "Bluetooth (BLE)",
                  color: "bg-accent-cyan",
                  confidentiality: "ChaCha20-Poly1305 (2 layers: Noise + app)",
                  forwardSecrecy: "Per-session (Noise) + per-message (ECDH)",
                  anonymity: "Physical proximity required",
                  anonymityLevel: "medium",
                  offline: true,
                  maxSize: "~500B/packet (chunked)",
                },
                {
                  name: "DHT Network",
                  color: "bg-amber-400",
                  confidentiality: "ChaCha20-Poly1305 (app layer only)",
                  forwardSecrecy: "Per-message ephemeral ECDH",
                  anonymity: "IP visible to DHT peers",
                  anonymityLevel: "low",
                  offline: false,
                  maxSize: "~950B/slot (chunked)",
                },
                {
                  name: "Tor P2P",
                  color: "bg-accent-purple",
                  confidentiality: "ChaCha20-Poly1305 + Tor circuit encryption",
                  forwardSecrecy: "Per-message (ECDH) + per-circuit (Tor DH)",
                  anonymity: "Strong — .onion-to-.onion, 3-hop",
                  anonymityLevel: "high",
                  offline: false,
                  maxSize: "Unlimited (WebSocket)",
                },
                {
                  name: "iroh (QUIC)",
                  color: "bg-accent-blue",
                  confidentiality: "ChaCha20-Poly1305 (2 layers: TLS 1.3 + app)",
                  forwardSecrecy: "Per-message (ECDH) + per-connection (TLS 1.3)",
                  anonymity: "IP visible to relay server",
                  anonymityLevel: "low",
                  offline: false,
                  maxSize: "100 MB",
                },
              ]} />
            </DocSection>

            {/* ─── ATTACK SURFACE ─── */}
            <DocSection title="Attack Surface Analysis" id="attack-surface">
              <AttackScenario
                title="Compromised Recipient Exchange Key"
                description="Attacker obtains the recipient's long-term X25519 exchange secret."
                risks={[
                  { transport: "BLE", level: "Low", detail: "Requires physical proximity (~10m) to intercept radio signals" },
                  { transport: "DHT", level: "High", detail: "Messages persist on public DHT for 48 hours — attacker can fetch and decrypt" },
                  { transport: "Tor P2P", level: "Medium", detail: "Must intercept in real-time; Tor anonymity makes targeting difficult" },
                  { transport: "iroh", level: "Medium", detail: "Must intercept in real-time via relay or network position" },
                ]}
              />

              <AttackScenario
                title="Compromised Sender Identity Key"
                description="Attacker obtains the sender's Ed25519 identity signing key."
              >
                <div className="rounded-xl bg-background border border-border p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <div>
                    <p className="text-sm text-foreground font-medium">All transports equally affected</p>
                    <p className="text-xs text-muted mt-1">
                      Cannot decrypt past messages (identity keys are for signing, not encryption).
                      Can impersonate the sender going forward until the key is revoked or rotated.
                    </p>
                  </div>
                </div>
              </AttackScenario>

              <AttackScenario
                title="Global Passive Adversary"
                description="A network-level observer watching all traffic (ISP, nation state)."
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { transport: "BLE", sees: "Radio signals within ~10m", hidden: "Content (encrypted)" },
                    { transport: "DHT", sees: "IPs, slot patterns, timing", hidden: "Content, sender identity" },
                    { transport: "Tor", sees: "Circuit existence only", hidden: ".onion addresses, content, peer IDs" },
                    { transport: "iroh", sees: "IPs, relay connections", hidden: "Content (double-encrypted)" },
                  ].map((t) => (
                    <div key={t.transport} className="p-3 rounded-xl bg-background border border-border">
                      <p className="text-xs font-bold text-foreground mb-2">{t.transport}</p>
                      <div className="space-y-1.5">
                        <div className="flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                          </svg>
                          <p className="text-[10px] text-muted">{t.sees}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                          <p className="text-[10px] text-muted">{t.hidden}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AttackScenario>

              <AttackScenario
                title="Compromised Infrastructure"
                description="Attacker controls DHT nodes, Tor relays, or the n0 relay server."
              >
                <div className="space-y-2">
                  {[
                    { infra: "DHT Nodes", capability: "Store/serve ciphertext; cannot decrypt", canDecrypt: false },
                    { infra: "Tor Relays", capability: "Route encrypted circuits; guard knows client IP", canDecrypt: false },
                    { infra: "n0 Relay", capability: "See connection metadata and encrypted packets", canDecrypt: false },
                    { infra: "BLE", capability: "No infrastructure to compromise", canDecrypt: false },
                  ].map((item) => (
                    <div key={item.infra} className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
                      <div>
                        <p className="text-xs font-semibold text-foreground">{item.infra}</p>
                        <p className="text-[10px] text-muted">{item.capability}</p>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-400/10 shrink-0">
                        <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                        <span className="text-[10px] font-semibold text-emerald-400">Can&apos;t decrypt</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AttackScenario>

              <AttackScenario
                title="Nonce Reuse"
                description="ChaCha20-Poly1305 is catastrophically broken by nonce reuse with the same key."
              >
                <div className="space-y-2">
                  {[
                    { label: "Random 96-bit nonces", detail: "Generated per message via OS CSPRNG", color: "text-accent-cyan" },
                    { label: "Unique keys per message", detail: "HKDF with message_id salt ensures different key even if nonce collides", color: "text-accent-purple" },
                    { label: "Counter-based transport nonces", detail: "Noise protocol uses counters — guaranteed unique within session", color: "text-accent-blue" },
                  ].map((m, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-background border border-border">
                      <div className="w-6 h-6 rounded-full bg-emerald-400/10 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <div>
                        <p className={`text-xs font-semibold ${m.color}`}>{m.label}</p>
                        <p className="text-[10px] text-muted">{m.detail}</p>
                      </div>
                    </div>
                  ))}
                  <p className="text-xs text-muted mt-2 pl-9">
                    <strong className="text-foreground">Residual risk:</strong> Negligible. Birthday bound for 96-bit nonces is 2&#x00B2;&#x2078; messages per key, and keys are never reused.
                  </p>
                </div>
              </AttackScenario>
            </DocSection>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-xs text-muted italic leading-relaxed">
                This document describes the cryptographic architecture as implemented. No system is perfectly
                secure — security depends on correct implementation, secure key management, and operational practices.
                Regular security audits of the Rust cryptographic core are recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

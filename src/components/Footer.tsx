import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/ekko-logo.png" alt="Ekko Chat logo" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold gradient-text">Ekko Chat</span>
            </div>
            <p className="text-muted text-sm max-w-md leading-relaxed">
              Messaging without middlemen. Your messages travel directly between
              devices through multiple encrypted paths. No servers. No accounts.
              No data collection.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Product</h4>
            <div className="flex flex-col gap-3">
              <Link href="/features" className="text-sm text-muted hover:text-accent-cyan transition-colors">Features</Link>
              <Link href="/download" className="text-sm text-muted hover:text-accent-cyan transition-colors">Download</Link>
              <Link href="/docs" className="text-sm text-muted hover:text-accent-cyan transition-colors">Documentation</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Docs</h4>
            <div className="flex flex-col gap-3">
              <Link href="/docs" className="text-sm text-muted hover:text-accent-cyan transition-colors">Overview</Link>
              <Link href="/docs/transport-security" className="text-sm text-muted hover:text-accent-cyan transition-colors">Transport Security</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Ekko Chat. All rights reserved.
          </p>
          <Link href="/privacy" className="text-sm text-muted hover:text-accent-cyan transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

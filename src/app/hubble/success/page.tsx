import Link from 'next/link';

export default function HubbleSuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center gap-6">
      <div className="text-5xl">🔭</div>

      <h1 className="text-4xl font-bold tracking-tight">
        Hubble added!
      </h1>

      <p className="text-lg text-fd-muted-foreground max-w-md">
        Hubble is now in your server. Use <code>/help</code> to see all commands.
      </p>

      <div className="flex gap-3">
        <a
          href="https://discord.gg/nxR5YN6R9q"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#5865F2] text-white px-5 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Join our Discord →
        </a>
        <Link
          href="/docs/hubble"
          className="inline-flex items-center gap-1.5 rounded-full border border-fd-border px-5 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
        >
          View docs
        </Link>
      </div>
    </main>
  );
}
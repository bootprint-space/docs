'use client';

import Link from 'next/link';
import BootprintBackground from '@/components/background';

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
      <BootprintBackground />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 dark:hidden"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black" />
      </div>

      <p className="text-sm font-medium text-fd-muted-foreground mb-4 tracking-wide uppercase">
        Bootprint API
      </p>
      <h1 className="text-5xl font-bold tracking-tight mb-4">
        Explore the universe
      </h1>
      <p className="text-lg text-fd-muted-foreground max-w-md mb-8">
        Images and facts of the cosmos, free and open for everyone.
      </p>
      <div className="flex gap-3 mb-8">
        <Link
          href="/docs"
          className="inline-flex items-center gap-1.5 rounded-full bg-fd-foreground text-fd-background px-5 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Get started →
        </Link>
        <a
          href="https://github.com/bootprint-space"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-fd-border px-5 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
        >
          GitHub
        </a>
      </div>
      <div className="mb-12">
        <a
          href="https://status.bootprint.space"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          All services online
        </a>
      </div>
      <div className="border border-fd-border rounded-2xl p-8 max-w-md w-full">
        <div className="text-3xl mb-3">🔭</div>
        <h2 className="text-xl font-semibold mb-2">Hubble</h2>
        <p className="text-sm text-fd-muted-foreground mb-6">
          The official Bootprint Discord bot. Explore the universe directly in your server with slash commands.
        </p>
        <div className="flex gap-3 justify-center">
          <a
            href="https://discord.com/oauth2/authorize?client_id=1346600888919261194&permissions=0&scope=bot+applications.commands&redirect_uri=https://bootprint.space/hubble/success&response_type=code"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#5865F2] text-white px-5 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Add to Discord →
          </a>
          <Link
            href="/docs/hubble"
            className="inline-flex items-center gap-1.5 rounded-full border border-fd-border px-5 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
    </main>
  );
}
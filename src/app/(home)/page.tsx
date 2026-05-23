import Link from 'next/link';
import { gitConfig } from '@/lib/shared'; 
import BootprintBackground from '@/components/background'; 

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BootprintBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black opacity-80 pointer-events-none" />
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

      <div className="flex gap-3 z-10">
        <Link
          href="/docs"
          className="inline-flex items-center gap-1.5 rounded-full bg-fd-foreground text-fd-background px-5 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Get started →
        </Link>
        
        <a
          href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-fd-border px-5 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
        >
          GitHub
        </a>
      </div>

      <div className="mt-8 min-h-[30px] flex items-center justify-center z-10">
        <a
          href="https://status.bootprint.space"
          target="_blank"
          rel="noreferrer"
          className="inline-block transition-opacity hover:opacity-80"
        >
          <iframe 
            src="https://status.bootprint.space/embed-badges/live-status?align=start&background-light=ffffff00&text-light=71717a" 
            width="190" 
            height="30" 
            loading="lazy"
            className="pointer-events-none dark:invert dark:brightness-150"
          />
        </a>
      </div>
    </main>
  );
}
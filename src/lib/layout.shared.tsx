import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export const baseOptions = (): BaseLayoutProps => {
  const opts = {
    nav: {
      title: (
        <div className="flex items-center gap-2.5">
          <img 
            src="https://cdn.bootprint.space/logo_light.png" 
            alt="Bootprint Logo" 
            className="w-8 h-8 object-contain select-none pointer-events-none"
            style={{ filter: 'var(--logo-filter, none)' }} 
          />
          <span className="font-bold tracking-tight">{appName}</span>
        </div>
      ),
    },
    search: {
      options: {
        type: 'static',
      },
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  } as unknown as BaseLayoutProps;

  return opts;
};
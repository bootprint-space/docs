import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

export const baseOptions = (): BaseLayoutProps => {
  const opts = {
    nav: {
      title: (
        <div className="flex items-center justify-center h-11 w-11">
          <img 
            src="https://cdn.bootprint.space/logo_light.png" 
            alt="Bootprint Logo"
            className="w-11 h-11 object-contain select-none pointer-events-none transition-all dark:invert dark:hue-rotate-180"
          />
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
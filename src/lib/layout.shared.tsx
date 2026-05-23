import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export const baseOptions = (): BaseLayoutProps => {
  const opts = {
    nav: {
      title: appName,
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
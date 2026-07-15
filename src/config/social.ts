import { siteConfig } from './site';

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  iconName: string;
}

/**
 * Social networking handles and developer coordinates.
 */
export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    username: siteConfig.githubUsername,
    url: siteConfig.links.github,
    iconName: 'Github',
  },
  {
    platform: 'LinkedIn',
    username: siteConfig.name,
    url: siteConfig.links.linkedin,
    iconName: 'Linkedin',
  },
  {
    platform: 'Email',
    username: siteConfig.links.email.replace('mailto:', ''),
    url: siteConfig.links.email,
    iconName: 'Mail',
  },
];

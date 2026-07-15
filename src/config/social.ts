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
    username: 'Ayush Patwa',
    url: siteConfig.links.linkedin,
    iconName: 'Linkedin',
  },
  {
    platform: 'Email',
    username: 'ayushpatwa11@gmail.com',
    url: siteConfig.links.email,
    iconName: 'Mail',
  },
];

export interface NavLink {
  label: string;
  href: string;
  iconName: string;
}

/**
 * Main navigation routes for the website.
 * Follows the recruiter psychological scroll order layout.
 */
export const navigationItems: NavLink[] = [
  { label: 'About', href: '#about', iconName: 'User' },
  { label: 'Journey', href: '#journey', iconName: 'Route' },
  { label: 'Projects', href: '#projects', iconName: 'FolderCode' },
  { label: 'Skills', href: '#skills', iconName: 'Cpu' },
  { label: 'Learning', href: '#learning', iconName: 'PlayCircle' },
  { label: 'Contact', href: '#contact', iconName: 'Mail' },
];

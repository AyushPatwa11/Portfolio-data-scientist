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
  { label: 'About', href: '/about', iconName: 'User' },
  { label: 'Projects', href: '/projects', iconName: 'FolderCode' },
  { label: 'Contact', href: '/#contact', iconName: 'Mail' },
];

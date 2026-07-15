/**
 * Privacy-friendly telemetry configurations.
 * Can be linked to Vercel Analytics or Google Analytics in production.
 */
export const analyticsConfig = {
  enabled: process.env.NODE_ENV === 'production',
  vercelAnalyticsId: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID || '',
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
};

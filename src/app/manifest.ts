import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  short_name: 'NextJsTryout2',
  name: 'NextJs Tryout 2',
  description: 'A NextJs pwa with oidc integration',
  lang: 'en',
  start_url: '/',
  background_color: '#102090',
  theme_color: '#4010BB',
  dir: 'ltr',
  orientation: 'portrait',
  display: 'standalone',
});

export default manifest;

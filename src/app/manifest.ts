import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NextJs Tryout 2',
    short_name: 'NextJsTryout2',
    description: 'A NextJs pwa with oidc integration',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#102090',
    theme_color: '#4010BB',
    lang: 'en',
  };
}

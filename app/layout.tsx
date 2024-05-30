import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import Layout from '~/lib/layout';

import AuthGuard from '~/lib/provider/AuthGuard';
import AuthSessionProviderAuth0 from '~/lib/provider/AuthSessionProviderAuth0';
import '~/lib/styles/globals.css';
import theme from '~/lib/styles/theme/theme';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'NextJsTryOut2',
  description: 'NextJsTryOut2 for the masses',
  manifest: '/manifest.webmanifest',
  robots: '/robots.txt',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" dir="ltr">
      <head />
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AuthSessionProviderAuth0>
            <ThemeProvider theme={theme}>
              <Layout>
                <AuthGuard>{children}</AuthGuard>
              </Layout>
            </ThemeProvider>
          </AuthSessionProviderAuth0>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;

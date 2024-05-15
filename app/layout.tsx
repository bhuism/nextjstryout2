'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import Layout from '~/lib/layout';

import AuthGuard from '~/lib/provider/AuthGuard';
import AuthSessionProviderAuth0 from '~/lib/provider/AuthSessionProviderAuth0';
import theme from '~/lib/styles/theme/theme';
import '~/lib/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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

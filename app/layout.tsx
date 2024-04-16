'use client';

import type { Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import Layout from '~/lib/layout';
import Providers from '~/lib/provider/Providers';

import AuthGuard from '~/lib/provider/AuthGuard';
import AuthSessionProviderAuth0 from '~/lib/provider/AuthSessionProviderAuth0';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <AuthSessionProviderAuth0>
          <Providers>
            <Layout>
              <AuthGuard>{children}</AuthGuard>
            </Layout>
          </Providers>
        </AuthSessionProviderAuth0>
      </body>
    </html>
  );
};

export default RootLayout;

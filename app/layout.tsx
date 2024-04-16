'use client';

import type { Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import Layout from '~/lib/layout';
import Providers from '~/lib/provider/Providers';

import AuthGuard from '~/lib/provider/AuthGuard';
import AuthSessionProviderGoogle from '~/lib/provider/AuthSessionProviderGoogle';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <AuthSessionProviderGoogle>
          <Providers>
            <Layout>
              <AuthGuard>{children}</AuthGuard>
            </Layout>
          </Providers>
        </AuthSessionProviderGoogle>
      </body>
    </html>
  );
};

export default RootLayout;

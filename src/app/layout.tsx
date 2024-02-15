'use client';

import type { Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import Providers from '~/lib/provider/Providers';
import Layout from '~/lib/layout';

import AuthGuard from '~/lib/provider/AuthGuard';
import AuthSessionProvider from '~/lib/provider/AuthSessionProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>
          <AuthGuard>
            <Providers>
              <Layout>{children}</Layout>
            </Providers>
          </AuthGuard>
        </AuthSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;

'use client';

import type { Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

import AuthGuard from '~/lib/components/provider/AuthGuard';
import AuthSessionProvider from '~/lib/components/provider/AuthSessionProvider';

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

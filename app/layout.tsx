'use client';

import type { Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import Layout from '~/lib/layout';
import Providers from '~/lib/provider/Providers';

import AuthGuard from '~/lib/provider/AuthGuard';
import AuthSessionProvider from '~/lib/provider/AuthSessionProvider';
import ConstantsProvider from '~/lib/provider/ConstantsProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <ConstantsProvider>
          <AuthSessionProvider>
            <Providers>
              <Layout>
                <AuthGuard>{children}</AuthGuard>
              </Layout>
            </Providers>
          </AuthSessionProvider>
        </ConstantsProvider>
      </body>
    </html>
  );
};

export default RootLayout;

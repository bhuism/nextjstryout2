'use client';

import type { Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

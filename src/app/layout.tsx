'use client';

import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

const APP_NAME = 'nextjstryout2';

// export const metadata: Metadata = {
//   metadataBase: new URL('https://nextjstryout2.impl.nl'),
//   title: { default: APP_NAME, template: '%s | nextjstryout2' },
//   description: 'Next.js + TypeScript template',
//   applicationName: APP_NAME,
//   appleWebApp: {
//     capable: true,
//     title: APP_NAME,
//     statusBarStyle: 'default',
//   },
//   formatDetection: {
//     telephone: false,
//   },
//   openGraph: {
//     url: 'https://nextjstryout2.impl.nl',
//     title: 'nextjstryout2',
//     description: 'Next.js + TypeScript template',
//   },
//   twitter: {
//     creator: '@bhuism',
//     card: 'summary_large_image',
//   },
// };

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

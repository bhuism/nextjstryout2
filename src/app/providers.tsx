'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { PropsWithChildren } from 'react';

import theme from 'lib/styles/theme/theme';
import AuthSessionProvider from '~/lib/components/provider/AuthSessionProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Providers;

'use client';

import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import theme from '../styles/theme/theme';

import { useAuth } from 'react-oidc-context';
import Footer from './Footer';
import Header from './Header';
import Navigator from './Navigator';

const drawerWidth = 256;

const Layout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { isAuthenticated } = useAuth();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      {isAuthenticated ? (
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
      ) : (
        <></>
      )}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {isAuthenticated ? (
          <Header onDrawerToggle={handleDrawerToggle} />
        ) : (
          <></>
        )}
        <Box
          component="main"
          sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
        >
          {children}
        </Box>
        <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

'use client';

import {
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { PropsWithChildren } from 'react';
import { useAuth } from 'react-oidc-context';

const defaultTheme = createTheme();

const Login = () => {
  const auth = useAuth();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => auth.signinRedirect()}
          >
            Login
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const AuthGuard = ({ children }: PropsWithChildren) => {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case 'signinSilent':
      return <div>Signing you in...</div>;
    case 'signoutRedirect':
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <CircularProgress />;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  return auth.isAuthenticated ? <>{children}</> : <Login />;
};

export default AuthGuard;

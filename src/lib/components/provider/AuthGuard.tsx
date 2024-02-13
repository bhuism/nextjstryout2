import { Box, Button, Container, CssBaseline } from '@mui/material';
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
            OIDC Login
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const AuthGuard = ({ children }: PropsWithChildren) => {
  const auth = useAuth();

  return auth.isAuthenticated ? <>{children}</> : <Login />;
};

export default AuthGuard;

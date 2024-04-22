import {
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
} from '@mui/material';
import { redirect } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import { useAuth } from 'react-oidc-context';

const Login = () => {
  const auth = useAuth();

  return (
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
        <h1>NextJsTryOut2</h1>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
          onClick={() => auth.signinRedirect()}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

const AuthGuard = ({ children }: PropsWithChildren) => {
  const auth = useAuth();

  // const [hasTriedSignin, setHasTriedSignin] = useState(false);

  // useEffect(() => {
  //   if (
  //     !hasAuthParams() &&
  //     !auth.isAuthenticated &&
  //     !auth.activeNavigator &&
  //     !auth.isLoading &&
  //     !hasTriedSignin
  //   ) {
  //     auth.signinRedirect();
  //     setHasTriedSignin(true);
  //   }
  // }, [auth, hasTriedSignin]);

  if (!auth || auth.isLoading) {
    return <CircularProgress />;
  }

  if (auth.activeNavigator) {
    return <span>{auth.activeNavigator}</span>;
  }

  if (auth.error) {
    auth.clearStaleState();
    auth.revokeTokens();
    redirect(
      process.env.NEXT_PUBLIC_REDIRECT_URI + `/?e=${auth.error.message}`
    );
    return <CircularProgress />;
  } else {
    return auth.isAuthenticated ? <>{children}</> : <Login />;
  }
};

export default AuthGuard;

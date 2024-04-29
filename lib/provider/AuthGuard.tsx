import {
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Divider,
  Stack,
} from '@mui/material';
import { redirect } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import { useAuth } from 'react-oidc-context';

const CenterComponents = ({ children }: PropsWithChildren) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Stack
          spacing={2}
          divider={<Divider orientation="horizontal" flexItem />}
          alignItems={'center'}
        >
          {children}
        </Stack>
      </Box>
    </Container>
  );
};

const Login = () => {
  const auth = useAuth();
  return (
    <>
      <h1>NextJsTryOut2</h1>
      <Button
        variant="contained"
        size="large"
        onClick={() => auth.signinRedirect()}
      >
        Login
      </Button>
    </>
  );
};


const AuthGuard = ({ children }: PropsWithChildren) => {
  const auth = useAuth();

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
    return (
      <CenterComponents>
        <CircularProgress />
        <span>Auth Loading</span>
      </CenterComponents>
    );
  }

  if (auth.activeNavigator) {
    return (
      <CenterComponents>
        <CircularProgress />
        <span>{auth.activeNavigator}</span>
      </CenterComponents>
    );
  }

  if (auth.error) {
    auth.clearStaleState();
    auth.revokeTokens();
    redirect(
      process.env.NEXT_PUBLIC_REDIRECT_URI + `/?e=${auth.error.message}`
    );
    return (
      <CenterComponents>
        <CircularProgress />
        <span>Error Redirect</span>
      </CenterComponents>
    );
  } else {
    return auth.isAuthenticated ? (
      <>{children}</>
    ) : (
      <CenterComponents>
        <Login />
      </CenterComponents>
    );
  }
};

export default AuthGuard;

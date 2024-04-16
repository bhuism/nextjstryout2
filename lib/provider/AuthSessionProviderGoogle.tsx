'use client';

import { User } from 'oidc-client-ts';
import { PropsWithChildren } from 'react';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';

const AuthSessionProviderGoogle = ({ children }: PropsWithChildren) => {
  const authority = 'accounts.google.com';

  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  const oidcConfig: AuthProviderProps = {
    authority: authority,
    client_id:
      '208909681900-1ft69pgsv7dfdtoirt7m9a1a39sl7mk3.apps.googleusercontent.com',
    client_secret: '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',
    scope: 'openid profile email',
    metadataUrl: 'https://' + authority + '/.well-known/openid-configuration',
    redirect_uri: redirect_uri,
    onSigninCallback: (_user: User | void): void => {
      window.history.replaceState({}, document.title, window.location.pathname);
    },
    post_logout_redirect_uri: redirect_uri,
  };

  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};

export default AuthSessionProviderGoogle;

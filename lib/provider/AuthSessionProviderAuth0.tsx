'use client';

import { User } from 'oidc-client-ts';
import { PropsWithChildren } from 'react';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';

const AuthSessionProviderAuth0 = ({ children }: PropsWithChildren) => {
  const authority = 'dev-g4n3hjan0v2jg3le.eu.auth0.com';

  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  const oidcConfig: AuthProviderProps = {
    authority: authority,
    client_id: 'dS0G6OLNykudhvLP2js7EasNLQ0J8XVq',
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

export default AuthSessionProviderAuth0;

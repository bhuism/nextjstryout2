'use client';

import { User } from 'oidc-client-ts';
import { PropsWithChildren } from 'react';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';

const oidcConfig: AuthProviderProps = {
  authority: 'dev-g4n3hjan0v2jg3le.eu.auth0.com',
  client_id: 'dS0G6OLNykudhvLP2js7EasNLQ0J8XVq',
  scope: 'openid profile email',
  metadataUrl:
    'https://dev-g4n3hjan0v2jg3le.eu.auth0.com/.well-known/openid-configuration',
  redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI
    ? process.env.NEXT_PUBLIC_REDIRECT_URI
    : 'http://localhost:3000',
  onSigninCallback: (_user: User | void): void => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

const AuthSessionProvider = ({ children }: PropsWithChildren) => {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};

export default AuthSessionProvider;

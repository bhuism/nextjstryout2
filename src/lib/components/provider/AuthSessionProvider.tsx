'use client';

import { PropsWithChildren } from 'react';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';

const oidcConfig: AuthProviderProps = {
  authority: 'dev-g4n3hjan0v2jg3le.eu.auth0.com',
  client_id: 'dS0G6OLNykudhvLP2js7EasNLQ0J8XVq',
  metadataUrl:
    'https://dev-g4n3hjan0v2jg3le.eu.auth0.com/.well-known/openid-configuration',
  redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI
    ? process.env.NEXT_PUBLIC_REDIRECT_URI
    : 'http://localhost:3000',
};

const AuthSessionProvider = ({ children }: PropsWithChildren) => {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};

export default AuthSessionProvider;

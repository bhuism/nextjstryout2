'use client';

import { User } from 'oidc-client-ts';
import React from 'react';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';

type Props = {
  children?: React.ReactNode;
};

const oidcConfig: AuthProviderProps = {
  authority: 'dev-g4n3hjan0v2jg3le.eu.auth0.com',
  client_id: 'dS0G6OLNykudhvLP2js7EasNLQ0J8XVq',
  metadataUrl:
    'https://dev-g4n3hjan0v2jg3le.eu.auth0.com/.well-known/openid-configuration',
  redirect_uri: 'http://localhost:3000',
  onSigninCallback: (user: User | void): void => {
    console.log('TEST');
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

const AuthSessionProvider = ({ children }: Props) => {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};

export default AuthSessionProvider;

'use client';

import React from 'react';

export type iConstantsContext = {
  release: string;
  gitsha: string;
  gitsha_short: string;
  redirect_uri: string;
};

export const ConstantsContext = React.createContext<iConstantsContext>({
  release: 'uninitialized',
  gitsha: 'uninitialized',
  gitsha_short: 'uninitialized',
  redirect_uri: 'uninitialized',
});

export default ConstantsContext;

'use client';

import { PropsWithChildren, default as React } from 'react';
import ConstantsContext from '../context/ReleaseContext';

const ConstantsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConstantsContext.Provider
      value={{
        gitsha: process.env.NEXT_PUBLIC_GIT_SHA
          ? process.env.NEXT_PUBLIC_GIT_SHA
          : 'unknown',
        gitsha_short: process.env.NEXT_PUBLIC_GIT_SHA
          ? process.env.NEXT_PUBLIC_GIT_SHA?.substring(0, 8)
          : 'unknown',
        release: process.env.NEXT_PUBLIC_RELEASE
          ? process.env.NEXT_PUBLIC_RELEASE.substring(10)
          : 'unknown',
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI
          ? process.env.NEXT_PUBLIC_REDIRECT_URI
          : 'unknown',
      }}
    >
      {children}
    </ConstantsContext.Provider>
  );
};

export default ConstantsProvider;

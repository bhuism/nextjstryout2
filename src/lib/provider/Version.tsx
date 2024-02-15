import { PropsWithChildren, default as React } from 'react';
import ReleaseContext from '../context/ReleaseContext';

const VersionContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReleaseContext.Provider
      value={{
        release: process.env.NEXT_PUBLIC_RELEASE
          ? process.env.NEXT_PUBLIC_RELEASE.substring(10)
          : 'unknown',
      }}
    >
      {children}
    </ReleaseContext.Provider>
  );
};

export default VersionContextProvider;

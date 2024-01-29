import type { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      providered:
      {children}
    </>
  );
};

export default Providers;

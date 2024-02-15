'use client';

import React from 'react';

export type iReleaseContext = {
  release: String;
};

export const ReleaseContext = React.createContext<iReleaseContext>({
  release: process.env.NEXT_PUBLIC_RELEASE
    ? process.env.NEXT_PUBLIC_RELEASE
    : 'unknown',
});

export default ReleaseContext;

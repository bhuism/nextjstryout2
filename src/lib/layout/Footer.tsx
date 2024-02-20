'use client';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import ConstantsContext from '../context/ReleaseContext';

const Footer = () => {
  const { release, gitsha_short, gitsha } = useContext(ConstantsContext);

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://nextjstryout2.impl.nl/"
        underline="hover"
      >
        nextjstryout2
      </Link>{' '}
      {new Date().getFullYear()}{' '}
      <Link
        color="inherit"
        href={'https://github.com/bhuism/nextjstryout2/tree/' + gitsha}
        underline="hover"
      >
        {gitsha_short}
      </Link>{' '}
      <Link
        color="inherit"
        href={'https://github.com/bhuism/nextjstryout2/releases/tag/' + release}
        underline="hover"
      >
        {release}
      </Link>
    </Typography>
  );
};

export default Footer;

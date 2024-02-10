'use client';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {'Copyright © '}
    <Link
      color="inherit"
      href="https://nextjstryout2.impl.nl/"
      underline="hover"
    >
      nextjstryout2.impl.nl
    </Link>{' '}
    {new Date().getFullYear()}{' '}
    <Link
      color="inherit"
      href={
        'https://github.com/bhuism/nextjstryout2/tree/' +
        (process.env.NEXT_PUBLIC_GIT_SHA
          ? process.env.NEXT_PUBLIC_GIT_SHA
          : null)
      }
      underline="hover"
    >
      {process.env.NEXT_PUBLIC_GIT_SHA
        ? process.env.NEXT_PUBLIC_GIT_SHA.substring(0, 8)
        : null}
    </Link>
  </Typography>
);

export default Footer;

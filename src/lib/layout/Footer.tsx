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
      href={`https://github.com/bhuism/nextjstryout2/tree/${process.env.COMMIT_HASH}`}
      underline="hover"
    >
      {process.env.COMMIT_HASH}
    </Link>
  </Typography>
);

export default Footer;

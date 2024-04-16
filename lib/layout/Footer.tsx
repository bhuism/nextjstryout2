import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => {
  const gitsha = process.env.NEXT_PUBLIC_GIT_SHA;
  const gitsha_short = process.env.NEXT_PUBLIC_GIT_SHA
    ? process.env.NEXT_PUBLIC_GIT_SHA?.substring(0, 8)
    : 'unknown';
  const release = process.env.NEXT_PUBLIC_RELEASE
    ? process.env.NEXT_PUBLIC_RELEASE.substring(10)
    : 'unknown';

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href={process.env.NEXT_PUBLIC_REDIRECT_URI}
        underline="hover"
      >
        nextjstryout2
      </Link>
      {'-'}
      {new Date().getFullYear()}
      {' - '}
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
      {' - '}
      <Link color="inherit" href={'/privacy.html'} underline="hover">
        privacy
      </Link>
      {' - '}
      <Link color="inherit" href={'/terms.html'} underline="hover">
        terms of use
      </Link>
    </Typography>
  );
};

export default Footer;

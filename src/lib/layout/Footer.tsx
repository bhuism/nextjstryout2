import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://nextjstryout2.impl.nl/">
      nextjstryout2.impl.nl
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default Footer;

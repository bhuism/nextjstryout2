import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://testjs.impl.nl/">
        testjs.impl.nl
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default Footer;

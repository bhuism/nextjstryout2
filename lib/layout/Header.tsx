'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { ListItemText } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAuth } from 'react-oidc-context';
import { CurrentPageString } from './Navigator';
const lightColor = 'rgba(255, 255, 255, 0.7)';

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
  const { onDrawerToggle } = props;

  const auth = useAuth();

  return (
    <>
      <AppBar
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                <CurrentPageString />
              </Typography>
            </Grid>
            <Grid item>
              <Link
                onClick={() => {
                  auth.removeUser();
                  auth.signoutRedirect();
                }}
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  '&:hover': {
                    color: 'common.white',
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                Logout
              </Link>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar
                  src={auth.user?.profile.picture}
                  alt="Avatar"
                  slotProps={{
                    img: { referrerPolicy: 'no-referrer' },
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <ListItemText>{auth.user?.profile.name}</ListItemText>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

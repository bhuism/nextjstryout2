'use client';

import { RocketLaunch } from '@mui/icons-material';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import TimerIcon from '@mui/icons-material/Timer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import type { DrawerProps } from '@mui/material/Drawer';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { usePathname, useRouter } from 'next/navigation';

const categories = [
  {
    id: 'Build',
    children: [
      { id: 'Authentication', icon: <PeopleIcon />, page: '/authentication' },
      { id: 'Database', icon: <DnsRoundedIcon />, page: '/database' },
      { id: 'Storage', icon: <PermMediaOutlinedIcon />, page: '/storage' },
      { id: 'Hosting', icon: <PublicIcon />, page: '/hosting' },
      { id: 'Functions', icon: <SettingsEthernetIcon />, page: '/functions' },
      { id: 'Test Page', icon: <RocketLaunch />, page: '/testpage' },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Analytics', icon: <SettingsIcon />, page: '/analytics' },
      { id: 'Performance', icon: <TimerIcon />, page: '/performance' },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon />, page: '/testlab' },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;

  const router = useRouter();
  const pathname = usePathname();

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}
          onClick={() => router.push('/')}
        >
          Paperbase
        </ListItem>

        <ListItem
          sx={{ ...item, ...itemCategory }}
          onClick={() => router.push('/')}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, page }) => (
              <ListItem
                disablePadding
                key={childId}
                onClick={() => (page ? router.push(page) : null)}
              >
                <ListItemButton selected={pathname == page} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}

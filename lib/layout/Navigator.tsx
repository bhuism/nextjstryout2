'use client';

import { RocketLaunch } from '@mui/icons-material';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import '../../lib/styles/globals.css';

const categories = [
  {
    id: '',
    children: [
      { id: 'Authentication', icon: <PeopleIcon />, page: '/' },
      { id: 'Database', icon: <DnsRoundedIcon />, page: '/database' },
      { id: 'Storage', icon: <PermMediaOutlinedIcon />, page: '/storage' },
      { id: 'Hosting', icon: <PublicIcon />, page: '/hosting' },
      { id: 'Test Page', icon: <RocketLaunch />, page: '/testpage' },
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

export interface NavigatorProps extends DrawerProps {
  closeDrawer?: () => void;
}

export const CurrentPageString: React.FC = () => {
  const pathname = usePathname();

  const title = categories[0].children.find((i) => i.page == pathname)?.id;

  return <div>{title}</div>;
};

export default function Navigator({ closeDrawer, ...other }: NavigatorProps) {
  const pathname = usePathname();

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <Link
          href={'/'}
          replace
          style={{ textDecoration: 'none' }}
          onClick={() => (closeDrawer ? closeDrawer() : null)}
        >
          <ListItem
            sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}
            className={'clickable'}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>NextJsTryOut2</ListItemText>
          </ListItem>
        </Link>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            {id ? (
              <ListItem sx={{ py: 2, px: 3 }}>
                <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
              </ListItem>
            ) : (
              <></>
            )}
            {children.map(({ id: childId, icon, page }) => (
              <Link
                href={page}
                key={childId}
                prefetch={true}
                style={{ textDecoration: 'none' }}
                onClick={() => (closeDrawer ? closeDrawer() : null)}
              >
                <ListItem disablePadding>
                  <ListItemButton selected={pathname == page} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}

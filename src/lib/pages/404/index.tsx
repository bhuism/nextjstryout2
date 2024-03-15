'use client';

import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Page404 = () => {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        This is not the page you are looking for
      </Typography>
      <Button href="/">Home</Button>
    </Paper>
  );
};

export default Page404;

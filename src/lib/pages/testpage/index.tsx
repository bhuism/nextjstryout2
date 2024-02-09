'use client';
'use client';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const TestPage = () => {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        Test Page
      </Typography>
    </Paper>
  );
};

export default TestPage;

'use client';

import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import TimeComponent from '~/lib/components/TimeComponent';

export const dynamic = 'force-dynamic';

const TestPage = () => {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Grid container spacing={1}>
        {[...Array(25)].map((e, i) => (
          <Grid key={i} columns={32} item>
            {/* <Suspense fallback={<CircularProgress />}> */}
            {i}:<TimeComponent slug={'a' + i} />
            {/* </Suspense> */}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TestPage;

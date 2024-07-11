'use client';

import { Grid, Typography } from '@mui/material';
import TimeComponent from '~/lib/components/TimeComponent';

export const dynamic = 'force-dynamic';

const TestPage = () => {
  return (
    <>
      <Grid container spacing={1}>
        {[...Array(1000)].map((e, i) => (
          <Grid item xs={3}>
            {i}:<TimeComponent slug={'a' + i} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TestPage;

import { CircularProgress, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Suspense } from 'react';
import RepoComponent from '~/lib/components/getTime';

export const dynamic = 'force-dynamic';

const TestPage = () => {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Grid container spacing={1}>
        {[...Array(25)].map((e, i) => (
          <Grid key={i} item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a' + i} />
            </Suspense>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TestPage;

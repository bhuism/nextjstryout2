import { CircularProgress, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Suspense } from 'react';
import getDataFromServer from '~/lib/components/getTime';

export const dynamic = 'force-dynamic';

async function RepoComponent({ slug }: { slug: string }) {
  const time = await getDataFromServer(slug);
  return <p>{time}</p>;
}

const TestPage = () => {
  return (
    <section>
      <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <Grid container spacing={1}>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>{' '}
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>{' '}
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>{' '}
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a0'} />
            </Suspense>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default TestPage;

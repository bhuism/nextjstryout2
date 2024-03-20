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
              <RepoComponent slug={'a1'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a2'} />
            </Suspense>
          </Grid>{' '}
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a3'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a4'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a5'} />
            </Suspense>
          </Grid>{' '}
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a6'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a7'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a8'} />
            </Suspense>
          </Grid>{' '}
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a9'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a10'} />
            </Suspense>
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <RepoComponent slug={'a11'} />
            </Suspense>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default TestPage;

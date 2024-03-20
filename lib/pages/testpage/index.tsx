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
          {[...Array(100)].map((e, i) => (
            <Grid item key={i}>
              <Suspense key={i} fallback={<CircularProgress />}>
                <RepoComponent slug={'a' + i} />
              </Suspense>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </section>
  );
};

export default TestPage;

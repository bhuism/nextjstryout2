import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Suspense } from 'react';
import RepoComponent from '~/lib/components/getTime';

const TestPage = () => {
  return (
    <section>
      <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
          <Suspense fallback={<p>Loading...</p>}>
            <RepoComponent slug="a" />
          </Suspense>
          <Suspense fallback={<p>Loading...</p>}>
            <RepoComponent slug="b" />
          </Suspense>
          <Suspense fallback={<p>Loading...</p>}>
            <RepoComponent slug="c" />
          </Suspense>
        </Typography>
      </Paper>
    </section>
  );
};

export default TestPage;

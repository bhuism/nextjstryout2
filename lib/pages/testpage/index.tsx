import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Suspense } from 'react';
import RepoComponent from '~/lib/components/getTime';

export const dynamic = 'force-dynamic';

const TestPage = () => {
  return (
    <section>
      <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
          <Suspense key={i} fallback={<p>Loading {i}...</p>}>
            <RepoComponent slug={'a0'} />
          </Suspense>
          <Suspense key={i} fallback={<p>Loading {i}...</p>}>
            <RepoComponent slug={'a1'} />
          </Suspense>
          <Suspense key={i} fallback={<p>Loading {i}...</p>}>
            <RepoComponent slug={'a2'} />
          </Suspense>
          <Suspense key={i} fallback={<p>Loading {i}...</p>}>
            <RepoComponent slug={'a3'} />
          </Suspense>
          <Suspense key={i} fallback={<p>Loading {i}...</p>}>
            <RepoComponent slug={'a4'} />
          </Suspense>
          <Suspense key={i} fallback={<p>Loading {i}...</p>}>
            <RepoComponent slug={'a5'} />
          </Suspense>
          <Suspense key={i} fallback={<p>Loading {i}...</p>}>
            <RepoComponent slug={'a6'} />
          </Suspense>
          <Suspense key={i} fallback={<p>Loading {i}...</p>}>
            <RepoComponent slug={'a7'} />
          </Suspense>
          <Suspense key={i} fallback={<p>Loading {i}...</p>}>
            <RepoComponent slug={'a8'} />
          </Suspense>
          <Suspense key={i} fallback={<p>Loading {i}...</p>}>
            <RepoComponent slug={'a9'} />
          </Suspense>
        </Typography>
      </Paper>
    </section>
  );
};

export default TestPage;

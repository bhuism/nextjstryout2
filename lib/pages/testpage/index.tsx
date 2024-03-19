import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Suspense } from 'react';
import RepoComponent from '~/lib/components/getTime';


export const dynamic = "force-dynamic";

const TestPage = () => {
  return (
    <section>
      <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
          {[...Array(25)].map((e, i) => (
            <Suspense key={i} fallback={<p>Loading {i}...</p>}>
              <RepoComponent slug={'a' + i} />
            </Suspense>
          ))}
        </Typography>
      </Paper>
    </section>
  );
};

export default TestPage;

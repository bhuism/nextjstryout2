'use client';

import { CircularProgress } from '@mui/material';
import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<string, string> = (slug: string) => {
  return fetch('https://time.impl.nl' + '?' + slug).then((res) =>
    res.ok ? res.text() : 'error: ' + res.status
  );
};

function TimeComponent({ slug }: { slug: string }) {
  const { data, error } = useSWR<string, Error>(slug, fetcher);

  if (error) return <span style={{ color: 'red' }}>{error.message}</span>;
  if (!data) return <CircularProgress />;

  return <span>{data}</span>;
}

export default TimeComponent;

'use client';

import { unstable_noStore as noStore } from 'next/cache';

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

function getDataFromServer(slug: string) {
  console.log('time api: ' + process.env.NEXT_PUBLIC_TIME_API_URI);

  noStore();

  var n = 2 + Math.floor(Math.random() * 2);
  //  await timeout(n * 1000);

  return fetch(process.env.NEXT_PUBLIC_TIME_API_URI + '?' + slug, {
    cache: 'no-store',
  })
    .then((res) =>
      res.ok ? res.text() : 'Failed to fetch data : ' + res.status
    )
    .catch((e) => JSON.stringify(e));
}

function RepoComponent({ slug }: { slug: string }) {
  return <span>{getDataFromServer(slug)}</span>;
}

export default RepoComponent;

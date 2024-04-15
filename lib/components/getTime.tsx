'use server';

import { unstable_noStore as noStore } from 'next/cache';

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

async function getDataFromServer(slug: string) {
  noStore();

  var n = 2 + Math.floor(Math.random() * 2);
  await timeout(n * 1000);

  return await fetch(process.env.TIME_API_URI + '?' + slug, {
    cache: 'no-store',
  })
    .then((res) =>
      res.ok ? res.text() : 'Failed to fetch data : ' + res.status
    )
    .catch((e) => JSON.stringify(e));
}

async function RepoComponent({ slug }: { slug: string }) {
  return <span>{await getDataFromServer(slug)}</span>;
}

export default RepoComponent;

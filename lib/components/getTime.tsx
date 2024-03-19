import { unstable_noStore as noStore } from 'next/cache';

async function getDataFromServer(slug: string) {
  noStore();

  return await fetch(process.env.TIME_API_URI + '?' + slug, {
    cache: 'no-store',
  })
    .then((res) =>
      res.ok ? res.text() : 'Failed to fetch data : ' + res.status
    )
    .catch((e) => JSON.stringify(e));
}

export default async function RepoComponent({ slug }: { slug: string }) {
  const time = await getDataFromServer(slug);
  return <div>{time}</div>;
}

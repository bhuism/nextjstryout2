import { unstable_noStore as noStore } from 'next/cache';

async function getDataFromServer(slug: string) {
  noStore();

  const res = await fetch('http://ok-time-service.okapp:8080?' + slug, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data : ' + res.status);
  }

  var x = await res.text();

  return x;
}

export default async function RepoComponent({ slug }: { slug: string }) {
  const time = await getDataFromServer(slug);
  return <div>{time}</div>;
}

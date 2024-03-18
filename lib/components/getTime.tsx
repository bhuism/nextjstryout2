import { unstable_noStore as noStore } from 'next/cache';

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

async function getDataFromServer(slug: string) {
  noStore();

  var n = 2 + Math.floor(Math.random() * 5);
  await timeout(n * 1000);

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

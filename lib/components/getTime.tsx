//never use in production
function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

async function getDataFromServer(slug: string) {
  var n = 2 + Math.floor(Math.random() * 5);
  await timeout(n * 1000);

  const res = await fetch('https://time.impl.nl/?' + slug, {
    cache: 'no-cache',
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

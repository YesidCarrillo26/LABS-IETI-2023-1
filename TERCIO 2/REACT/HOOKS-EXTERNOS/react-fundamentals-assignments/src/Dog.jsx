import useSWR from 'swr';

export function Dog() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('https://api.thedogapi.com/v1/images/search', fetcher);

  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <img src={data[0].url} alt="A random dog" />
      <button onClick={() =>window.location.reload()}>Random Dog</button>
    </div>
  );
}

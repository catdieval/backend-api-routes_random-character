import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (!data || isLoading) {
    return "Loading...";
  }

  const { firstName, lastName, age, profession } = data;
  
  return (
    <>
      <h1>Hello from Next.js API routes!</h1>
      <h2>Click on the reload button in the browser to see a a random person displayed.</h2>
      <br/>
      <p>{firstName}, {lastName}, {age}, {profession}</p>
    </>
);
}

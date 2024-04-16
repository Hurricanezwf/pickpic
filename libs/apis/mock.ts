export async function fetchData() {
  const rsp = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!rsp.ok) {
    throw new Error("failed to fetch data");
  }
  return rsp.json();
}

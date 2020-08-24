export async function getCommits<T>(): Promise<T> {
  const response = await fetch(`https://api.github.com/repos/Pyotr23/NewsAnalyzer/commits?sha=level-2`);
  return response.json() as Promise<T>;
}

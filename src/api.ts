import { ApiResponse } from "./types";

export async function fetchRepos(project: string): Promise<ApiResponse> {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${project}&per_page=15`
  );

  if (!response.ok) throw new Error("Project not found");

  const data: ApiResponse = await response.json();
  console.log(data)
  return data;
}


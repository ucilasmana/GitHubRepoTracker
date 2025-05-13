export interface Repo {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  html_url: string;
  description:string;
  isFavorite?: boolean;
}

export interface ApiResponse{
  total_count:number
  incomplete_results:boolean
  items:Repo[]
}
 
export type SortOption = "stars" | "forks" | "updated";

export type ViewOption = "search" | "favorites";
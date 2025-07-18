export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  location?: string;
  status: string;
  our_role?: string;
  category?: string;
  client?: string;
  status_details?:string;
  year: string;
};

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type User = {
  avatar_url: string;
  id: number;
  is_pro: boolean;
  name: string;
};

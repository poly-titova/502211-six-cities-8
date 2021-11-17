import { Review } from './review';

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  ['is_favorite']: boolean;
  ['is_premium']: boolean;
  location: Location;
  ['max_adults']: number;
  ['preview_image']: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  reviews: Review[];
};

export type City = {
  location: Location;
  name: string;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Host = {
  ['avatar_url']: string;
  id: number;
  ['is_pro']: boolean;
  name: string;
};

export type Offers = Offer[];

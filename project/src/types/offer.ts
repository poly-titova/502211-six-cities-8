import { Review } from './review';

export type Offer = {
  id: number;
  city: string;
  mark: string;
  name: string;
  firstImage: string;
  gallery: Gallery[];
  rating: number;
  type: string;
  bedrooms: string;
  adults: string;
  priceValue: number;
  priceText: string;
  insideList: InsideList[];
  userAvatar: string;
  userName: string;
  userStatus: string;
  text: string;
  review: Review[];
  lat: number;
  lng: number;
};

export type Gallery = {
  src: string;
  alt: string;
};

export type InsideList = {
  item: string;
};

export type Offers = Offer[];

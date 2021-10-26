export type Offer = {
  id: number;
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
  location: Location[];
};

export type Gallery = {
  src: string;
  alt: string;
};

export type InsideList = {
  item: string;
};

export type Review = {
  userAvatar: string;
  userName: string;
  rating: string;
  text: string;
  dateAdd: string;
};

export type Location = {
  lat: number;
  lng: number;
};

export type Offers = Offer[];

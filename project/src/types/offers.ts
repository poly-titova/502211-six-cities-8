export type Offers = {
  id: number;
  mark: string;
  name: string;
  gallery: Gallery[];
  rating: number;
  entire: string;
  bedrooms: string;
  adults: string;
  priceValue: number;
  priceText: string;
  insideList: InsideList[];
  userAvatar: string;
  userName: string;
  userStatus: string;
  text: string;
};

export type Gallery = {
  src: string;
  alt: string;
};

export type InsideList = {
  item: string;
};

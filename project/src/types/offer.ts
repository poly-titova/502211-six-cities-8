export type Offer = {
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
};

export type Gallery = {
  src: string;
  alt: string;
};

export type InsideList = {
  item: string;
};

export type Offers = Offer[];

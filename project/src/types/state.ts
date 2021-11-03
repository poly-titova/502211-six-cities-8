export type State = {
  city: string;
  listOffers: Offers;
};

export type Offer = {
  id: number;
  mark: string;
  name: string;
  firstImage: string;
  rating: number;
  type: string;
  priceValue: number;
  priceText: string;
  lat: number;
  lng: number;
};

export type Offers = Offer[];

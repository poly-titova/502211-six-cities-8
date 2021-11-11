import { Offers } from './offer';

export type State = {
  city: string,
  listOffers: Offers,
  sortIn: boolean,
  sortOrder: string
};

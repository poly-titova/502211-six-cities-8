import { AuthorizationStatus } from '../const';
import { Offers } from './offer';

export type State = {
  offers: Offers,
  city: string,
  listOffers: Offers,
  sortIn: boolean,
  sortOrder: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};

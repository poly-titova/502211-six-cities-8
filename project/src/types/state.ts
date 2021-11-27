import { AuthorizationStatus } from '../const';
import { Offers } from './offer';
import { Reviews } from './review';

export type State = {
  offers: Offers,
  city: string,
  sortIn: boolean,
  sortOrder: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  userEmail: string,
  reviews: Reviews,
};

import { AuthorizationStatus } from '../const';
import { Offers } from './offer';

export type State = {
  offers: Offers,
  city: string,
  sortIn: boolean,
  sortOrder: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};

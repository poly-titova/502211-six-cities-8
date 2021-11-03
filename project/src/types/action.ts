import { Offers} from '../types/state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  FillingListOffers = 'main/fillingListOffers'
};

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
};

export type FillingListOffersAction = {
  type: ActionType.FillingListOffers;
  payload: Offers;
};

export type Actions = ChangeCityAction | FillingListOffersAction;

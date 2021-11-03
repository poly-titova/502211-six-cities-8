import { Offers } from '../types/state';
import { ActionType, ChangeCityAction, FillingListOffersAction } from '../types/action';

export const changeCity = (): ChangeCityAction => ({
  type: ActionType.ChangeCity,
});

export const fillingListOffers = (listOffers: Offers): FillingListOffersAction => ({
  type: ActionType.FillingListOffers,
  payload: listOffers,
});

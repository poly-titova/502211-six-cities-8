import { ActionType, ChangeCity, FillingListOffers } from '../types/action';

export const changeCity = (city: string): ChangeCity => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const fillingListOffers = (): FillingListOffers => ({
  type: ActionType.FillingListOffers,
});

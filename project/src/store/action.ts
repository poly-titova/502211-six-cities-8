import { ActionType, ChangeCity, FillingListOffers, ChangeSort } from '../types/action';

export const changeCity = (city: string): ChangeCity => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const fillingListOffers = (): FillingListOffers => ({
  type: ActionType.FillingListOffers,
});

export const changeSort = (): ChangeSort => ({
  type: ActionType.ChangeSort,
});

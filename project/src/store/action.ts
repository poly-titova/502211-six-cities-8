import { ActionType, ChangeCity, FillingListOffers, ChangeSort, ChangeSortOrder, ChangeListOffersBySort } from '../types/action';

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

export const changeSortOrder = (sortOrder: string): ChangeSortOrder => ({
  type: ActionType.ChangeSortOrder,
  payload: sortOrder,
});

export const changeListOffersBySort = (): ChangeListOffersBySort => ({
  type: ActionType.ChangeListOffersBySort,
});

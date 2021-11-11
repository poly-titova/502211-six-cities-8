export enum ActionType {
  ChangeCity = 'main/changeCity',
  FillingListOffers = 'main/fillingListOffers',
  ChangeSort = 'main/changeSort',
  ChangeSortOrder = 'main/changeSortOrder',
  ChangeListOffersBySort = 'main/changeListOffersBySort',
}

export type ChangeCity = {
  type: ActionType.ChangeCity;
  payload: string;
};

export type FillingListOffers = {
  type: ActionType.FillingListOffers;
};

export type ChangeSort = {
  type: ActionType.ChangeSort;
};

export type ChangeSortOrder = {
  type: ActionType.ChangeSortOrder;
  payload: string;
};

export type ChangeListOffersBySort = {
  type: ActionType.ChangeListOffersBySort;
};

export type Actions = ChangeCity | FillingListOffers | ChangeSort | ChangeSortOrder | ChangeListOffersBySort;

export enum ActionType {
  ChangeCity = 'main/changeCity',
  FillingListOffers = 'main/fillingListOffers',
  ChangeSort = 'main/changeSort',
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

export type Actions = ChangeCity | FillingListOffers | ChangeSort;

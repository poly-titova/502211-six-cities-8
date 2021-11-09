export enum ActionType {
  ChangeCity = 'main/changeCity',
  FillingListOffers = 'main/fillingListOffers',
}

export type ChangeCity = {
  type: ActionType.ChangeCity;
  payload: string;
};

export type FillingListOffers = {
  type: ActionType.FillingListOffers;
};

export type Actions = ChangeCity | FillingListOffers;

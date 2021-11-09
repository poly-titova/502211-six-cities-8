export enum ActionType {
  ChangeCity = 'main/changeCity',
}

export type ChangeCity = {
  type: ActionType.ChangeCity;
  payload: string;
};

export type Actions = ChangeCity;

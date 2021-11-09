import { ActionType, ChangeCity } from '../types/action';

export const changeCity = (city: string): ChangeCity => ({
  type: ActionType.ChangeCity,
  payload: city,
});

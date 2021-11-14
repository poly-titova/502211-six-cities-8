import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../const';
import { Offers } from './offer';
import { State } from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  FillingListOffers = 'main/fillingListOffers',
  ChangeSort = 'main/changeSort',
  ChangeSortOrder = 'main/changeSortOrder',
  ChangeListOffersBySort = 'main/changeListOffersBySort',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
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

export type LoadOffers = {
  type: ActionType.LoadOffers;
  payload: Offers;
};

export type RequireAuthorization = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
};

export type RequireLogout = {
  type: ActionType.RequireLogout;
};

export type Actions = ChangeCity | FillingListOffers | ChangeSort | ChangeSortOrder | ChangeListOffersBySort | LoadOffers | RequireAuthorization | RequireLogout;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

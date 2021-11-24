import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../const';
import { Offers } from './offer';
import { Reviews } from './review';
import { State } from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSort = 'main/changeSort',
  ChangeSortOrder = 'main/changeSortOrder',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'main/redirectToRoute',
  GetEmail = 'login/getEmail',
  LoadReviews = 'data/loadReviews',
  LoadFavorites = 'data/loadFavorites',
}

export type ChangeCity = {
  type: ActionType.ChangeCity;
  payload: string;
};

export type ChangeSort = {
  type: ActionType.ChangeSort;
};

export type ChangeSortOrder = {
  type: ActionType.ChangeSortOrder;
  payload: string;
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

export type RedirectToRoute = {
  type: ActionType.RedirectToRoute;
  payload: string;
};

export type GetEmail = {
  type: ActionType.GetEmail;
  payload: string;
};

export type LoadReviews = {
  type: ActionType.LoadReviews;
  payload: Reviews;
};

export type LoadFavorites = {
  type: ActionType.LoadFavorites;
  payload: string;
};

export type Actions = ChangeCity | ChangeSort | ChangeSortOrder | LoadOffers | RequireAuthorization | RequireLogout | RedirectToRoute | GetEmail | LoadReviews | LoadFavorites;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

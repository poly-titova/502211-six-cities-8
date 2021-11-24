import { ThunkActionResult } from '../types/action';
import { loadOffers, redirectToRoute, requireAuthorization, requireLogout, getEmail, loadReviews, loadFavorites } from './action';
import { saveToken, dropToken, Token } from '../services/token';
import { toast } from 'react-toastify';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { adaptOffer, adaptReview } from '../types/types';
import { AuthData } from '../types/auth-data';

const AUTH_FAIL_MESAGE = 'Не забудьте авторизоваться';

export const fetchOfferAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<unknown>(APIRoute.Offers);
    dispatch(loadOffers(adaptOffer(data)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      toast.info(AUTH_FAIL_MESAGE);
    }
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(getEmail(email));
    dispatch(redirectToRoute(AppRoute.Root));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(getEmail(''));
    dispatch(requireLogout());
  };

export const addReviewAction = (offerId: number, comment: string, rating: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(`${APIRoute.Reviews}/${offerId}`, { comment, rating });
    saveToken(token);
  };

export const fetchReviewsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<unknown>(`${APIRoute.Reviews}/${id}`);
    dispatch(loadReviews(adaptReview(data)));
  };

export const addFavoriteAction = (offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(APIRoute.Favorites, { offerId });
    saveToken(token);
  };

export const fetchFavoritesAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<string>(APIRoute.Favorites);
    dispatch(loadFavorites(data));
  };

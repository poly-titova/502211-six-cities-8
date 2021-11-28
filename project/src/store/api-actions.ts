import { ThunkActionResult } from '../types/action';
import { loadOffers, redirectToRoute, requireAuthorization, requireLogout, getEmail, loadReviews, setCurrentOffer } from './action';
import { saveToken, dropToken, Token } from '../services/token';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { adaptOffer, adaptReview, toOffer } from '../types/types';
import { AuthData } from '../types/auth-data';

export const fetchOfferAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<unknown>(APIRoute.Offers);
    dispatch(loadOffers(adaptOffer(data)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
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

export const addFavoriteAction = (offerId: number, offer: unknown): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(`${APIRoute.Favorites}/${offerId}`, toOffer(offer));
    saveToken(token);
    dispatch(setCurrentOffer(toOffer(offer)));
  };

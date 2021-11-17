import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import { AuthorizationStatus } from '../const';

const initialState = {
  offers: [],
  city: 'Paris',
  sortIn: false,
  sortOrder: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.ChangeSort:
      return { ...state, sortIn: !state.sortIn };
    case ActionType.ChangeSortOrder:
      return { ...state, sortOrder: action.payload, sortIn: false };
    case ActionType.LoadOffers:
      return { ...state, offers: action.payload, isDataLoaded: true };
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    default:
      return state;
  }
};

export { reducer };

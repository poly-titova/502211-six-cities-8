import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import { offers } from '../mocks/offers';

const initialState = {
  city: 'Paris',
  listOffers: offers.filter((offer) => offer.city === 'Paris'),
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.FillingListOffers:
      return { ...state, listOffers: offers.filter((offer) => offer.city === state.city) };
    default:
      return state;
  }
};

export { reducer };

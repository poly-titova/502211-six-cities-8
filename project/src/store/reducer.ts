import { ActionType, Actions } from '../types/action';
import { Offer } from '../types/offer';
import { State } from '../types/state';
import { offers } from '../mocks/offers';

const initialState = {
  offers,
  city: 'Paris',
  listOffers: offers.filter((offer) => offer.city === 'Paris'),
  sortIn: false,
  sortOrder: 'Popular',
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.FillingListOffers:
      return { ...state, listOffers: offers.filter((offer) => offer.city === state.city) };
    case ActionType.ChangeSort:
      return { ...state, sortIn: !state.sortIn };
    case ActionType.ChangeSortOrder:
      return { ...state, sortOrder: action.payload };
    case ActionType.ChangeListOffersBySort:
      if (state.sortOrder === 'Popular') {
        return { ...state, listOffers: offers.filter((offer) => offer.city === state.city) };
      }

      if (state.sortOrder === 'Price: low to high') {
        return { ...state, listOffers: state.listOffers.sort((a: Offer, b: Offer) => a.priceValue - b.priceValue) };
      }

      if (state.sortOrder === 'Price: high to low') {
        return { ...state, listOffers: state.listOffers.sort((a: Offer, b: Offer) => b.priceValue - a.priceValue) };
      }

      if (state.sortOrder === 'Top rated first') {
        return { ...state, listOffers: state.listOffers.sort((a: Offer, b: Offer) => b.rating - a.rating) };
      }

      return { ...state, listOffers: state.listOffers };
    case ActionType.LoadOffers:
      return { ...state, offers };
    default:
      return state;
  }
};

export { reducer };

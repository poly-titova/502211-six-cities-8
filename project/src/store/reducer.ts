import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';

const initialState = {
  city: 'Paris',
  listOffers: [
    {
      id: 0,
      firstImage: 'img/room.jpg',
      mark: 'Premium',
      name: 'Beautiful & luxurious studio at great location',
      rating: 4.8,
      type: 'Apartment',
      priceValue: 120,
      priceText: 'night',
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
  ],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: 'Cologne' };
    case ActionType.FillingListOffers:
      return {
        ...state, listOffers: [
          {
            id: 1,
            firstImage: 'img/apartment-01.jpg',
            mark: 'Premium',
            name: 'Wood and stone place',
            rating: 4.5,
            type: 'Private room',
            priceValue: 80,
            priceText: 'night',
            lat: 52.369553943508,
            lng: 4.85309666406198,
          },
          {
            id: 2,
            firstImage: 'img/room.jpg',
            mark: 'Premium',
            name: 'Canal View Prinsengracht',
            rating: 3.4,
            type: 'Apartment',
            priceValue: 132,
            priceText: 'night',
            lat: 52.3909553943508,
            lng: 4.929309666406198,
          }
        ]
      };
    default:
      return state;
  }
};

export { reducer };

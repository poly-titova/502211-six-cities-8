import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';

const initialState = {
  city: 'Paris',
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    default:
      return state;
  }
};

export { reducer };

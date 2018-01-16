import { DISPLAY_CATEGORY } from '../actions';

export default function displayCategory(state=[], action) {
  switch(action.type) {
    case DISPLAY_CATEGORY:
    return action.payload;
    default: return state;
  }
}

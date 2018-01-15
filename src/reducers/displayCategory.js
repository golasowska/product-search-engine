import { DISPLAY_CATEGORY } from '../actions';

export default function displayCategory(state=[], action) {
  console.log('action payload', action.payload);
  switch(action.type) {
    case DISPLAY_CATEGORY:
    return action.payload;
    default: return state;
  }
}

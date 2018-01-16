import { DISPLAY_PRODUCTS } from '../actions';

export default function display(state={}, action) {
  console.log('action payload', action.payload);
  switch(action.type) {
    case DISPLAY_PRODUCTS:
    return action.payload;
    default: return state;
  }
}

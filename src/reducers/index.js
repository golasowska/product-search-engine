import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import DisplayProductReducer from './display';

const rootReducer = combineReducers({
  form: FormReducer,
  router: routerReducer,
  display: DisplayProductReducer
});

export default rootReducer;

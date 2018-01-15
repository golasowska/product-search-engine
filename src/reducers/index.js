import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import DisplayProductReducer from './display';
import DisplayCategoryReducer from './displayCategory';

const rootReducer = combineReducers({
  form: FormReducer,
  router: routerReducer,
  display: DisplayProductReducer,
  displayCategory: DisplayCategoryReducer
});

export default rootReducer;

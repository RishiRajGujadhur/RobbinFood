import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import stocks from './stock_errors_reducer';
import news from './news_errors_reducer'
export default combineReducers({
  session,
  stocks,
  news
});

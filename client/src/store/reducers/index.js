import { combineReducers } from 'redux';

import userReducer from './user';
import uiReducer from './ui';

const rootReducers = combineReducers({
	user: userReducer,
	ui: uiReducer
});

export default rootReducers;
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';

import Reducers from './reducers';

const persistConfig = {
	key: 'root',
	storage,
	storageSession
};

export const store = createStore(
	persistReducer(persistConfig, Reducers),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
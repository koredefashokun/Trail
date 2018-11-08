import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const appReducer = combineReducers({});

const middlewares = applyMiddleware(thunk);

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export const store = createStore(rootReducer, middlewares);

export const persistor = persistStore(store);

import { applyMiddleware, combineReducers, createStore  } from 'redux';
import thunk from 'redux-thunk'
import * as reducers from '../reducers';

import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const userpersistConfig={
  key: 'user',
  storage
}
const useReducer=combineReducers({...reducers,
  user:persistReducer(userpersistConfig,reducers.user)});


export const store=createStore(useReducer,applyMiddleware(thunk));


export const persistor=persistStore(store);
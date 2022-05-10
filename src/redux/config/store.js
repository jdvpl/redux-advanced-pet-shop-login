import { applyMiddleware, combineReducers, createStore  } from 'redux';
import thunk from 'redux-thunk'
import * as reducers from '../reducers';

const useReducer=combineReducers(reducers);

export const store=createStore(useReducer,applyMiddleware(thunk));
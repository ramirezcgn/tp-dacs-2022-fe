import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { rootReducer } from 'reducers';

const configureStore = () =>
  createStore(
    rootReducer,
    compose(responsiveStoreEnhancer, applyMiddleware(thunk)),
  );

export const store = configureStore();

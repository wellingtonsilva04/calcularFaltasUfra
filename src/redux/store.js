import { createStore, compose, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducers';

const persistConfig = {
  key: '@root',
  storage: AsyncStorage,
 };
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const middleWare = [];
 const pReducer = persistReducer(persistConfig, rootReducer);
 
 export const store = createStore(pReducer,composeEnhancer(applyMiddleware(...middleWare)));
 export const persistor = persistStore(store);
 

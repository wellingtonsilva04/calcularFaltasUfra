import { createStore, compose, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const middleWare = [];
 const pReducer = persistReducer(persistConfig, rootReducer);
 
 export const store = createStore(pReducer,composeEnhancer(applyMiddleware(...middleWare)));
 export const persistor = persistStore(store);
 

import app from './modules/app';
import { routerReducer } from 'react-router-redux';
import { reducer as notifications } from 'react-notification-system-redux';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import encryptor from './encryptor';

const userPersistConfig = {
  key: 'app',
  storage: storage,
  transforms: [encryptor],
  blacklist: ['isLoading']
};

export default combineReducers({
  app: persistReducer(userPersistConfig, app),
  router: routerReducer,
  notifications
});

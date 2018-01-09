import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { restMiddleware } from '../utilities/redux';
import reducer from '../redux';

export default history => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger, thunk, routerMiddleware(history), restMiddleware))
  );
  const persistor = persistStore(store);
  return { persistor, store };
};

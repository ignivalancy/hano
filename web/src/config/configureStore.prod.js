import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { restMiddleware } from '../utilities/redux';
import reducer from '../redux';

export default history => {
  const store = createStore(
    reducer,
    compose(applyMiddleware(thunk, routerMiddleware(history), restMiddleware))
  );
  const persistor = persistStore(store);
  return { persistor, store };
};

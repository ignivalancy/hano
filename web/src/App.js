import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Routes from './config/routes';
import Loader from './components/Loader';
import Notifications from 'react-notification-system-redux';
import configureStore from './config/configureStore';
import { configureRestClient } from './utilities/rest';
import ThemeDefault from './constants/theme-default';

const history = createHistory();
const { persistor, store } = configureStore(history);
configureRestClient(store);

const ReduxNotifications = connect(state => ({ notifications: state.notifications }))(
  Notifications
);

const ReduxLoader = connect(state => ({ loading: state.app.isLoading }))(Loader);

export default () => {
  return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Routes {...store} />
          </ConnectedRouter>
          <ReduxLoader />
          <ReduxNotifications />
        </PersistGate>
      </Provider>
    </MuiThemeProvider>
  );
};

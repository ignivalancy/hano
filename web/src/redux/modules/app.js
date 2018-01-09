import { push } from 'react-router-redux';
import RestClient from '../../utilities/rest';
import {
  AppLoad,
  getActionType,
  getActionTypes,
  getActionCreator,
  getReducer,
  on
} from '../../utilities/redux';
import Notifications from 'react-notification-system-redux';

// Types
export const NavToggle = getActionType('TOGGLE');
export const LoginTypes = getActionTypes('LOGIN');
export const RegisterTypes = getActionTypes('REGISTER');
export const LogoutTypes = getActionTypes('LOGOUT');

// Actions
export const toggle = getActionCreator(NavToggle);

export const login = data => {
  return {
    types: LoginTypes,
    callAPI: () => RestClient.post('user/login', data),
    handleAction: ({ type, payload, store }) => {
      switch (type) {
        case LoginTypes.SUCCESS:
          store.dispatch(Notifications.success({ title: 'Welcome', ...payload }));
          store.dispatch(push('/'));
          return;
        default:
          return;
      }
    }
  };
};

on(LoginTypes.ERROR, ({ payload, store }) => {
  store.dispatch(Notifications.warning({ title: 'Warning', ...payload }));
});

export const register = data => {
  return {
    types: RegisterTypes,
    callAPI: () => RestClient.post('user/register', data),
    handleAction: ({ type, payload, store }) => {
      switch (type) {
        case RegisterTypes.SUCCESS:
          store.dispatch(Notifications.success({ title: 'Welcome', ...payload }));
          store.dispatch(push('/signin'));
          return;
        default:
          return;
      }
    }
  };
};

on(RegisterTypes.ERROR, ({ payload, store }) => {
  store.dispatch(Notifications.warning({ title: 'Warning', ...payload }));
});

export const logout = () => {
  return {
    types: LogoutTypes,
    callAPI: () => RestClient.put('user/logout')
  };
};

on(LogoutTypes.SUCCESS, ({ payload, store }) => {
  store.dispatch(Notifications.success({ title: 'Bye Bye!', ...payload }));
  store.dispatch(push('/signin'));
});

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  navDrawerOpen: true
};

// Reducer
export default getReducer(initialState, {
  [NavToggle]: state => ({
    ...state,
    navDrawerOpen: !state.navDrawerOpen
  }),
  [AppLoad]: (state, { payload }) => ({
    ...state,
    isLoading: payload
  }),
  [LoginTypes.SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    ...payload
  }),
  [LoginTypes.ERROR]: () => initialState,
  [LogoutTypes.SUCCESS]: () => initialState
});

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({
  component,
  layout: Layout,
  type = 'private',
  auhtHandler,
  to = '/signin',
  store,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (type === 'public') return <Layout component={component} {...props} />;
      if (type === 'private')
        return auhtHandler(store) ? (
          <Layout component={component} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { from: props.location }
            }}
          />
        );
      if (type === 'user')
        return !auhtHandler(store) ? (
          <Layout component={component} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { from: props.location }
            }}
          />
        );
    }}
  />
);

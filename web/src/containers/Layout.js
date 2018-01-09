import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, { SMALL } from 'material-ui/utils/withWidth';
import Data from '../constants/data';
import { toggle, logout } from '../redux/modules/app';

const Layout = props => {
  const { navDrawerOpen } = props;
  const paddingLeftDrawerOpen = 236;
  const styles = {
    header: {
      paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
    },
    container: {
      margin: '80px 20px 20px 15px',
      paddingLeft: navDrawerOpen && props.width !== SMALL ? paddingLeftDrawerOpen : 0
    }
  };

  return (
    <div>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <Header
        styles={styles.header}
        handleChangeRequestNavDrawer={props.toggle}
        onLogoutClick={props.logout}
      />
      <LeftDrawer navDrawerOpen={navDrawerOpen} menus={Data.menus} {...props.data} />
      <div style={styles.container}>{props.children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

const mapStateToProps = state => ({
  ...state.app
});

const mapDispatchToProps = {
  toggle,
  logout
};

export default withWidth()(connect(mapStateToProps, mapDispatchToProps)(Layout));

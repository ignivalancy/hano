import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Drawer, MenuItem } from 'material-ui';
import { white } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

const LeftDrawer = props => {
  let { navDrawerOpen } = props;

  const styles = {
    menuItem: {
      color: white,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '30px 0 20px 20px',
        backgroundImage: 'url(/material_bg.png)',
        height: 65
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };

  return (
    <Drawer docked={true} open={navDrawerOpen}>
      <div style={styles.avatar.div}>
        <Avatar src="/profile-placeholder.png" size={50} style={styles.avatar.icon} />
        <span style={styles.avatar.span}>{props.fullName.capitalizeEachLetter()}</span>
      </div>
      <div>
        {props.menus.map((menu, index) => (
          <MenuItem
            key={index}
            style={styles.menuItem}
            primaryText={menu.text}
            leftIcon={menu.icon}
            containerElement={<Link to={menu.link} />}
          />
        ))}
      </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array
};

LeftDrawer.defaultProps = {
  navDrawerOpen: true,
  fullName: 'admin'
};

export default LeftDrawer;

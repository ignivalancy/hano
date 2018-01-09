import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { white } from 'material-ui/styles/colors';
import SearchBox from './SearchBox';

const Header = ({ styles, handleChangeRequestNavDrawer, onLogoutClick }) => {
  const style = {
    appBar: {
      position: 'fixed',
      top: 0,
      overflow: 'hidden',
      maxHeight: 57
    },
    menuButton: {
      marginLeft: 10
    }
  };

  return (
    <div>
      <AppBar
        style={{ ...styles, ...style.appBar }}
        title={<SearchBox />}
        iconElementLeft={
          <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
            <Menu color={white} />
          </IconButton>
        }
        iconElementRight={
          <IconMenu
            color={white}
            iconButtonElement={
              <IconButton>
                <MoreVertIcon color={white} />
              </IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem primaryText="Sign out" onClick={onLogoutClick} />
          </IconMenu>
        }
      />
    </div>
  );
};

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;

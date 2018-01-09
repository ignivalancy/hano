import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Divider,
  IconButton,
  IconMenu,
  List,
  ListItem,
  MenuItem,
  Subheader,
  Paper
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400, cyan600, white } from 'material-ui/styles/colors';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import GlobalStyles from '../../constants/styles';

const RecentlyProducts = props => {
  const styles = {
    header: {
      backgroundColor: cyan600,
      color: white
    }
  };

  const iconButtonElement = (
    <IconButton touch={true} tooltipPosition="bottom-left">
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>View</MenuItem>
    </IconMenu>
  );

  return (
    <Paper>
      <List>
        <Subheader style={{ ...GlobalStyles.title, ...styles.header }}>Recent Products</Subheader>
        {props.data.map(item => (
          <div key={item.title}>
            <ListItem
              leftAvatar={<Avatar icon={<Wallpaper />} />}
              primaryText={item.title}
              secondaryText={item.text}
              rightIconButton={rightIconMenu}
            />
            <Divider inset={true} />
          </div>
        ))}
      </List>
    </Paper>
  );
};

RecentlyProducts.propTypes = {
  data: PropTypes.array
};

export default RecentlyProducts;

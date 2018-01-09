import React from 'react';
import { IconButton, TextField } from 'material-ui';
import { white } from 'material-ui/styles/colors';
import Search from 'material-ui/svg-icons/action/search';

export default () => {
  const styles = {
    iconButton: {
      float: 'left',
      paddingTop: 17
    },
    textField: {
      color: white,
      height: 30
    },
    inputStyle: {
      color: white,
      paddingLeft: 5
    },
    hintStyle: {
      height: 20,
      paddingLeft: 5,
      color: white
    }
  };

  return (
    <div style={{ float: 'right' }}>
      <IconButton style={styles.iconButton}>
        <Search color={white} />
      </IconButton>
      <TextField
        hintText="Search..."
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.hintStyle}
      />
    </div>
  );
};

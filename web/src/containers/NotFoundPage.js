import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div style={styles.container}>
      <Card>
        <CardTitle title="Page not found :(" />
        <CardText>
          Maybe the page you are looking for has been removed, or you typed in the wrong URL
        </CardText>
        <CardActions>
          <FlatButton label="Go to homepage" containerElement={<Link to="/" />} secondary />
        </CardActions>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    minWidth: 320,
    maxWidth: 600,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  }
};

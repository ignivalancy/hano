import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Subheader } from 'material-ui';
import { white, purple600, purple500 } from 'material-ui/styles/colors';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import GlobalStyles from '../../constants/styles';

const NewOrders = props => {
  const styles = {
    paper: {
      backgroundColor: purple500,
      height: 150
    },
    div: {
      height: 95,
      padding: '5px 15px 0 15px'
    },
    header: {
      color: white,
      backgroundColor: purple600
    }
  };

  return (
    <Paper style={styles.paper}>
      <Subheader style={{ ...GlobalStyles.title, ...styles.header }}>New Orders</Subheader>
      <div style={styles.div}>
        <ResponsiveContainer>
          <LineChart data={props.data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

NewOrders.propTypes = {
  data: PropTypes.array
};

export default NewOrders;

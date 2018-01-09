import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Subheader } from 'material-ui';
import { white, pink600, pink500 } from 'material-ui/styles/colors';
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';
import GlobalStyles from '../../constants/styles';

const MonthlySales = props => {
  const styles = {
    paper: {
      backgroundColor: pink600,
      height: 150
    },
    div: {
      height: 95,
      padding: '5px 15px 0 15px'
    },
    header: {
      color: white,
      backgroundColor: pink500
    }
  };

  return (
    <Paper style={styles.paper}>
      <Subheader style={{ ...GlobalStyles.title, ...styles.header }}>Monthly Sales</Subheader>
      <div style={styles.div}>
        <ResponsiveContainer>
          <BarChart data={props.data}>
            <Bar dataKey="uv" fill={pink500} />
            <XAxis dataKey="name" stroke="none" tick={{ fill: white }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

MonthlySales.propTypes = {
  data: PropTypes.array
};

export default MonthlySales;

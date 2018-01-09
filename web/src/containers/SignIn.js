import React, { Component } from 'react';
import { Paper, FlatButton, RaisedButton, TextField } from 'material-ui';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { login } from '../redux/modules/app';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  handleClick = () => {
    this.props.login(this.state);
  };
  render() {
    return (
      <div style={styles.container}>
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <Paper style={styles.form} zDepth={1}>
          <TextField
            type="email"
            fullWidth
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <TextField
            type="password"
            fullWidth
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) => this.setState({ password: newValue })}
          />
          <RaisedButton
            label="Sign In"
            fullWidth
            secondary
            style={styles.button}
            onClick={this.handleClick}
          />
        </Paper>
        <FlatButton
          label="Register New Account"
          fullWidth
          containerElement={<Link to="/signup" />}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  form: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  button: {
    float: 'right',
    marginTop: 20
  }
};

// const mapStateToProps = (state) => ({
//   ...state.app
// });

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(SignIn);

import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { blue600, grey900 } from 'material-ui/styles/colors';

export default getMuiTheme({
  palette: {},
  appBar: {
    height: 57,
    color: grey900
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600
  }
});

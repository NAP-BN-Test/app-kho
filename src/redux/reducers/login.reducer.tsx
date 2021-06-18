import { Actions } from 'react-native-router-flux';
import {LOGIN, LOGOUT} from '../constants/index';

const initState = {
  userName: '',
  passWord: '',
};

const rdc_login = (state = initState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return state;
    case LOGOUT:
      Actions.login();
      return state;
    default:
      return state;
  }
};

export default rdc_login;

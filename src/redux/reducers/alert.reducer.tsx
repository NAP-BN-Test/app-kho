import {ALERT_SUCCESS, ALERT_ERROR} from '../constants';
import Toast from 'react-native-simple-toast';
const initState = {
  type: '',
  message: '',
};

function rdc_alert(state = initState, action: any) {
  switch (action.type) {
    case ALERT_SUCCESS:
      Toast.showWithGravity(action.message, 5000, Toast.TOP);
      return {
        type: 'success',
        message: action.message,
      };
    case ALERT_ERROR:
      Toast.showWithGravity(action.message, 5000, Toast.TOP);
      return {
        type: 'error',
        message: action.message,
      };
    default:
      return state;
  }
}

export default rdc_alert;

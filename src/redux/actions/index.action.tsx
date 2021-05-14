import * as constants from '../constants';
import {Actions} from 'react-native-router-flux';

function act_alert_success(messages: string) {
    return {
      type: constants.ALERT_SUCCESS,
      message: messages,
    };
  }
  function act_alert_error(messages: string) {
    return {
      type: constants.ALERT_ERROR,
      message: messages,
    };
  }




// Action
  function act_login(username: any, password: any) {
    console.log('username: '+username,'password: '+ password);
    
    return (dispatch: any) => {
      let body = {
        username: username,
        password: password,
      };

      if(username === 'dung' && password === '1'){
        Actions.main();
      }else{
        dispatch(act_alert_error('Đăng nhập thất bại!'));
      }

      
      // Services.login(body).then(async (res) => {
      //   if (res.accesstoken.length > 0) {
      //     dispatch(act_alert_success('Đăng nhập thành công!'));
          // let user: User = {
          //   hoten: res.userinfo ? res.userinfo.HoTenVI : '',
          //   namsinh: res.userinfo ? res.userinfo.NamSinh.split('T')[0] : '',
          //   gioitinh: res.userinfo
          //     ? res.userinfo.GioiTinh == 0
          //       ? 'Nam'
          //       : 'Nữ'
          //     : '',
          //   quequan: res.userinfo ? res.userinfo.QueQuan : '',
          //   socmt: res.userinfo ? res.userinfo.SoCMT : '',
          //   didong: res.userinfo ? res.userinfo.DiDong : '',
          //   email: res.userinfo ? res.userinfo.Email : '',
          //   permisson: res.permission,
          // };
          // dispatch(get_user_info(user));
          // Actions.main();
        // } else {
        //   dispatch(act_alert_error('Đăng nhập thất bại!'));
        // }
    //   });
    };
  }

  export const Action = {
    act_login,
  };
  


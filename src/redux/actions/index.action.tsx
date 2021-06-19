import * as constants from '../constants';
import {Actions} from 'react-native-router-flux';
import {Services} from '../../services/services';
import {DONVITINH, KHACHHANG, KHO, NHACUNGCAP, SANPHAM, User} from '../../types';
import AsyncStorage from '@react-native-community/async-storage';

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

function get_user_info(user: User) {
  return {type: constants.GET_USER_INFO, value: user};
}

function get_dm_kho(kho: KHO) {
  return {type: constants.GET_DMKHO, value: kho};
}

function get_dm_ncc(ncc: NHACUNGCAP) {
  return {type: constants.GET_DMNCC, value: ncc};
}

function get_dm_kh(kh: KHACHHANG) {
  return {type: constants.GET_KHACHHANG, value: kh};
}

function get_dm_sp(sp: SANPHAM) {
  return {type: constants.GET_SANPHAM, value: sp};
}

function get_dm_dvt(dvt: DONVITINH) {
  return {type: constants.GET_DONVITINH, value: dvt};
}

function logout(user: User) {
  return {type: constants.LOGOUT, value: user};
}

// Action
function act_login(username: any, password: any) {
  let body = {
    username: username,
    password: password,
  };
  return (dispatch: any) => {
    Services.login(body).then(async (res) => {
      if (res.status === 200) {
        dispatch(act_alert_success('Đăng nhập thành công'));
        let user: User = {
          userinfo: res.data.userinfo,
          accesstoken: res.data.accesstoken,
          permisson: res.data.permisson,
        };
        dispatch(get_user_info(user));
        Actions.main();
      } else {
        dispatch(act_alert_error('Đăng nhập không thành công'));
      }
    });
  };
}

function act_logout() {
  return (dispatch: any) => {
    AsyncStorage.removeItem('username')
    AsyncStorage.removeItem('password')
    let user: User = {
      userinfo: '',
      accesstoken: '',
      permisson: '',
    };
    dispatch(logout(user));
    Actions.login();
  };
}

function act_getkho() {
  return (dispatch: any) => {
    Services.get_kho().then(async (res) => {
      if (res.status === 200) {
        console.log(res);
        
        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_dm_kho(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_nhacungcap() {
  return (dispatch: any) => {
    Services.get_nhacungcap().then(async (res) => {
      if (res.status === 200) {
        console.log(res);
        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_dm_ncc(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_getkhachhang() {
  return (dispatch: any) => {
    Services.get_khachhang().then(async (res) => {
      if (res.status === 200) {
        console.log(res);
        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_dm_kh(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_getsanpham(data: any) {
  let body ={
    idkho: data.idkho,
    idnhacungcap: data.idnhacungcap,
    idkhachhang: data.idkhachhang,
    tukhoa: data.tukhoa,
    mavach: data.mavach,
    idkhoden:data.idkhoden
  }
  return (dispatch: any) => {
    Services.get_sanpham(body).then(async (res) => {
      if (res.status === 200) {
        console.log(res);
        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_dm_sp(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_getdonvitinh(idsanpham: number) {
  let body ={
    idsanpham: idsanpham,
  }
  return (dispatch: any) => {
    Services.get_donvitinh(body).then(async (res) => {
      if (res.status === 200) {
        console.log("Đơn vị tính",res);
        
        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_dm_dvt(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}



export const Action = {
  act_getdonvitinh,
  act_getsanpham,
  act_getkhachhang,
  act_nhacungcap,
  act_getkho,
  act_logout,
  act_login,
  act_alert_error,
};

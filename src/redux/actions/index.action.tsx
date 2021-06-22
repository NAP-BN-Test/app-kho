import * as constants from '../constants';
import {Actions} from 'react-native-router-flux';
import {Services} from '../../services/services';
import {
  DONVITINH,
  KHACHHANG,
  KHO,
  NHACUNGCAP,
  SANPHAM,
  User,
} from '../../types';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

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
    AsyncStorage.removeItem('username');
    AsyncStorage.removeItem('password');
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
  let body = {
    idkho: data.idkho,
    idnhacungcap: data.idnhacungcap,
    idkhachhang: data.idkhachhang,
    tukhoa: data.tukhoa,
    mavach: data.mavach,
    idkhoden: data.idkhoden,
  };
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
  let body = {
    idsanpham: idsanpham,
  };
  return (dispatch: any) => {
    Services.get_donvitinh(body).then(async (res) => {
      if (res.status === 200) {
        console.log('Đơn vị tính', res.data);

        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_dm_dvt(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_get_tonkhotheodonvi(data: any) {
  let body = {
    idkho: data.idkho,
    tukhoa: data.tukhoa,
  };
  return (dispatch: any) => {
    Services.get_tonkhotheodonvi(body).then(async (res) => {
      console.log(res);

      if (res.status === 200) {
        console.log('Danh sách tồn kho', res.data);

        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        // dispatch(get_dm_dvt(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_add_px(data: any) {
  console.log(data);

  // let ListHangHoa = new Array();
  // data?.ListHangHoa?.map((item: any) => {
  //   ListHangHoa.push({
  //     IDSanPham: item.sp.ID,
  //     SoLuong: item.sl,
  //     IDDvtXuat: item.dvt.Id,
  //     DonGia: item.dongia,
  //     NgaySanXuat: item.ngaysanxuat,
  //     IDLoaiTem: item.IDLoaiTem,
  //     SoLuongTem: item.sltem,
  //     GhiChu: item.ghichu,
  //     FlagKyGui: item.FlagKyGui,
  //   });
  // });
  // let body = {
  //   Code: 'PX.TestApp.1',
  //   IDKho: data.IDKho,
  //   EnumLoai: data.EnumLoai,
  //   IDNguoiXuat: data.IDNguoiXuat,
  //   NgayXuat: data.NgayXuat,
  //   NgayTaoPhieu: moment(
  //     new Date().toLocaleString('en-GB', {timeZone: 'Asia/Bangkok'}),
  //   ).format('YYYY-MM-DD HH:mm:ss'),
  //   IDKhachHang: data.IDKhachHang,
  //   GhiChu: data.GhiChu,
  //   SoKhoi: data.SoKhoi,
  //   TrongLuong: data.TrongLuong,
  //   IDKhoDen: data.IDKhoDen,
  //   IDNhaCungCap: data.IDNhaCungCap,
  //   ListHangHoa: ListHangHoa,
  // };

  // console.log(body);

  // return (dispatch: any) => {
  //   Services.get_AddPX(body).then(async (res) => {
  //     console.log(res);

  //     if (res.status === 200) {
  //       console.log('Add tồn kho thành công', res);

  //       dispatch(act_alert_success('Thêm thành công'));
  //       // dispatch(get_dm_dvt(res.data));
  //     } else {
  //       dispatch(act_alert_error('Lấy dữ liệu không thành công'));
  //     }
  //   });
  // };
}

export const Action = {
  act_add_px,
  act_get_tonkhotheodonvi,
  act_getdonvitinh,
  act_getsanpham,
  act_getkhachhang,
  act_nhacungcap,
  act_getkho,
  act_logout,
  act_login,
  act_alert_error,
};

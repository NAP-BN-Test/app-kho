import * as constants from '../constants';
import {Actions} from 'react-native-router-flux';
import {Services} from '../../services/services';
import {
  CHITIETPHIEUXUAT,
  DONVITINH,
  KHACHHANG,
  KHO,
  NHACUNGCAP,
  NHANSU,
  PHIEUNHAP,
  PHIEUXUAT,
  SANPHAM,
  TONKHO,
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

function get_list_tonkho(data: TONKHO) {
  return {type: constants.GET_LIST_TONKHO, value: data};
}

function get_list_phieuxuat(data: PHIEUXUAT) {
  return {type: constants.GET_LIST_PHIEUXUAT, value: data};
}

function get_detail_phieuxuat(data: CHITIETPHIEUXUAT) {
  return {type: constants.GET_DETAILPHIEUXUAT, value: data};
}

function get_list_phieunhap(data: PHIEUNHAP) {
  return {type: constants.GET_LIST_PHIEUNHAP, value: data};
}

function get_detail_phieunhap(data: PHIEUNHAP) {
  return {type: constants.GET_DETAILPHIEUNHAP, value: data};
}

function get_list_nhansu(data: NHANSU) {
  return {type: constants.GET_LIST_NHANSU, value: data};
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
        console.log('Sản phẩm', res);
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
        dispatch(get_list_tonkho(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_add_px(data: any) {
  console.log("Data action",data);

  let ListHangHoa = new Array();
  data?.ListHangHoa?.map((item: any) => {
    console.log('ngày xuất', item.ngaysanxuat);
    
    ListHangHoa.push({
      IDSanPham: item.sp.ID,
      SoLuong: Number(item.sl),
      IDDvtXuat: item.dvt.Id,
      DonGia: Number(item.dongia),
      NgaySanXuat:
        item.ngaysanxuat === undefined
          ? null
          : moment(item.ngaysanxuat, 'DD-MM-YYYY').format('YYYY-MM-DD'),
      IDLoaiTem: item.IDLoaiTem,
      SoLuongTem: Number(item.sltem),
      GhiChu: item.ghichu,
      FlagKyGui: item.FlagKyGui === 'true' ? true : false,
    });
  });
  let body = {
    Code: data.Code,
    IDKho: data.IDKho,
    EnumLoai: data.EnumLoai,
    IDNguoiXuat: data.IDNguoiXuat,
    NgayXuat: moment(data.NgayXuat).format('YYYY-MM-DD'),
    NgayTaoPhieu: moment(
      new Date().toLocaleString('en-GB', {timeZone: 'Asia/Bangkok'}),
    ).format('YYYY-MM-DD HH:mm:ss'),
    IDKhachHang: data.IDKhachHang,
    GhiChu: data.GhiChu,
    SoKhoi: data.SoKhoi,
    TrongLuong: data.TrongLuong,
    IDKhoDen: data.IDKhoDen,
    IDNhaCungCap: data.IDNhaCungCap,
    ListHangHoa: ListHangHoa,
  };

  console.log(body);

  return (dispatch: any) => {
    Services.get_AddPX(body).then(async (res) => {
      console.log(res);

      if (res.status === 200) {
        console.log('Add phieeu xuat thanh công', res);

        dispatch(act_alert_success('Thêm thành công'));
        // dispatch(get_dm_dvt(res.data));
      } else {
        dispatch(act_alert_error(res.data));
      }
    });
  };
}

function act_get_listPhieunhap(data: any) {
  let body = {
    idkho: data.idkho,
    idnguoinhap: data.idnguoinhap,
    isadmin: data.isadmin,
    loai: data.loai,
    tukhoa: data.tukhoa,
    to: data.to, // datetime kết thúc
    from: data.from, // datetime bắt đầu
  };
  return (dispatch: any) => {
    Services.get_danhsachphieunhap(body).then(async (res) => {
      if (res.status === 200) {
        console.log('Danh sách phiếu nhập', res.data);

        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_list_phieunhap(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_getDetailPhieunhap(id: any) {
  return (dispatch: any) => {
    Services.get_detailphieunhap(id).then(async (res) => {
      if (res.status === 200) {
        console.log('Detail phieeus nhap', res.data);

        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_detail_phieunhap(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_get_listPhieuxuat(data: any) {
  let body = {
    idkho: data.idkho,
    idnguoinhap: data.idnguoinhap,
    isadmin: data.isadmin,
    loai: data.loai,
    tukhoa: data.tukhoa,
    to: data.to, // datetime kết thúc
    from: data.from, // datetime bắt đầu
  };
  return (dispatch: any) => {
    Services.get_danhsachphieuxuat(body).then(async (res) => {
      if (res.status === 200) {
        console.log('Danh sách phiếu xuất', res.data);

        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_list_phieuxuat(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_getDetailPhieuxuat(id: any) {
  return (dispatch: any) => {
    Services.get_detailphieuxuat(id).then(async (res) => {
      if (res.status === 200) {
        console.log('Detail phieeus xuaats', res.data);

        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_detail_phieuxuat(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

function act_add_pn(data: any) {
  console.log('data truyeefn vaof action', data);
  console.log('data danh sach hang hoa truyeefn vaof action', data.ListHangHoa);

  let ListHangHoa = new Array();
  data?.ListHangHoa?.map((item: any) => {
    ListHangHoa.push({
      IDSanPham: item.sp.ID,
      SoLuong: Number(item.sl),
      IDDvtNhap: item.dvt.Id,
      DonGia: Number(item.dongia),
      NgaySanXuat:
        item.ngaysanxuat === undefined
          ? null
          : moment(item.ngaysanxuat).format('YYYY-MM-DD'),
      IDLoaiTem: item.IDLoaiTem,
      SoLuongTem: Number(item.sltem),
      GhiChu: item.ghichu,
      FlagKyGui: item.FlagKyGui === 'true' ? true : false,
      IDKhachHang: item.IDKhachHang,
    });
  });
  let body = {
    Code: data.Code,
    IDKho: data.IDKho,
    EnumLoai: data.EnumLoai,
    IDNguoiNhap: data.IDNguoiNhap,
    NgayNhap: moment(data.NgayNhap).format('YYYY-MM-DD'),
    NgayTaoPhieu: moment(
      new Date().toLocaleString('en-GB', {timeZone: 'Asia/Bangkok'}),
    ).format('YYYY-MM-DD HH:mm:ss'),
    IDKhachHang: data.IDKhachHang,
    GhiChu: data.GhiChu,
    IDNhaCungCap: data.IDNhaCungCap,
    IDPhieuXuat: data.IDPhieuXuat,
    ListHangHoa: ListHangHoa,
  };

  return (dispatch: any) => {
    Services.get_AddPN(body).then(async (res) => {
      console.log(res);

      if (res.status === 200) {
        console.log('Add phieeu nhap thanh công', res);

        dispatch(act_alert_success('Thêm thành công'));
        // dispatch(get_dm_dvt(res.data));
      } else {
        dispatch(act_alert_error(res.data));
      }
    });
  };
}

function act_getNhansu() {
  return (dispatch: any) => {
    Services.get_nhansu().then(async (res) => {
      if (res.status === 200) {
        console.log('Nhân sự', res.data);

        // dispatch(act_alert_success('Lấy dữ liệu thành công'));
        dispatch(get_list_nhansu(res.data));
      } else {
        dispatch(act_alert_error('Lấy dữ liệu không thành công'));
      }
    });
  };
}

export const Action = {
  act_getDetailPhieunhap,
  act_get_listPhieunhap,
  act_add_pn,
  act_getDetailPhieuxuat,
  act_getNhansu,
  act_get_listPhieuxuat,
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

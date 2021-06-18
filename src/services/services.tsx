import axios from 'axios';
import {URL} from '../assets/data/data';

var access_token = '';

function login(req: any) {
  let body = {
    username: req.username,
    password: req.password,
  };

  return axios
    .post(`${URL}/user/login`, body)
    .then((res: any) => {
      access_token = res.data.accesstoken;
      console.log(res);
      return res;
    })
    .catch((err: any) => {
      console.log(err);
      return {accesstoken: ''};
    });
}

function get_kho() {
  return axios
    .get(`${URL}/danhmuc/kho?access_token=` + access_token)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

function get_nhacungcap() {
  return axios
    .get(`${URL}/danhmuc/nhacungcap?access_token=` + access_token)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

function get_khachhang() {
  return axios
    .get(`${URL}/danhmuc/khachhang?access_token=` + access_token)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

function get_donvitinh(req: any) {
  // let body ={
  //   idsanpham:req.idsanpham
  // }
  return axios
    .post(
      `${URL}/danhmuc/donvitinh?access_token=` +
        access_token +
        `?
        idsanpham=` +
        req.idsanpham,
    )
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

function get_sanpham(req: any) {
  let body = {
    idkho: req.idsanpham,
    idnhacungcap: req.idnhacungcap,
    idkhachhang: req.idkhachhang,
    tukhoa: req.tukhoa,
    mavach: req.mavach,
  };
  return axios
    .post(`${URL}/danhmuc/donvitinh?access_token=` + access_token, body)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

function get_loaiitem() {
  return axios
    .post(`${URL}/danhmuc/loaitem?access_token=` + access_token)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

//Start nhập tồn
function get_tonkhotheodonvi(req: any) {
  let body = {
    idkho: req.idsanpham,
    idnhacungcap: req.idnhacungcap,
    idkhachhang: req.idkhachhang,
    tukhoa: req.tukhoa,
    mavach: req.mavach,
  };
  return axios
    .post(`${URL}/danhmuc/tonkhotheodonvi?access_token=` + access_token, body)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}


function get_danhsachphieunhap(req: any) {
  let body = {
    idkho: req.idkho,
    idnguoinhap: req.idnguoinhap,
    isadmin:req.isadmin,
    loai: req.loai,
    tukhoa: req.tukhoa,
    to: req.to,// datetime kết thúc
    from: req.from, // datetime bắt đầu
  };
  return axios
    .post(`${URL}/danhsachphieunhap?access_token=` + access_token, body)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}


function get_danhsachphieuxuat(req: any) {
  let body = {
    idkho: req.idkho,
    idnguoinhap: req.idnguoinhap,
    isadmin:req.isadmin,
    loai: req.loai,
    tukhoa: req.tukhoa,
    to: req.to,// datetime kết thúc
    from: req.from, // datetime bắt đầu
  };
  return axios
    .post(`${URL}/danhsachphieuxuat?access_token=` + access_token, body)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

//End nhập tồn



export const Services = {
  get_tonkhotheodonvi,
  get_danhsachphieunhap,
  get_danhsachphieuxuat,
  get_loaiitem,
  get_sanpham,
  get_khachhang,
  get_donvitinh,
  get_nhacungcap,
  login,
  get_kho,
};

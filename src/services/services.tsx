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
  console.log(req);

  return axios
    .post(
      `${URL}/danhmuc/donvitinh?access_token=` +
        access_token +
        `&idsanpham=` +
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
    idkho: req.idkho,
    idnhacungcap: req.idnhacungcap,
    idkhachhang: req.idkhachhang,
    tukhoa: req.tukhoa,
    mavach: req.mavach,
    idkhoden: req.idkhoden,
  };

  console.log('body get san pham', body);

  return axios
    .post(`${URL}/danhmuc/sanpham?access_token=` + access_token, body)
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

function get_nhansu() {
  return axios
    .get(`${URL}/danhmuc/nhansu?access_token=` + access_token)
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
    idkho: req.idkho,
    tukhoa: req.tukhoa,
  };
  console.log('body tồn kho', body);

  return axios
    .post(`${URL}/kho/tonkhotheodonvi?access_token=` + access_token, body)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

function get_AddPX(req: any) {
  let body = req;
  console.log('body phieu xuat', body);

  return axios
    .post(`${URL}/kho/capnhatphieuxuat?access_token=` + access_token, body)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

function get_AddPN(req: any) {
  let body = req;
  console.log('body phieu nhap', body);

  return axios
    .post(`${URL}/kho/capnhatphieunhap?access_token=` + access_token, body)
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
    isadmin: req.isadmin,
    loai: req.loai,
    tukhoa: req.tukhoa,
    to: req.to, // datetime kết thúc
    from: req.from, // datetime bắt đầu
  };
  console.log('body phiếu nhập', body);
  
  return axios
    .post(`${URL}/kho/danhsachphieunhap?access_token=` + access_token, body)
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
    isadmin: req.isadmin,
    loai: req.loai,
    tukhoa: req.tukhoa,
    to: req.to, // datetime kết thúc
    from: req.from, // datetime bắt đầu
  };
  console.log(body);

  return axios
    .post(`${URL}/kho/danhsachphieuxuat?access_token=` + access_token, body)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

function get_detailphieuxuat(id: any) {
  console.log("id detail", id);
  
  return axios
    .get(
      `${URL}/kho/chitietphieuxuat?access_token=` + access_token + `&id=` + id,
    )
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

function get_detailphieunhap(id: any) {
  console.log("id detail", id);
  
  return axios
    .get(
      `${URL}/kho/chitietphieunhap?access_token=` + access_token + `&id=` + id,
    )
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return {err};
    });
}

//End nhập tồn

export const Services = {
  get_detailphieunhap,
  get_AddPN,
  get_detailphieuxuat,
  get_nhansu,
  get_AddPX,
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

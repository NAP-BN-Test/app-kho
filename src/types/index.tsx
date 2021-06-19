export interface Alert {
  type: string;
  message: string;
}

export interface UserLogin {
  userName: string;
  passWord: string;
}

export interface User {
  userinfo: string;
  accesstoken: string;
  permisson: string;
}

export interface KHO {
  Id: number;
  Code: string;
  NameVI: string;
  AddressVI: string;
}

export interface NHACUNGCAP {
  Id: number;
  Code: string;
  NameVI: string;
  DienThoai: string;
}

export interface DONVITINH {
  Id: number;
  NameVI: string;
  HeSoQuyDoi: string;
  FlagDonViChuan: string;
}

export interface KHACHHANG {
  Id: number;
  Code: string;
  NameVI: string;
  DienThoai: string;
}

export interface SANPHAM {
  ID: number;
  NameVI: string;
  NameEN: string;
  Code: string;
  FlagFavorite: string;
  IDLoaiHang: number;
  IDNhomHang: number;
  DacTinhKyThuat: string;
  IDDoor: number;
  GhiChu: string;
  ChieuDai: string;
  ChieuRong: string;
  ChieuCao: string;
  SoKhoi: string;
  TrongLuong: string;
  ThoiHanSuDung: string;
  EnumLoaiThoiHanSuDung: string;
  QuyCachDongGoi: string;
  FlagDanTem: string;
  IDDvtTrongLuong: number;
  FlagDichVu: string;
  MaVach: string;
}

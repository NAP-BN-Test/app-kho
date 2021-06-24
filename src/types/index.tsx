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

export interface TONKHO {
  ID: number;
  IDKho: number;
  IDSanPham: number;
  IDDonViTinh: number;
  SoLuongTon: number;
  lub: number;
  lud: string;
  IDKhachHang: number;
  FlagKyGui: boolean;
  MaHang: string;
  TenHang: string;
  MaKhoText: string;
  TenKhoText: string;
  KhachHangText: string;
  DVTText: string;
}

export interface PHIEUXUAT {
  ID: number;
  Code: string;
  IDNguoiNhap: number;
  NgayNhap: string;
  IDNguoiGiao: number;
  NguoiGiao: string;
  NgayTaoPhieu: string;
  IDKho: number;
  IDNhaCungCap: number;
  IDKhachHang: number;
  MaDonHang: string;
  EnumLoai: number;
  Loai: string;
  IDPhieuXuat: number;
  GhiChu: string;
  cd: string;
  cb: number;
  lud: string;
  lub: string;
  FlagDeleted: boolean;
  NguoiNhapText: string;
  TenKhoText: string;
  NhaCungCapText: string;
  KhachHangText: string;
  LoaiText: string;
  edit: number;
}

export interface CHITIETPHIEUXUAT {
  ID: number;
  Code: string;
  NguoiXuat: string;
  NgayXuat: string;
  NguoiNhan: string;
  NgayTaoPhieu: string;
  KhoXuat: string;
  KhoNhan: string;
  KhachHang: string;
  Loai: string;
  GhiChu: string;
  TrongLuong: string;
  SoKhoi: string;
  ListHangHoa: [];
}

export interface PHIEUNHAP {
  ID: number;
  Code: string;
  IDNguoiNhap: number;
  NgayNhap: string;
  IDNguoiGiao: number;
  NguoiGiao: string;
  NgayTaoPhieu: string;
  IDKho: number;
  IDNhaCungCap: number;
  IDKhachHang: number;
  MaDonHang: string;
  EnumLoai: number;
  Loai: string;
  IDPhieuXuat: number;
  GhiChu: string;
  cd: string;
  cb: number;
  lud: string;
  lub: string;
  FlagDeleted: boolean;
  NguoiNhapText: string;
  TenKhoText: string;
  NhaCungCapText: string;
  KhachHangText: string;
  LoaiText: string;
  edit: number;
}

export interface CHITIETPHIEUNHAP {
  ID: number;
  Code: string;
  NguoiXuat: string;
  NgayXuat: string;
  NguoiNhan: string;
  NgayTaoPhieu: string;
  KhoXuat: string;
  KhoNhan: string;
  KhachHang: string;
  Loai: string;
  GhiChu: string;
  TrongLuong: string;
  SoKhoi: string;
  ListHangHoa: [];
}
export interface NHANSU {
  Id: Number;
  Code: string;
  HoTen: string;
}

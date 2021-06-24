import {PHIEUNHAP} from '../../types';
import {GET_LIST_PHIEUNHAP} from '../constants/index';

const initState: Array<PHIEUNHAP> = [
  {
    ID: 0,
    Code: '',
    IDNguoiNhap: 0,
    NgayNhap: '',
    IDNguoiGiao: 0,
    NguoiGiao: '',
    NgayTaoPhieu: '',
    IDKho: 0,
    IDNhaCungCap: 0,
    IDKhachHang: 0,
    MaDonHang: '',
    EnumLoai: 0,
    Loai: '',
    IDPhieuXuat: 0,
    GhiChu: '',
    cd: '',
    cb: 0,
    lud: '',
    lub: '',
    FlagDeleted: false,
    NguoiNhapText: '',
    TenKhoText: '',
    NhaCungCapText: '',
    KhachHangText: '',
    LoaiText: '',
    edit: 0,
  },
];

const rdc_phieunhap = (state = initState, action: any) => {
  switch (action.type) {
    case GET_LIST_PHIEUNHAP:
      console.log(action);
      return action.value.map((items: any) => {
        return {
          ID: items.ID,
          Code: items.Code,
          IDNguoiNhap: items.IDNguoiNhap,
          NgayNhap: items.NgayNhap,
          IDNguoiGiao: items.IDNguoiGiao,
          NguoiGiao: items.NguoiGiao,
          NgayTaoPhieu: items.NgayTaoPhieu,
          IDKho: items.IDKho,
          IDNhaCungCap: items.IDNhaCungCap,
          IDKhachHang: items.IDKhachHang,
          MaDonHang: items.MaDonHang,
          EnumLoai: items.EnumLoai,
          Loai: items.Loai,
          IDPhieuXuat: items.IDPhieuXuat,
          GhiChu: items.GhiChu,
          cd: items.cd,
          cb: items.cb,
          lud: items.lud,
          lub: items.lub,
          FlagDeleted: items.FlagDeleted,
          NguoiNhapText: items.NguoiNhapText,
          TenKhoText: items.TenKhoText,
          NhaCungCapText: items.NhaCungCapText,
          KhachHangText: items.KhachHangText,
          LoaiText: items.LoaiText,
        };
      });

    default:
      return state;
  }
};

export default rdc_phieunhap;

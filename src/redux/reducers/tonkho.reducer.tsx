import {TONKHO} from '../../types';
import {GET_LIST_TONKHO} from '../constants/index';

const initState: Array<TONKHO> = [
  {
    ID: 0,
    IDKho: 0,
    IDSanPham: 0,
    IDDonViTinh: 0,
    SoLuongTon: 0,
    lub: 0,
    lud: '',
    IDKhachHang: 0,
    FlagKyGui: false,
    MaHang: '',
    TenHang: '',
    MaKhoText: '',
    TenKhoText: '',
    KhachHangText: '',
    DVTText: '',
  },
];

const rdc_tonkho = (state = initState, action: any) => {
  switch (action.type) {
    case GET_LIST_TONKHO:
      console.log(action);
      return action.value.map((items: any) => {
        return {
          ID: items.ID,
          IDKho: items.IDKho,
          IDSanPham: items.IDSanPham,
          IDDonViTinh: items.IDDonViTinh,
          SoLuongTon: items.SoLuongTon,
          lub: items.lub,
          lud: items.lud,
          IDKhachHang: items.IDKhachHang,
          FlagKyGui: items.FlagKyGui,
          MaHang: items.MaHang,
          TenHang: items.TenHang,
          MaKhoText: items.MaKhoText,
          TenKhoText: items.TenKhoText,
          KhachHangText: items.KhachHangText,
          DVTText: items.DVTText,
        };
      });

    default:
      return state;
  }
};

export default rdc_tonkho;

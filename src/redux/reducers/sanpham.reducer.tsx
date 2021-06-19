import {SANPHAM} from '../../types';
import {GET_SANPHAM} from '../constants/index';

const initState: Array<SANPHAM> = [
  {
    ID: 0,
    NameVI: '',
    NameEN: '',
    Code: '',
    FlagFavorite: '',
    IDLoaiHang: 0,
    IDNhomHang: 0,
    DacTinhKyThuat: '',
    IDDoor: 0,
    GhiChu: '',
    ChieuDai: '',
    ChieuRong: '',
    ChieuCao: '',
    SoKhoi: '',
    TrongLuong: '',
    ThoiHanSuDung: '',
    EnumLoaiThoiHanSuDung: '',
    QuyCachDongGoi: '',
    FlagDanTem: '',
    IDDvtTrongLuong: 0,
    FlagDichVu: '',
    MaVach: '',
  },
];

const rdc_dm_sanpham = (state = initState, action: any) => {
  switch (action.type) {
    case GET_SANPHAM:
      console.log(action);
      return action.value.map((items: any) => {
        return {
          ID: items.ID,
          NameVI: items.NameVI,
          NameEN: items.NameEN,
          Code: items.Code,
          FlagFavorite: items.FlagFavorite,
          IDLoaiHang: items.IDLoaiHang,
          IDNhomHang: items.IDNhomHang,
          DacTinhKyThuat: items.DacTinhKyThuat,
          IDDoor: items.IDDoor,
          GhiChu: items.GhiChu,
          ChieuDai: items.ChieuDai,
          ChieuRong: items.ChieuRong,
          ChieuCao: items.ChieuCao,
          SoKhoi: items.SoKhoi,
          TrongLuong: items.TrongLuong,
          ThoiHanSuDung: items.ThoiHanSuDung,
          EnumLoaiThoiHanSuDung: items.EnumLoaiThoiHanSuDung,
          QuyCachDongGoi: items.QuyCachDongGoi,
          FlagDanTem: items.FlagDanTem,
          IDDvtTrongLuong: items.IDDvtTrongLuong,
          FlagDichVu: items.FlagDichVu,
          MaVach: items.MaVach,
        };
      });

    default:
      return state;
  }
};

export default rdc_dm_sanpham;

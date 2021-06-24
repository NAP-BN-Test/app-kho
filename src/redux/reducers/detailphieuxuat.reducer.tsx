import {CHITIETPHIEUXUAT} from '../../types';
import {GET_DETAILPHIEUXUAT} from '../constants/index';

const initState: Array<CHITIETPHIEUXUAT> = [
  {
    ID: 0,
    Code: '',
    NguoiXuat: '',
    NgayXuat: '',
    NguoiNhan: '',
    NgayTaoPhieu: '',
    KhoXuat: '',
    KhoNhan: '',
    KhachHang: '',
    Loai: '',
    GhiChu: '',
    TrongLuong: '',
    SoKhoi: '',
    ListHangHoa: [],
  },
];

const rdc_detailphieuxuat = (state = initState, action: any) => {
  switch (action.type) {
    case GET_DETAILPHIEUXUAT:
      console.log(action);
    //   return action.value.map((items: any) => {
        return {
          ID: action.value.ID,
          Code: action.value.Code,
          NguoiXuat: action.value.NguoiXuat,
          NgayXuat: action.value.NgayXuat,
          NguoiNhan: action.value.NguoiNhan,
          NgayTaoPhieu: action.value.NgayTaoPhieu,
          KhoXuat: action.value.KhoXuat,
          KhoNhan: action.value.KhoNhan,
          KhachHang: action.value.KhachHang,
          Loai: action.value.Loai,
          GhiChu: action.value.GhiChu,
          TrongLuong: action.value.TrongLuong,
          SoKhoi: action.value.SoKhoi,
          ListHangHoa: action.value.ListHangHoa,
        };
    //   });

    default:
      return state;
  }
};

export default rdc_detailphieuxuat;

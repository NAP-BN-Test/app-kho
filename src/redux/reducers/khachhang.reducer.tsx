import { KHACHHANG} from '../../types';
import {GET_DMNCC, GET_KHACHHANG} from '../constants/index';

const initState: Array<KHACHHANG> = [
  {
    Id: 0,
    Code: '',
    NameVI: '',
    DienThoai: '',
  },
];

const rdc_dm_kh = (state = initState, action: any) => {
  switch (action.type) {
    case GET_KHACHHANG:
      console.log(action);
      return action.value.map((items: any) => {
        return {
          Id: items.Id,
          Code: items.Code,
          NameVI: items.NameVI,
          DienThoai: items.DienThoai,
        };
      });

    default:
      return state;
  }
};

export default rdc_dm_kh;

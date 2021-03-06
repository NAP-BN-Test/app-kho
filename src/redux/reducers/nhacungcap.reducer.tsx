import { NHACUNGCAP} from '../../types';
import {GET_DMNCC} from '../constants/index';

const initState: Array<NHACUNGCAP> = [
  {
    Id: 0,
    Code: '',
    NameVI: '',
    DienThoai: '',
  },
];

const rdc_dm_ncc = (state = initState, action: any) => {
  switch (action.type) {
    case GET_DMNCC:
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

export default rdc_dm_ncc;

import {NHANSU} from '../../types';
import {GET_LIST_NHANSU} from '../constants/index';

const initState: Array<NHANSU> = [
  {
    Id: 0,
    Code: '',
    HoTen: '',
  },
];

const rdc_dm_nhansu = (state = initState, action: any) => {
  switch (action.type) {
    case GET_LIST_NHANSU:
      console.log(action);
      return action.value.map((items: any) => {
        return {
          Id: items.Id,
          Code: items.Code,
          HoTen: items.HoTen,
        };
      });

    default:
      return state;
  }
};

export default rdc_dm_nhansu;

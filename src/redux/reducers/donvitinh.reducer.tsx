import {DONVITINH} from '../../types';
import {GET_DONVITINH} from '../constants/index';

const initState: Array<DONVITINH> = [
  {
    Id: 0,
    NameVI: '',
    HeSoQuyDoi: '',
    FlagDonViChuan: '',
  },
];

const rdc_dm_dvt = (state = initState, action: any) => {
  switch (action.type) {
    case GET_DONVITINH:
      console.log(action);
      return action.value.map((items: any) => {
        return {
          Id: items.Id,
          HeSoQuyDoi: items.HeSoQuyDoi,
          NameVI: items.NameVI,
          FlagDonViChuan: items.FlagDonViChuan,
        };
      });

    default:
      return state;
  }
};

export default rdc_dm_dvt;

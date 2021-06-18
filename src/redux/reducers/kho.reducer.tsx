import {KHO} from '../../types';
import {GET_DMKHO} from '../constants/index';

const initState: Array<KHO> = [
  {
    Id: 0,
    Code: '',
    NameVI: '',
    AddressVI: '',
  },
];

const rdc_dm_kho = (state = initState, action: any) => {
  switch (action.type) {
    case GET_DMKHO:
      console.log(action);
      return action.value.map((items: any) => {
        return {
          Id: items.Id,
          Code: items.Code,
          NameVI: items.NameVI,
          AddressVI: items.AddressVI,
        };
      });

    default:
      return state;
  }
};

export default rdc_dm_kho;

import {combineReducers} from 'redux';
import rdc_alert from './alert.reducer';
import rdc_Auth from './authUser.reducer';
import rdc_detailphieuxuat from './detailphieuxuat.reducer';
import rdc_dm_dvt from './donvitinh.reducer';
import rdc_dm_kh from './khachhang.reducer';
import rdc_dm_kho from './kho.reducer';
import rdc_login from './login.reducer';
import rdc_dm_ncc from './nhacungcap.reducer';
import rdc_dm_nhansu from './nhansu.reducer';
import rdc_phieuxuat from './phieuxuat.reducer';
import rdc_dm_sanpham from './sanpham.reducer';
import rdc_tonkho from './tonkho.reducer';

export const rootReducer = combineReducers({
  alerts: rdc_alert,
  login: rdc_login,
  Auth: rdc_Auth,
  dmkho: rdc_dm_kho,
  dmncc: rdc_dm_ncc,
  dmkh: rdc_dm_kh,
  dmsp: rdc_dm_sanpham,
  dmdvt: rdc_dm_dvt,
  tonkho: rdc_tonkho,
  phieuxuat: rdc_phieuxuat,
  detailphieuxuat: rdc_detailphieuxuat,
  dmnhansu: rdc_dm_nhansu,
});

export type RootState = ReturnType<typeof rootReducer>;

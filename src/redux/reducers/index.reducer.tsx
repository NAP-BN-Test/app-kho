import { combineReducers } from 'redux';
import rdc_alert from './alert.reducer';
import rdc_login from './login.reducer';
// import rdc_register_server from './registerserver.reducer';
// import rdc_login from './login.reducer';
// import rdc_alert from './alert.reducer';
// import rdc_hientruong from './hientruong.reducer';
// import rdc_container from './container.reducer';
// import rdc_parking from './parking.reducer';
// import rdc_hientruong_checked from './hientruongchecked';

export const rootReducer = combineReducers({
    alerts: rdc_alert,
    login: rdc_login
})

export type RootState = ReturnType<typeof rootReducer>
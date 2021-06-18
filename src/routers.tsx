import * as React from 'react';
import {
  Scene,
  Router,
  Stack,
  Actions,
} from 'react-native-router-flux';
import login from './views/login/login';
import main from './views/main/main';
import Btn_import from './views/ImportExport/import/import';
import infoImport from './views/ImportExport/import/infoImport';
import commodity from './views/ImportExport/import/commodity';
import infoExport from './views/ImportExport/export/infoExport';
import infoTransfer from './views/ImportExport/warehouseTransfer/infoTransfer';
import {User} from './types';
import {RootState} from './redux/reducers/index.reducer';
import {useSelector} from 'react-redux';
const Routers = () => {
  const Auth: User = useSelector((state: RootState) => state.Auth);
  console.log(Auth);
  

  return (
    <Router>
      {Auth.accesstoken != '' ? (
        <Stack key="root">
          <Scene
            key="main"
            component={main}
            title="main"
            // initial={true}
            hideNavBar={true}
          />

          <Scene
            key="Import"
            component={Btn_import}
            title="scanImport"
            // initial={true}
            hideNavBar={true}
          />

          <Scene
            key="infoImport"
            component={infoImport}
            title="infoImport"
            // initial={true}
            hideNavBar={true}
          />

          <Scene
            key="commodityImport"
            component={commodity}
            title="commodityImport"
            // initial={true}
            hideNavBar={true}
          />

          <Scene
            key="infoExport"
            component={infoExport}
            title="infoExport"
            // initial={true}
            hideNavBar={true}
          />

          <Scene
            key="infoTransfer"
            component={infoTransfer}
            title="infoTransfer"
            // initial={true}
            hideNavBar={true}
          />
        </Stack>
      ) : (
        <Stack key="root">
          <Scene
            key="login"
            component={login}
            title="Login"
            // initial={true}
            hideNavBar={true}
          />
        </Stack>
      )}
    </Router>
  );
};

export default Routers;

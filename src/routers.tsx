import * as React from 'react';
import {
  Scene,
  Router,
  ActionConst,
  Tabs,
  Stack,
} from 'react-native-router-flux';
import Scan_import from './views/ImportExport/import/scan_import';
import Scan_Export from './views/ImportExport/export/scanExport';
import login from './views/login/login';
import main from './views/main/main';
import Btn_import from './views/ImportExport/import/import';
import resutlExport from './views/ImportExport/export/resultExport';
import resultExport from './views/ImportExport/export/resultExport';
import resultImport from './views/ImportExport/import/resultImport';
import infoImport from './views/ImportExport/import/infoImport';
import commodity from './views/ImportExport/import/commodity';
import infoExport from './views/ImportExport/export/infoExport';
import infoTransfer from './views/ImportExport/warehouseTransfer/infoTransfer';
const Routers = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="main"
          component={main}
          title="main"
          // initial={true}
          hideNavBar={true}
        />
        <Scene
          key="login"
          component={login}
          title="Login"
          initial={true}
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
    </Router>
  );
};

export default Routers;

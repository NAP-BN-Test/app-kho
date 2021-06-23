import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import stylesGlobal from '../../css/cssGlobal.css';
import Btn_export from './export/export';
import Btn_listPX from './export/ListExport/btn_listPX';
import Btn_import from './import/import';
import Btn_WarehouseTransfer from './warehouseTransfer';

function importexport() {
  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>Quản lý nhập xuất</Text>
      </View>
      <View style={style.footer}>
        <View>
          <Btn_import />
          <Btn_export />
          <Btn_listPX />

          {/* <Btn_WarehouseTransfer /> */}
        </View>
      </View>
    </View>
  );
}

export default importexport;

const style = {
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
};

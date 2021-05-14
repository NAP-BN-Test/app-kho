import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import stylesGlobal from '../../css/cssGlobal.css';
import Btn_export from './export/export';
import Btn_import from './import/import';
import Btn_WarehouseTransfer from './warehouseTransfer';

function importexport() {
  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>Quản lý nhập xuất</Text>
      </View>
      <View style={stylesGlobal.footer}>
        <View>
          <Btn_import />
          <Btn_export />
          <Btn_WarehouseTransfer />
        </View>
      </View>
    </View>
  );
}

export default importexport;

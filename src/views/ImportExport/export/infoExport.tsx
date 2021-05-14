import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import stylesGlobal from '../../../css/cssGlobal.css';
import FormExport from '../export/formExport';

function infoExport() {
  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>Quản lý xuất hàng</Text>
      </View>
      <View style={stylesGlobal.footer}>
          <FormExport />
      </View>
    </View>
  );
}

export default infoExport;

import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import stylesGlobal from '../../../css/cssGlobal.css';
import FormImport from './formImport';

function infoImport() {
  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>Quản lý nhập hàng</Text>
      </View>
      <View style={stylesGlobal.footer}>
        <FormImport key={1}/>
      </View>
    </View>
  );
}

export default infoImport;

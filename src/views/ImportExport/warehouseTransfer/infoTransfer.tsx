import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import stylesGlobal from '../../../css/cssGlobal.css';
import FormTransfer from './formTransfer';

function infoTransfer() {
  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>Quản lý điều chuyển kho</Text>
      </View>
      <View style={stylesGlobal.footer}>
          <FormTransfer />
      </View>
    </View>
  );
}

export default infoTransfer;

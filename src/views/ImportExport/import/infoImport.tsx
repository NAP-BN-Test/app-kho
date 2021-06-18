import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import stylesGlobal from '../../../css/cssGlobal.css';
import FormImport from './formImport';

function infoImport() {
  return (
    <View style={stylesGlobal.container}>
      {/* <StatusBar backgroundColor="#009387" barStyle="light-content" /> */}
      <View style={styles.header}>
        <Text style={styles.text_header}>Quản lý nhập hàng</Text>
      </View>
      <View style={stylesGlobal.footer}>
        <FormImport key={1}/>
      </View>
    </View>
  );
}

export default infoImport;

const styles = StyleSheet.create({
  header: {
    flex: 0,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // paddingBottom: 20,
  },
  text_header:{
    paddingVertical: 30,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  }
})

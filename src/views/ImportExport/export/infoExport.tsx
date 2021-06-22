import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import stylesGlobal from '../../../css/cssGlobal.css';
import FormExport from '../export/formExport';

function infoExport() {
  return (
    <View style={stylesGlobal.container}>
      {/* <StatusBar backgroundColor="#009387" barStyle="light-content" /> */}
      <View style={styles.header}>
        <Text style={styles.text_header}>Quản lý xuất hàng</Text>
      </View>
      <View style={stylesGlobal.footer}>
      <FormExport />
      </View>
    </View>
    // <View style={stylesGlobal.container}>
    //   <StatusBar backgroundColor="#009387" barStyle="light-content" />
    //   <View style={stylesGlobal.header}>
    //     <Text style={stylesGlobal.text_header}>Quản lý xuất hàng</Text>
    //   </View>
    //   <View style={stylesGlobal.footer}>
    //       <FormExport />
    //   </View>
    // </View>
  );
}

export default infoExport;
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
import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import stylesExport from '../export.css';
function Btn_listPX() {
  return (
    <View>
      <View style={stylesExport.button}>
        <TouchableOpacity
          style={stylesExport.signIn}
            onPress={() =>  Actions.danhsachphieuxuat()}
        >
          <LinearGradient
            colors={['#08d4c4', '#01ab9d']}
            style={stylesExport.signIn}>
            <Text
              style={[
                stylesExport.textSign,
                {
                  color: '#fff',
                },
              ]}>
              Danh sách phiếu xuất
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Btn_listPX;

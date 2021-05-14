import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import stylesImport from './import.css';
function Btn_import() {
  return (
    <View>
      <View style={stylesImport.button}>
        <TouchableOpacity
          style={stylesImport.signIn}
          onPress={() =>  Actions.infoImport()}>
          <LinearGradient
            colors={['#08d4c4', '#01ab9d']}
            style={stylesImport.signIn}>
            <Text
              style={[
                stylesImport.textSign,
                {
                  color: '#fff',
                },
              ]}>
              Nhập kho
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Btn_import;

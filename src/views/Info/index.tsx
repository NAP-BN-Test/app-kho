import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import stylesInfo from './info.css';
import stylesGlobal from '../../css/cssGlobal.css';
import {Action} from '../../redux/actions/index.action';
import {useDispatch} from 'react-redux';

function info() {
  const dispatch = useDispatch();
  async function toggleLogout() {
    dispatch(Action.act_logout());
  }
  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>Thông tin tài khoản</Text>
      </View>
      <View style={stylesGlobal.footer}>
        <View>
          <Text style={stylesGlobal.text_footer}>
            <Text style={stylesGlobal.text_title}>Tài khoản</Text>: Dũng
          </Text>
          <Text style={stylesGlobal.text_footer}>
            <Text style={stylesGlobal.text_title}>Ngày sinh</Text>: 03/01/1999
          </Text>
          <Text style={stylesGlobal.text_footer}>
            <Text style={stylesGlobal.text_title}>Giới tính</Text>: Nam
          </Text>
          <Text style={stylesGlobal.text_footer}>
            <Text style={stylesGlobal.text_title}>Email</Text>:
            dung123@gmail.com
          </Text>
          <Text style={stylesGlobal.text_footer}>
            <Text style={stylesGlobal.text_title}>SĐT</Text>: 0333.968.999
          </Text>
        </View>
        <View style={stylesInfo.button}>
          <TouchableOpacity style={stylesInfo.signIn} onPress={toggleLogout}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={stylesInfo.signIn}>
              <Text
                style={[
                  stylesInfo.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Đăng xuất
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default info;

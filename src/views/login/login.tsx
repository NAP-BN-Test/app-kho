import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/index.reducer';
import {UserLogin} from '../../types/index';
import AsyncStorage from '@react-native-community/async-storage';
import {Action} from '../../redux/actions/index.action';
import {useTheme} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from './login.css';
import stylesGlobal from '../../css/cssGlobal.css';

function login() {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const userLogin: UserLogin = useSelector((state: RootState) => state.login);
  const login = async () => {
    (await userName) ? AsyncStorage.setItem('username', userName) : null;
    (await password) ? AsyncStorage.setItem('password', password) : null;
    await dispatch(Action.act_login(userName, password));
  };

  console.log('1');
  useEffect(() => {
    console.log('login');
    
    const autologin = async () => {
      userLogin.userName = (await AsyncStorage.getItem('username')) || '';
      userLogin.passWord = (await AsyncStorage.getItem('password')) || '';
      if (userName !== null && password !== null) {
        dispatch(Action.act_login(userLogin.userName, userLogin.passWord));
      }
    };
    autologin();
  }, []);

  function updateSecureTextEntry() {
    if (secureTextEntry === true) {
      setsecureTextEntry(false);
    } else {
      setsecureTextEntry(true);
    }
  }

  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>WELLCOME!</Text>
      </View>
      <View style={stylesGlobal.footer}>
        <Text
          style={[
            stylesGlobal.text_footer,
            {
              color: colors.text,
            },
          ]}>
          Tài khoản
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Nhập tài khoản..."
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setUserName(val)}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>

        <Text
          style={[
            stylesGlobal.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}>
          Mật khẩu
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Nhập mật khẩu..."
            placeholderTextColor="#666666"
            secureTextEntry={secureTextEntry ? true : false}
            // secureTextEntry={true}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setPassword(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={login}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Đăng nhập
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default login;

import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import stylesGlobal from '../../../css/cssGlobal.css';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import stylesImport from './import.css';
import LinearGradient from 'react-native-linear-gradient';
function resultImport(props: any) {
  console.log(props);
  const {colors} = useTheme();
  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>
          TẠO PHIẾU NHẬP KHO <Text>{props.data.data}</Text>
        </Text>
      </View>
      <View style={stylesGlobal.footer}>
        <Text
          style={[
            stylesGlobal.text_footer,
            {
              color: colors.text,
            },
          ]}>
          Số lượng
        </Text>
        <View style={stylesImport.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <TextInput
            placeholder="Nhập số lượng..."
            placeholderTextColor="#666666"
            style={[
              stylesImport.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            // onChangeText={(val) => setUserName(val)
            // }
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>

        <Text
          style={[
            stylesGlobal.text_footer,
            {
              color: colors.text,
            },
          ]}>
          Hạn sử dụng
        </Text>
        <View style={stylesImport.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <TextInput
            placeholder="Nhập hạn sử dụng..."
            placeholderTextColor="#666666"
            style={[
              stylesImport.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            // onChangeText={(val) => setUserName(val)
            // }
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>


        <Text
          style={[
            stylesGlobal.text_footer,
            {
              color: colors.text,
            },
          ]}>
          Đơn giá
        </Text>
        <View style={stylesImport.action}>
          <FontAwesome name="tag" color={colors.text} size={20} />
          <TextInput
            placeholder="Đơn giá..."
            placeholderTextColor="#666666"
            style={[
              stylesImport.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            // onChangeText={(val) => setUserName(val)
            // }
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>
        <View style={stylesImport.button}>
          <TouchableOpacity
            style={stylesImport.signIn}
            // onPress={() => Actions.scanExport()}
            >
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
                Ghi
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default resultImport;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Linking, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import ListCommodity from '../../import/ListCommodity';
import stylesExport from '../export.css';
function Btn_listPX() {
  function func_ModalList(e: any) {
    // setmodalList(e);
  }

  const toggleCommodity: any = (data: any) => {
    // console.log(data);
    // setCommoditys(data);
  };
  const [modalList, setmodalList] = useState(false);
  const [Commoditys, setCommoditys] = useState([] as any);
  return (
    <View>
      <View style={stylesExport.button}>
        <TouchableOpacity
          style={stylesExport.signIn}
          // onPress={() => Actions.Danhsachphieuxuat()}
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

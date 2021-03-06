import React, {useState} from 'react';
import {Modal, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import stylesGlobal from '../../css/cssGlobal.css';
import Btn_export from './export/export';
import Btn_listPX from './export/ListExport/btn_listPX';
import ListCommodity from './import/ListCommodity';
import Btn_WarehouseTransfer from './warehouseTransfer';
import {Icon} from 'react-native-elements';
import Danhsachphieuxuat from './export/ListExport/danhsachphieuxuat';
import stylesExport from './export/export.css';
import LinearGradient from 'react-native-linear-gradient';
import FormImport from './import/formImport';
import FormExport from './export/formExport';
import Danhsachphieunhap from './import/ListImport/danhsachphieunhap';
function importexport() {
  function func_ModalList(e: any) {
    setmodalList(e);
  }

  function func_Modalphieunhap(e: any) {
    setmodalListphieunap(e);
  }
  function func_ModalNHAP(e: any) {
    setmodalNhapKho(e);
  }

  function func_ModalXuat(e: any) {
    setmodalXuatkho(e);
  }

  const [modalList, setmodalList] = useState(false);
  const [modalListphieunap, setmodalListphieunap] = useState(false);
  const [modalNhapKho, setmodalNhapKho] = useState(false);
  const [modalXuatkho, setmodalXuatkho] = useState(false);
  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={stylesGlobal.header}>
        <Text style={stylesGlobal.text_header}>Quản lý nhập xuất</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <View style={stylesExport.button}>
            <TouchableOpacity
              style={stylesExport.signIn}
              onPress={() => setmodalNhapKho(true)}>
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
                  Nhập kho
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={stylesExport.button}>
            <TouchableOpacity
              style={stylesExport.signIn}
              onPress={() => setmodalXuatkho(true)}>
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
                  Xuất kho
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={stylesExport.button}>
            <TouchableOpacity
              style={stylesExport.signIn}
              onPress={() => setmodalList(true)}>
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

          <View style={stylesExport.button}>
            <TouchableOpacity
              style={stylesExport.signIn}
              onPress={() => setmodalListphieunap(true)}>
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
                  Danh sách phiếu nhập
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <Modal animationType="slide" transparent={true} visible={modalList}>
            <Danhsachphieuxuat VisibleModalList={func_ModalList} />
          </Modal>

          <Modal animationType="slide" transparent={true} visible={modalListphieunap}>
            <Danhsachphieunhap VisibleModalList={func_Modalphieunhap} />
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalNhapKho}>
            <FormImport VisibleModal={func_ModalNHAP} />
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalXuatkho}>
            <FormExport VisibleModal={func_ModalXuat} />
          </Modal>
        </View>
      </View>
    </View>
  );
}

export default importexport;

const styles = {
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  button: {
    alignItems: 'center',
    marginTop: 30,
  },

  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
};

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {RNCamera} from 'react-native-camera';
import {Header} from 'react-native-elements';
import {Icon} from 'react-native-elements';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
interface ScanCodebarProps {
  toggleCloseModalCamera: any;
  toggleCodeBar: any;
  visible: boolean;
}
function Scan_Export(props: ScanCodebarProps) {
  //variables initialization
  const [camRef, setCamRef] = useState(null as any);

  //on successfully scanning move to results screens
  function _onBarcodeScanned(code: any) {
    props.toggleCodeBar(code)
    props.toggleCloseModalCamera()
  }


  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible == true ? props.visible : modalVisible}
      // onRequestClose={() => {
      //   // Alert.alert("Modal has been closed.");
      //   setModalVisible(!props.visible);
      // }}
    >
      <Header
        backgroundColor={'#009387'}
        leftComponent={
          <TouchableOpacity onPress={() => props.toggleCloseModalCamera()}>
            <Icon
              //   containerStyle={{paddingRight: 16}}
              name="arrow-back"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'Tìm mặt hàng',
          style: {color: '#fff', fontSize: 18},
        }}
        rightComponent={
          <TouchableOpacity
          //   onPress={() => navigation.navigate('DrawerOpen')}
          >
            <Icon
              //   containerStyle={{paddingRight: 16}}
              name="save"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        }
      />
      <View style={Styles.container}>
        <RNCamera
          ref={(ref) => setCamRef(ref)}
          style={Styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          autoFocus="on"
          onCameraReady={() => console.log(123)}
          onBarCodeRead={_onBarcodeScanned}
        />
        <View style={Styles.overlay}>
          <View style={Styles.Square}></View>
        </View>
      </View>
    </Modal>
  );
}

export default Scan_Export;
const Styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  overlay: {
    flex: 1,
    position: 'absolute',
    opacity: 0.5,
    backgroundColor: 'transparent',
    width: ScreenWidth,
    height: ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Square: {
    width: 300,
    height: 300,
    borderWidth: 2,
  },
});

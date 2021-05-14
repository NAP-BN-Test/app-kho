import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import stylesGlobal from '../../../../css/cssGlobal.css';
interface AddServiceProps {
  toggleCloseModalService: any;
  toggleService: any;
  visible: boolean;
}
function ServiceComponent(props: AddServiceProps) {
  const [modalVisible, setModalVisible] = useState(true);
  const [price, setprice] = useState(String);
  const [service, setService] = useState(String);
  const {colors} = useTheme();

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
      <View style={styles.centeredView}>
        <Header
          backgroundColor={'#009387'}
          leftComponent={
            <TouchableOpacity
              onPress={() => {
                props.toggleCloseModalService();
              }}>
              <Icon
                //   containerStyle={{paddingRight: 16}}
                name="arrow-back"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: 'Thêm dịch vụ',
            style: {color: '#fff', fontSize: 18},
          }}
          rightComponent={
            <TouchableOpacity
              onPress={() => {
                props.toggleCloseModalService();
                props.toggleService({
                  price: price,
                  service: service,
                });
              }}>
              <Icon
                //   containerStyle={{paddingRight: 16}}
                name="save"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          }
        />
        <View style={styles.modalView}>
          <View style={styles.inputEnd}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Dịch vụ
            </Text>
            <View style={styles.action}>
              <FontAwesome name="pencil" color={colors.text} size={20} />
              <TextInput
                placeholder="Nhập dịch vụ..."
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                onChangeText={(value) => setService(value)}
                autoCapitalize="none"
                // onChangeText={(val) => setUserName(val)}
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
            </View>
          </View>
          <View style={styles.inputEnd}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Đơn giá
            </Text>
            <View style={styles.action}>
              <FontAwesome name="pencil" color={colors.text} size={20} />
              <TextInput
                placeholder="Nhập đơn giá..."
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                onChangeText={(value) => setprice(value)}
                autoCapitalize="none"
                // onChangeText={(val) => setUserName(val)}
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ServiceComponent;
const styles = StyleSheet.create({
  leftComponent: {},
  heardComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  inputEnd: {
    marginTop: 10,
  },

  codebar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  //modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    // borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '100%',
    width: '100%',
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

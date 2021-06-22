import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import stylesGlobal from '../../../../css/cssGlobal.css';
import Scan_import from '../scan_import';
import {Formik} from 'formik';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {Action} from '../../../../redux/actions/index.action';
import {DONVITINH} from '../../../../types';
import {RootState} from '../../../../redux/reducers/index.reducer';
import DropDownPicker from 'react-native-dropdown-picker';
interface AddCommodifyProps {
  VisibleModal: any;
  toggleAddCommodity: any;
  listsp: any;
}
function FormAddCommodity(props: AddCommodifyProps) {
  console.log(props.listsp);

  const dispatch = useDispatch();
  const dvt: Array<DONVITINH> = useSelector((state: RootState) => state.dmdvt);
  console.log(dvt);
  useEffect(() => {
    setItemsSP(props.listsp);
  }, [props.listsp]);
  const [modalVisibleCamera, setmodalVisibleCamera] = useState(false);
  const [modalAddCommodity, setmodalAddCommodity] = useState(false);
  const [codebar, setcodebar] = useState(String);
  const [SelectedSP, setSelectedSP] = useState(undefined as any);
  const [openSP, setOpenSP] = useState(false);
  const [itemsSP, setItemsSP] = useState([] as any);
  const [DVT, setDVT] = useState(undefined as any);
  const [SL, setSL] = useState('0');
  const {colors} = useTheme();

  const toggleCloseModalCamera: any = () => {
    setmodalVisibleCamera(false);
  };

  const toggleCodeBar: any = (code: any) => {
    // setmodalVisibleCamera(false);
    console.log(code.data);
    setcodebar(code.data);
  };

  function submit() {
    const getsp = props.listsp.find((sp: any) => sp.ID === SelectedSP);
    const getdvt = dvt.find((d) => d.Id === DVT);
    if (
      parseInt(SL) <= 0 ||
      DVT <= 0 ||
      SelectedSP <= 0 ||
      DVT === undefined ||
      SelectedSP === undefined
    ) {
      dispatch(Action.act_alert_error('Điền đầy đủ thông tin!'));
    } else {
      props.toggleAddCommodity({sl: SL, dvt: getdvt, sp: getsp});
      props.VisibleModal(false);
    }
  }
  return (
    <View style={styles.centeredView}>
      <Header
        backgroundColor={'#009387'}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              props.VisibleModal(false);
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
          text: 'Thêm hàng hóa',
          style: {color: '#fff', fontSize: 18},
        }}
        rightComponent={
          <TouchableOpacity onPress={() => submit()}>
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
        <View style={[styles.inputEnd, styles.codebar]}>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Mã Code
          </Text>
          <View style={styles.codebar}>
            <Text>
              {codebar} {'  '}
            </Text>

            <TouchableOpacity onPress={() => setmodalVisibleCamera(true)}>
              <FontAwesome name="barcode" color={colors.text} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.action}></View>

        <View>
          <Scan_import
            toggleCloseModalCamera={toggleCloseModalCamera}
            toggleCodeBar={toggleCodeBar}
            visible={modalVisibleCamera}
          />
        </View>

        <View>
          <Formik
            initialValues={{mahang: '', tenhang: '', soluong: ''}}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {(prop) => (
              <View>
                <ScrollView>
                  <View>
                    {/* <Text
                      style={[
                        stylesGlobal.text_footer,
                        {
                          color: colors.text,
                        },
                      ]}>
                      Nhập sản phẩm
                    </Text> */}
                    <DropDownPicker
                      // {...props}
                      items={itemsSP}
                      onChangeValue={(item: any) => {
                        if (item > 0 && item != undefined) {
                          dispatch(Action.act_getdonvitinh(item));
                        }
                      }}
                      open={openSP}
                      value={SelectedSP}
                      setOpen={setOpenSP}
                      setValue={setSelectedSP}
                      setItems={setItemsSP}
                      searchable={true}
                      schema={{
                        label: 'NameVI',
                        value: 'ID',
                        icon: 'icon',
                        parent: 'parent',
                        selectable: 'selectable',
                        disabled: 'disabled',
                      }}
                    />
                  </View>

                  <View style={{flex: 1}}>
                    <Text
                      style={[
                        stylesGlobal.text_footer,
                        {
                          color: colors.text,
                        },
                      ]}>
                      Đơn vị tính
                    </Text>
                    <Picker
                      selectedValue={DVT}
                      style={{height: 50}}
                      mode="dropdown"
                      onValueChange={(item: any) => {
                        console.log(item);
                        setDVT(item);
                      }}>
                      <Picker.Item
                        label="Chọn đơn vị tính..."
                        value={undefined}
                      />
                      {dvt?.map((values, index) => (
                        <Picker.Item
                          key={index}
                          label={values.NameVI}
                          value={values.Id}
                        />
                      ))}
                    </Picker>
                    <Text
                      style={{
                        width: '100%',
                        height: 50,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                      }}>
                      {''}
                    </Text>
                  </View>

                  <View style={styles.inputEnd}>
                    <Text
                      style={[
                        stylesGlobal.text_footer,
                        {
                          color: colors.text,
                        },
                      ]}>
                      Số lượng
                    </Text>
                    <View style={styles.action}>
                      <FontAwesome
                        name="pencil"
                        color={colors.text}
                        size={20}
                      />
                      <TextInput
                        placeholder="Nhập số lượng..."
                        placeholderTextColor="#666666"
                        keyboardType="numeric"
                        style={[
                          styles.textInput,
                          {
                            color: colors.text,
                          },
                        ]}
                        autoCapitalize="none"
                        value={SL}
                        onChangeText={(val) => {
                          setSL(val);
                          console.log(val);
                        }}
                        // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
}

export default FormAddCommodity;
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

  lableSquare: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn_Square: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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

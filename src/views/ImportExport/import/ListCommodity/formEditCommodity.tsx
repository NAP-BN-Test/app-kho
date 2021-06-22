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
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import stylesGlobal from '../../../../css/cssGlobal.css';
import Scan_import from '../scan_import';
import {DataTable} from 'react-native-paper';
import {Formik} from 'formik';
import {Picker} from '@react-native-picker/picker';
import {number} from 'yup/lib/locale';
import {useDispatch, useSelector} from 'react-redux';
import {Action} from '../../../../redux/actions/index.action';
import {DONVITINH} from '../../../../types';
import {RootState} from '../../../../redux/reducers/index.reducer';
import DropDownPicker from 'react-native-dropdown-picker';
interface EditCommodifyProps {
  VisibleModal: any;
  toggleEditCommodity: any;
  data: any;
  func_delete: any;
  listsp: any;
}
function FormEditCommodity(props: EditCommodifyProps) {
  console.log('dữ liệu truyền vào:', props.data);
  const dvt: Array<DONVITINH> = useSelector((state: RootState) => state.dmdvt);
  console.log(dvt);
  const dispatch = useDispatch();
  const [modalVisibleCamera, setmodalVisibleCamera] = useState(false);
  const [codebar, setcodebar] = useState(String);
  const [SelectedSP, setSelectedSP] = useState(undefined as any);
  const [openSP, setOpenSP] = useState(false);
  const [itemsSP, setItemsSP] = useState([] as any);
  const [DVT, setDVT] = useState(undefined as any);
  const [SL, setSL] = useState('0');
  const [arrayDVT, setarrayDVT] = useState(['KG', 'GAM']);
  const {colors} = useTheme();
  useEffect(() => {
    setItemsSP(props.listsp);
    if (props.data.sp.ID > 0) {
      dispatch(Action.act_getdonvitinh(props.data.sp.ID));
    }
    setSelectedSP(props.data.sp.ID);

    setDVT(props.data.dvt.Id);
    setSL(props.data.sl);
  }, [props.data]);

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
    // console.log('Số lượng: ', SL);
    // console.log('ĐVT: ', DVT);
    // console.log('Sản phẩm: ', SelectedSP);
    if (
      parseInt(SL) <= 0 ||
      DVT <= 0 ||
      SelectedSP <= 0 ||
      DVT === undefined ||
      SelectedSP === undefined
    ) {
      dispatch(Action.act_alert_error('Điền đầy đủ thông tin!'));
    } else {
      props.toggleEditCommodity({
        key: props.data.key,
        sl: SL,
        dvt: getdvt,
        sp: getsp,
      });
      props.VisibleModal(false);
      console.log({key: props.data.key, sl: SL, dvt: getdvt, sp: getsp});
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
          text: 'Sửa hàng hóa',
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
        {/* <View style={[styles.inputEnd, styles.codebar]}>
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
        <View style={styles.action}></View> */}

        {/* <View>
          <Scan_import
            toggleCloseModalCamera={toggleCloseModalCamera}
            toggleCodeBar={toggleCodeBar}
            visible={modalVisibleCamera}
          />
        </View> */}

        <View>
          {/* <Formik
            initialValues={{mahang: '', tenhang: '', soluong: ''}}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {(prop) => (
              <View> */}
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
                open={openSP}
                value={SelectedSP}
                setOpen={setOpenSP}
                onChangeValue={(item: any) => {
                  if (item > 0 && item != undefined) {
                    dispatch(Action.act_getdonvitinh(item));
                  }
                }}
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
                <Picker.Item label="Chọn đơn vị tính..." value={undefined} />
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
                <FontAwesome name="pencil" color={colors.text} size={20} />
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
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  props.func_delete(props.data.key);
                  props.VisibleModal(false);
                }}>
                <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.signIn}>
                  <Text
                    style={[
                      styles.textButton,
                      {
                        color: '#fff',
                      },
                    ]}>
                    Xóa
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* </View>
            )}
          </Formik> */}
        </View>
      </View>
    </View>
  );
}

export default FormEditCommodity;
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

  button: {
    alignItems: 'center',
    marginTop: 50,
  },

  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
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

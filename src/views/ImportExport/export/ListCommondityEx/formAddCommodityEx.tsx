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
import Scan_import from '../../import/scan_import';
import {Formik} from 'formik';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {Action} from '../../../../redux/actions/index.action';
import {DONVITINH} from '../../../../types';
import {RootState} from '../../../../redux/reducers/index.reducer';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {RadioButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
interface AddCommodifyProps {
  VisibleModal: any;
  toggleAddCommodity: any;
  listsp: any;
}
function FormAddCommodityEx(props: AddCommodifyProps) {
  //   console.log(props.listsp);

  const dispatch = useDispatch();
  const dvt: Array<DONVITINH> = useSelector((state: RootState) => state.dmdvt);
  console.log(dvt);
  useEffect(() => {
    setItemsSP(props.listsp);
  }, [props.listsp]);

  // useEffect(() => {
  //   setDVT(dvt[0].Id)
  // }, [dvt]);
  const [modalVisibleCamera, setmodalVisibleCamera] = useState(false);
  const [modalAddCommodity, setmodalAddCommodity] = useState(false);
  const [codebar, setcodebar] = useState(String);
  const [SelectedSP, setSelectedSP] = useState(undefined as any);
  const [openSP, setOpenSP] = useState(false);
  const [itemsSP, setItemsSP] = useState([] as any);
  const [DVT, setDVT] = useState(undefined as any);
  const [Loaitem, setLoaitem] = useState(undefined as any);
  const [SL, setSL] = useState('');
  const [dongia, setdongia] = useState('');
  const [SLTEM, setSLTEM] = useState('');
  const [ghichu, setghichu] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [FlagKyGui, setFlagKyGui] = useState('false');
  console.log(FlagKyGui);

  const [ngaysanxuat, setNgaysanxuat] = useState(''
    // moment(Date()).format('DD-MM-YYYY'), 
  );
  const [datesanxuat, setDatesanxuat] = useState('' as any);
  console.log(ngaysanxuat);
  console.log(datesanxuat);

  const {colors} = useTheme();

  const toggleCloseModalCamera: any = () => {
    setmodalVisibleCamera(false);
  };

  const toggleCodeBar: any = (code: any) => {
    // setmodalVisibleCamera(false);
    const getsp = props.listsp.find((sp: any) => sp.MaVach === code.data);
    // "MaVach"
    console.log(getsp);
    if (getsp === undefined) {
      dispatch(Action.act_alert_error('Không tìm thấy sản phẩm'));
    } else {
      setSelectedSP(getsp.ID);
    }

    // console.log(code.data);
    // setcodebar(code.data);
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
      let body = {
        sl: SL,
        dvt: getdvt,
        sp: getsp,
        ngaysanxuat: datesanxuat,
        Loaitem: Loaitem,
        sltem: SLTEM,
        ghichu: ghichu,
        FlagKyGui: FlagKyGui,
        dongia: dongia,
      };
      console.log(body);

      props.toggleAddCommodity(body);
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
          // <TouchableOpacity onPress={() => submit()}>
          //   <Icon
          //     //   containerStyle={{paddingRight: 16}}
          //     name="save"
          //     size={30}
          //     color="white"
          //   />
          // </TouchableOpacity>
          <></>
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
        <View style={stylesGlobal.action}></View>

        <View>
          {/* <Formik
            initialValues={{mahang: '', tenhang: '', soluong: ''}}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {(prop) => ( */}
          <View>
            <DropDownPicker
              style={{marginBottom: 10}}
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
          <ScrollView style={{marginBottom: 110}}>
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
              <View style={stylesGlobal.actionSelect}>
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
              </View>

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
              <View style={stylesGlobal.action}>
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
              <View style={stylesGlobal.action}>
                <TextInput
                  placeholder="Nhập giá..."
                  placeholderTextColor="#666666"
                  keyboardType="numeric"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  value={dongia}
                  onChangeText={(val) => {
                    setdongia(val);
                    console.log(val);
                  }}
                  // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
              </View>
            </View>

            <View style={{marginTop: 10}}>
              <View style={stylesGlobal.actionSelect}>
                <Text
                  style={[
                    stylesGlobal.text_footer,
                    {
                      color: colors.text,
                    },
                  ]}>
                  Ngày sản xuất
                </Text>
                <TouchableOpacity
                  style={styles.searchSection}
                  onPress={() => setShowPicker(true)}>
                  <Text style={styles.input}>{ngaysanxuat}</Text>
                  <Icon
                    // style={styles.IconDate}
                    name="calendar-today"
                    size={20}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {showPicker ? (
              <DateTimePicker
                style={styles.text_input}
                value={datesanxuat} // Initial date from state
                mode={'date'}
                is24Hour={false}
                display="default"
                onChange={(event: any, selectedDate: any) => {
                  if (event.type == 'set') {
                    setShowPicker(false);
                    setDatesanxuat(selectedDate);
                    setNgaysanxuat(
                      selectedDate.getDate() +
                        '/' +
                        (selectedDate.getMonth() + 1) +
                        '/' +
                        selectedDate.getFullYear(),
                    );
                  }

                  if (event.type == 'dismissed') {
                    setShowPicker(false);
                  }
                }}
              />
            ) : null}

            <View style={{marginTop: 10}}>
              <Text
                style={[
                  stylesGlobal.text_footer,
                  {
                    color: colors.text,
                  },
                ]}>
                Loại tem
              </Text>
              <View style={stylesGlobal.actionSelect}>
                <Picker
                  selectedValue={Loaitem}
                  style={{height: 50}}
                  mode="dropdown"
                  onValueChange={(item: any) => {
                    console.log(item);
                    setLoaitem(item);
                  }}>
                  <Picker.Item label="Chọn loại tem..." value={undefined} />

                  <Picker.Item label="Tem 1" value={1} />
                </Picker>
              </View>

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
                Số lượng tem
              </Text>
              <View style={stylesGlobal.action}>
                <TextInput
                  placeholder="Nhập số lượng tem..."
                  placeholderTextColor="#666666"
                  keyboardType="numeric"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  value={SLTEM}
                  onChangeText={(val) => {
                    setSLTEM(val);
                    console.log(val);
                  }}
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
                Ghi chú
              </Text>
              <View style={stylesGlobal.action}>
                <TextInput
                  placeholder="Nhập ghi chú..."
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  multiline
                  onChangeText={(val) => setghichu(val)}
                  // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row',marginTop: 10}}>
              <View style={{marginRight: 20}}>
                <Text>Ký gửi</Text>
                <RadioButton
                  value="true"
                  status={FlagKyGui === 'true' ? 'checked' : 'unchecked'}
                  onPress={() => setFlagKyGui('true')}
                />
              </View>
              <View>
                <Text>Không ký gửi</Text>
                <RadioButton
                  value="false"
                  status={FlagKyGui === 'false' ? 'checked' : 'unchecked'}
                  onPress={() => setFlagKyGui('false')}
                />
              </View>
            </View>

            <View
              style={[
                styles.button,
                {
                  marginBottom: 20,
                },
              ]}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  submit();
                  // props.func_delete(props.data.key);
                  // props.VisibleModal(false);
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
                    Lưu
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* )} */}
          {/* </Formik> */}

          <View>
            <Scan_import
              toggleCloseModalCamera={toggleCloseModalCamera}
              toggleCodeBar={toggleCodeBar}
              visible={modalVisibleCamera}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default FormAddCommodityEx;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 20,
  },

  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  leftComponent: {},
  heardComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 20,
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

  searchSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingRight: 10,
  },
  text_input: {
    width: '70%',
    fontSize: 15,
    paddingRight: 20,
    textAlign: 'right',
  },

  input: {
    flex: 1,
    fontSize: 15,
    paddingTop: 10,
    // paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    textAlign: 'left',
    backgroundColor: '#fff',
    color: '#424242',
  },
});

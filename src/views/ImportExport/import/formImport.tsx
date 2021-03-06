import React, {useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Field, FieldArray, Form, Formik, useFormik} from 'formik';
import BasicInput from '../../../component/BasicInput';
import BasicButton from '../../../component/BasicButton';
import validationSchema from '../../../component/Schema';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Header, Icon, Input} from 'react-native-elements';
import stylesGlobal from '../../../css/cssGlobal.css';
import {useTheme} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import {Actions} from 'react-native-router-flux';
// import Commodity from './commodity';
import ListCommodity from './ListCommodity';
import {useDispatch, useSelector} from 'react-redux';
import {Action} from '../../../redux/actions/index.action';
import {RootState} from '../../../redux/reducers/index.reducer';
import {KHACHHANG, KHO, NHACUNGCAP, NHANSU, PHIEUXUAT} from '../../../types';
const initialValues = {
  email: '',
  password: '',
  type: '',
  test: [{name: 'jared'}, {name: 'brent'}, {name: 'ian'}],
};

interface modalFormimport {
  VisibleModal: any;
}
function FormImport(props: modalFormimport) {
  const dmkho: Array<KHO> = useSelector((state: RootState) => state.dmkho);
  const dmncc: Array<NHACUNGCAP> = useSelector(
    (state: RootState) => state.dmncc,
  );
  const dmnhansu: Array<NHANSU> = useSelector(
    (state: RootState) => state.dmnhansu,
  );
  const dmkh: Array<KHACHHANG> = useSelector((state: RootState) => state.dmkh);

  const phieuxuat: Array<PHIEUXUAT> = useSelector(
    (state: RootState) => state.phieuxuat,
  );
  const getlistphieuxuat = async () => {
    dispatch(
      Action.act_get_listPhieuxuat({
        to: moment().format('YYYY-MM-DD'),
        from: moment().subtract(1, 'months').format('YYYY-MM-DD'),
        isadmin: true,
      }),
    );
  };

  const getlisnhansu = async () => {
    dispatch(Action.act_getNhansu());
  };
  const dispatch = useDispatch();
  const getlistkho = async () => {
    dispatch(Action.act_getkho());
  };

  const get_nhacungcap = async () => {
    dispatch(Action.act_nhacungcap());
  };

  const get_khachhang = async () => {
    dispatch(Action.act_getkhachhang());
  };
  useEffect(() => {
    getlistphieuxuat(), getlistkho();
    get_nhacungcap();
    get_khachhang();
    getlisnhansu();
    setSophieu(
      'PN' +
        moment(
          new Date().toLocaleString('en-GB', {timeZone: 'Asia/Bangkok'}),
        ).format('YYMMDDHHmmss'),
    );
  }, []);
  const onSubmit = (values: any) => {
    console.log(values);
    console.log(selectedKHO);
    console.log(datenhap);
    console.log(SelectedKH);
    console.log(SelectedLOAI);
  };

  const {colors} = useTheme();
  const [selectedKHO, setSelectedKHO] = useState(undefined as any);
  const [selectedNCC, setSelectedNCC] = useState(undefined as any);
  const [SelectedLOAI, setSelectedLOAI] = useState('1');
  const [Sophieu, setSophieu] = useState('');
  const [ghichu, setghichu] = useState('');
  const [Nguoinhap, setNguoinhap] = useState(undefined as any);
  const [Phieuxuat, setPhieuxuat] = useState(undefined as any);
  const [SelectedKH, setSelectedKH] = useState(undefined as any);
  const [datenhap, setDatenhap] = useState(new Date());
  const [ngaynhap, setNgaynhap] = useState(moment(Date()).format('DD-MM-YYYY'));
  const [showPicker, setShowPicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalList, setmodalList] = useState(false);
  const [Commoditys, setCommoditys] = useState([] as any);
  console.log(Commoditys);

  const toggleCloseModal: any = () => {
    setModalVisible(false);
  };

  const toggleCommodity: any = (data: any) => {
    console.log(data);
    setCommoditys(data);
  };

  //Func
  function delete_Comodity(e: any) {
    const index = Commoditys.indexOf(e);
    const newFileList = Commoditys.slice();
    newFileList.splice(index, 1);
    setCommoditys(newFileList);
  }

  function func_ModalList(e: any) {
    setmodalList(e);
  }

  function handleSubmit() {
    let data = {
      Code: Sophieu,
      IDKho: selectedKHO,
      EnumLoai: 1,
      IDNguoiNhap: Nguoinhap,
      NgayNhap: datenhap,
      IDKhachHang: SelectedKH,
      GhiChu: ghichu,
      IDNhaCungCap: selectedNCC,
      IDPhieuXuat: Phieuxuat,
      ListHangHoa: Commoditys,
    };

    if (selectedKHO === undefined) {
      dispatch(Action.act_alert_error('B???n ch??a ch???n kho!'));
    } else {
      console.log(data);

      dispatch(Action.act_add_pn(data));
    }
  }

  return (
    <View style={stylesGlobal.container}>
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
          text: 'Qu???n l?? nh???p h??ng',
          style: {color: '#fff', fontSize: 18},
        }}
        rightComponent={
          <></>
          // <TouchableOpacity onPress={() => submit()}
          // >
          //   <Icon
          //     //   containerStyle={{paddingRight: 16}}
          //     name="save"
          //     size={30}
          //     color="white"
          //   />
          // </TouchableOpacity>
        }
      />
      <View style={styles.footer}>
        <ScrollView>
          <View style={{marginBottom: 10}}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Kho
            </Text>
            <View style={stylesGlobal.actionSelect}>
              <Picker
                selectedValue={selectedKHO}
                style={{height: 50}}
                mode="dropdown"
                // onValueChange={handleChange("type")}>
                onValueChange={(item: string) => {
                  setSelectedKHO(item);
                  setCommoditys([]);
                }}>
                <Picker.Item label="Ch???n kho..." value={undefined} />
                {dmkho?.map((items: any) => {
                  return <Picker.Item label={items.NameVI} value={items.Id} />;
                })}
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

          <View style={{flex: 1}}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Lo???i phi???u
            </Text>
            <View style={stylesGlobal.actionSelect}>
              <Picker
                // selectedKHO={selectedKHO}
                selectedValue={SelectedLOAI}
                style={{height: 50}}
                mode="dropdown"
                // onValueChange={handleChange("type")}>
                onValueChange={(item: string) => {
                  setSelectedLOAI(item);
                }}>
                <Picker.Item label="Mua h??ng" value="1" />
                <Picker.Item label="K?? g???i" value="2" />
                <Picker.Item label="Chuy???n kho" value="3" />
                <Picker.Item label="T???n ?????u k???" value="4" />
                <Picker.Item label="Tr??? nh?? cung c???p" value="5" />
                <Picker.Item label="Lo???i kh??c" value="16" />
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

          <View style={[styles.inputEnd, {marginBottom: 10}]}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              S??? phi???u
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Nh???p s??? phi???u..."
                placeholderTextColor="#666666"
                value={Sophieu}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                // onChangeText={(val) => setUserName(val)}
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
            </View>
          </View>

          {SelectedLOAI === '3' ? (
            <View style={{flex: 1}}>
              <Text
                style={[
                  stylesGlobal.text_footer,
                  {
                    color: colors.text,
                  },
                ]}>
                Phi???u xu???t
              </Text>
              <View style={stylesGlobal.actionSelect}>
                <Picker
                  // selectedKHO={selectedKHO}
                  selectedValue={Phieuxuat}
                  style={{height: 50}}
                  mode="dropdown"
                  // onValueChange={handleChange("type")}>
                  onValueChange={(item: string) => setPhieuxuat(item)}>
                  <Picker.Item label="Ch???n phi???u xu???t..." value={undefined} />
                  {phieuxuat?.map((items: any) => {
                    return <Picker.Item label={items.Code} value={items.ID} />;
                  })}
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
              {/* Cho c??i tr??n v??o ????? select kh??ng l???i ????ng app (????o hi???u) */}
            </View>
          ) : null}

          <View style={{marginBottom: 10}}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Ng?????i nh???p
            </Text>
            <View style={stylesGlobal.actionSelect}>
              <Picker
                // selectedKHO={selectedKHO}
                selectedValue={Nguoinhap}
                style={{height: 50}}
                mode="dropdown"
                // onValueChange={handleChange("type")}>
                onValueChange={(item: string) => setNguoinhap(item)}>
                <Picker.Item label="Ch???n ng?????i nh???p..." value={undefined} />
                {dmnhansu?.map((items: any) => {
                  return <Picker.Item label={items.HoTen} value={items.Id} />;
                })}
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

          <View>
            <View style={[stylesGlobal.actionSelect, {marginBottom: 10}]}>
              <Text
                style={[
                  stylesGlobal.text_footer,
                  {
                    color: colors.text,
                  },
                ]}>
                Ng??y nh???p
              </Text>
              <TouchableOpacity
                style={styles.searchSection}
                onPress={() => setShowPicker(true)}>
                <Text style={styles.input}>{ngaynhap}</Text>
                <Icon
                  style={styles.IconDate}
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
              value={datenhap} // Initial date from state
              mode={'date'}
              is24Hour={false}
              display="default"
              onChange={(event: any, selectedDate: any) => {
                if (event.type == 'set') {
                  setShowPicker(false);
                  setDatenhap(selectedDate);
                  setNgaynhap(
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
          {/* <View style={styles.inputEnd}>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Ng?????i giao
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Nh???p ng?????i giao..."
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              // onChangeText={(val) => setUserName(val)}
              // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            />
          </View>
        </View> */}

          {SelectedLOAI === '2' ? (
            <>
              <View style={{flex: 1}}>
                <Text
                  style={[
                    stylesGlobal.text_footer,
                    {
                      color: colors.text,
                    },
                  ]}>
                  Kh??ch h??ng
                </Text>
                <View style={stylesGlobal.actionSelect}>
                  <Picker
                    // selectedKHO={selectedKHO}
                    selectedValue={SelectedKH}
                    style={{height: 50}}
                    mode="dropdown"
                    // onValueChange={handleChange("type")}>
                    onValueChange={(item: string) => {
                      setSelectedKH(item);
                      // setCommoditys([]);
                    }}>
                    <Picker.Item label="Ch???n kh??ch h??ng..." value={undefined} />
                    {dmkh?.map((items: any) => {
                      return (
                        <Picker.Item label={items.NameVI} value={items.Id} />
                      );
                    })}
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

              {/* <View style={styles.inputEnd}>
              <Text
                style={[
                  stylesGlobal.text_footer,
                  {
                    color: colors.text,
                  },
                ]}>
                ?????a ch??? kh??ch h??ng
              </Text>
              <View style={styles.action}>
  
                <TextInput
                  placeholder="Nh???p ?????a ch??? kh??ch h??ng..."
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  // onChangeText={(val) => setUserName(val)}
                  // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
              </View>
            </View> */}
            </>
          ) : null}

          {SelectedLOAI === '1' ||
          SelectedLOAI === '4' ||
          SelectedLOAI === '16' ? (
            <View style={{flex: 1}}>
              <Text
                style={[
                  stylesGlobal.text_footer,
                  {
                    color: colors.text,
                  },
                ]}>
                Nh?? cung c???p
              </Text>
              <View style={stylesGlobal.actionSelect}>
                <Picker
                  // selectedKHO={selectedKHO}
                  selectedValue={selectedNCC}
                  style={{height: 50}}
                  mode="dropdown"
                  // onValueChange={handleChange("type")}>
                  onValueChange={(item: string) => {
                    setSelectedNCC(item);
                    // setCommoditys([]);
                  }}>
                  <Picker.Item label="Ch???n nh?? cung c???p..." value={undefined} />
                  {dmncc?.map((items: any) => {
                    return (
                      <Picker.Item label={items.NameVI} value={items.Id} />
                    );
                  })}
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
          ) : null}

          {/* {SelectedLOAI === '1' ? (
          <View style={styles.inputEnd}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              M?? ????n h??ng
            </Text>
            <View style={styles.action}>

              <TextInput
                placeholder="Nh???p m?? ????n h??ng..."
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
            </View>
          </View>
        ) : null} */}

          <View style={styles.inputEnd}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Ghi ch??
            </Text>
            <View style={styles.action}>
              <TextInput
                value={ghichu}
                placeholder="Nh???p ghi ch??..."
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

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                let body = {
                  idkho: selectedKHO,
                  // idnhacungcap: selectedNCC,
                  // idkhachhang: SelectedKH,
                  // tukhoa: null,
                  // mavach: null,
                  // idkhoden: null,
                };

                dispatch(Action.act_getsanpham(body));
                setmodalList(true);
              }}>
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
                  Danh s??ch h??ng nh???p
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                handleSubmit();
              }}>
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
                  Ghi
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.button}>
            <BasicButton
              title={'Ghi'}
              width={200}
              color={'#009387'}
              onPress={handleSubmit}
              // disabled={!isValid || isSubmitting}
              // loading={isSubmitting}
            />
          </View> */}

          {/* <View>
          <Commodity
            toggleCloseModal={toggleCloseModal}
            toggleCommodity={toggleCommodity}
            visible={modalVisible}
          />
        </View> */}

          <Modal animationType="slide" transparent={true} visible={modalList}>
            <ListCommodity
              VisibleModalList={func_ModalList}
              toggleCommodity={toggleCommodity}
              arrayCommodity={Commoditys}
            />
          </Modal>
        </ScrollView>
      </View>
    </View>
  );
}

export default FormImport;
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    width: '30%',
    fontSize: 13,
    textAlign: 'left',
  },
  text_selected: {
    width: '70%',
    // flexDirection: 'row',
  },

  text_input: {
    width: '70%',
    fontSize: 15,
    paddingRight: 20,
    textAlign: 'right',
  },

  searchSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingRight: 10,
  },

  line_text: {
    // ...ROW_SPACE_BETWEEN,
    alignItems: 'center',
    lineHeight: 40,
    height: 40,
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

  textInput: {
    flex: 1,
    marginTop: -15,
    paddingLeft: 20,
    color: '#05375a',
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
  },

  IconDate: {},
  button: {
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  inputEnd: {
    marginTop: 10,
  },

  square: {
    width: '100%',
    minHeight: 200,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  footer: {
    flex: 5,
    backgroundColor: '#fff',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

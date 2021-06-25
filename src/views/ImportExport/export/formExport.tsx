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
import BasicButton from '../../../component/BasicButton';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Header, Icon, Input} from 'react-native-elements';
import stylesGlobal from '../../../css/cssGlobal.css';
import {useTheme} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import {RootState} from '../../../redux/reducers/index.reducer';
import {useDispatch, useSelector} from 'react-redux';
import {KHACHHANG, KHO, NHACUNGCAP, NHANSU} from '../../../types';
import {Action} from '../../../redux/actions/index.action';
import {styles} from './formExport.css';
import ListCommodityEx from '../export/ListCommondityEx';
interface modalFormExport {
  VisibleModal: any;
}
function FormExport(props: modalFormExport) {
  const dmncc: Array<NHACUNGCAP> = useSelector(
    (state: RootState) => state.dmncc,
  );
  const dmkh: Array<KHACHHANG> = useSelector((state: RootState) => state.dmkh);
  const dmkho: Array<KHO> = useSelector((state: RootState) => state.dmkho);
  const dmnhansu: Array<NHANSU> = useSelector(
    (state: RootState) => state.dmnhansu,
  );
  console.log(dmkh);

  const dispatch = useDispatch();
  const getlistkho = async () => {
    dispatch(Action.act_getkho());
  };

  const getlisnhansu = async () => {
    dispatch(Action.act_getNhansu());
  };

  const get_nhacungcap = async () => {
    dispatch(Action.act_nhacungcap());
  };

  const get_khachhang = async () => {
    dispatch(Action.act_getkhachhang());
  };
  useEffect(() => {
    getlisnhansu();
    getlistkho();
    get_nhacungcap();
    get_khachhang();
    setSophieu(
      'PX' +
        moment(
          new Date().toLocaleString('en-GB', {timeZone: 'Asia/Bangkok'}),
        ).format('YYMMDDHHmmss'),
    );
  }, []);

  const {colors} = useTheme();
  const [SelectedLOAI, setSelectedLOAI] = useState('1');
  const [Sophieu, setSophieu] = useState('');
  const [Sokhoi, setSokhoi] = useState('');
  const [Trongluong, setTrongluong] = useState('');
  const [Ghichu, setGhichu] = useState('');
  const [Nguoixuat, setNguoixuat] = useState(undefined as any);
  const [selectedKHO, setSelectedKHO] = useState(undefined as any);
  const [selectedKHODEN, setSelectedKHODEN] = useState(undefined as any);
  const [SelectedKH, setSelectedKH] = useState(undefined as any);
  const [datexuat, setDatexuat] = useState(new Date());
  const [ngayxuat, setNgayxuat] = useState(moment(Date()).format('DD-MM-YYYY'));
  const [showPicker, setShowPicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNCC, setSelectedNCC] = useState('' as any);
  const [modalVisibleService, setModalVisibleService] = useState(false);
  const [Commoditys, setCommoditys] = useState([] as any);
  const [Service, setService] = useState([] as any);
  const [modalList, setmodalList] = useState(false);
  console.log(Commoditys);

  const toggleCloseModal: any = () => {
    setModalVisible(false);
  };

  const toggleCommodity: any = (data: any) => {
    console.log(data);
    setCommoditys(data);
  };

  const toggleCloseModalService: any = () => {
    setModalVisibleService(false);
  };

  const toggleService: any = (data: any) => {
    let ArrOld = Service;
    //Lấy phần tử cuối cùng của mảng
    let elmentEnd = ArrOld.length;
    let id = elmentEnd + 1;

    let newData = {
      ...data,
      id: id,
    };
    console.log('Data mới: ' + newData);

    ArrOld.push(newData);

    setService(ArrOld);
  };

  //Func

  function func_ModalList(e: any) {
    setmodalList(e);
  }

  function handleSubmit() {
    let data = {
      Code: Sophieu,
      IDKho: selectedKHO,
      EnumLoai: 1,
      IDNguoiXuat: Nguoixuat,
      NgayXuat: datexuat,
      IDKhachHang: SelectedKH,
      GhiChu: Ghichu,
      SoKhoi: Sokhoi,
      TrongLuong: Trongluong,
      IDKhoDen: selectedKHODEN,
      IDNhaCungCap: selectedNCC,
      ListHangHoa: Commoditys,
    };

    if (selectedKHO === undefined) {
      dispatch(Action.act_alert_error('Bạn chưa chọn kho!'));
    } else {
      console.log('data');

      dispatch(Action.act_add_px(data));
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
          text: 'Quản lý xuất hàng',
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
          <View style={{}}>
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
                <Picker.Item label="Chọn kho..." value={undefined} />
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

          <View style={{marginTop: 10}}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Loại phiếu
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
                  if (item === '1' || item === '2') {
                    setSelectedKHODEN(undefined);
                  } else if (item === '3') {
                    setSelectedKH(undefined);
                  } else if (item === '5' || item === '16') {
                    setSelectedKHODEN(undefined);
                    setSelectedKH(undefined);
                  }
                }}>
                <Picker.Item label="Bán hàng" value="1" />
                <Picker.Item label="Ký gửi" value="2" />
                <Picker.Item label="Chuyển kho" value="3" />
                <Picker.Item label="Trả nhà cung cấp" value="5" />
                <Picker.Item label="Loại khác" value="16" />
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
              Số phiếu
            </Text>
            <View style={stylesGlobal.action}>
              <TextInput
                placeholder="Nhập số phiếu..."
                placeholderTextColor="#666666"
                value={Sophieu}
                style={[
                  stylesGlobal.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Người xuất
            </Text>
            <View style={stylesGlobal.actionSelect}>
              <Picker
                // selectedKHO={selectedKHO}
                selectedValue={Nguoixuat}
                style={{height: 50}}
                mode="dropdown"
                // onValueChange={handleChange("type")}>
                onValueChange={(item: string) => setNguoixuat(item)}>
                <Picker.Item label="Chọn người xuất..." value={undefined} />
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
          <View style={{marginTop: 10}}>
            <View style={stylesGlobal.actionSelect}>
              <Text
                style={[
                  stylesGlobal.text_footer,
                  {
                    color: colors.text,
                  },
                ]}>
                Ngày xuất
              </Text>
              <TouchableOpacity
                style={styles.searchSection}
                onPress={() => setShowPicker(true)}>
                <Text style={styles.input}>{ngayxuat}</Text>
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
              value={datexuat} // Initial date from state
              mode={'date'}
              is24Hour={false}
              display="default"
              onChange={(event: any, selectedDate: any) => {
                if (event.type == 'set') {
                  setShowPicker(false);
                  setDatexuat(selectedDate);
                  setNgayxuat(
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
          {/* {SelectedLOAI === '1' ? (
          <View style={styles.inputEnd}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Mã đơn hàng
            </Text>
            <View style={stylesGlobal.action}>
            
              <TextInput
                placeholder="Nhập mã đơn hàng..."
                placeholderTextColor="#666666"
                style={[
                  stylesGlobal.textInput,
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

          {SelectedLOAI === '1' || SelectedLOAI === '2' ? (
            <View style={{flex: 1}}>
              <Text
                style={[
                  stylesGlobal.text_footer,
                  {
                    color: colors.text,
                    marginTop: 10,
                  },
                ]}>
                Khách hàng
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
                  <Picker.Item label="Chọn khách hàng..." value={undefined} />
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
          ) : null}

          <View style={{marginTop: 10}}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Nhà cung cấp
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
                <Picker.Item label="Chọn nhà cung cấp..." value={undefined} />
                {dmncc?.map((items: any) => {
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
          {/* {SelectedLOAI === '2' ? (
          <View style={styles.inputEnd}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Địa chỉ khách hàng
            </Text>
            <View style={stylesGlobal.action}>
            
              <TextInput
                placeholder="Nhập địa chỉ khách hàng..."
                placeholderTextColor="#666666"
                style={[
                  stylesGlobal.textInput,
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
        ) : null} */}

          {SelectedLOAI === '3' ? (
            <View style={{marginTop: 10}}>
              <Text
                style={[
                  stylesGlobal.text_footer,
                  {
                    color: colors.text,
                  },
                ]}>
                Kho đến
              </Text>
              <Picker
                selectedValue={selectedKHODEN}
                style={{height: 50}}
                mode="dropdown"
                // onValueChange={handleChange("type")}>
                onValueChange={(item: string) => {
                  setSelectedKHODEN(item);
                  // setCommoditys([]);
                }}>
                <Picker.Item label="Chọn kho đến..." value={undefined} />
                {dmkho?.map((items: any) => {
                  return <Picker.Item label={items.NameVI} value={items.Id} />;
                })}
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
          ) : null}

          <View style={styles.inputEnd}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Số khối
            </Text>
            <View style={stylesGlobal.action}>
              <TextInput
                placeholder="Nhập số khối ..."
                placeholderTextColor="#666666"
                keyboardType="numeric"
                value={Sokhoi}
                style={[
                  stylesGlobal.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => setSokhoi(val)}
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
              Trọng lượng
            </Text>
            <View style={stylesGlobal.action}>
              <TextInput
                placeholder="Nhập trọng lượng ..."
                placeholderTextColor="#666666"
                value={Trongluong}
                style={[
                  stylesGlobal.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => setTrongluong(val)}
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
                value={Ghichu}
                style={[
                  stylesGlobal.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                multiline
                onChangeText={(val) => setGhichu(val)}
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
                  // idkhoden: selectedKHODEN,
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
                  Danh sách hàng xuất
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

          <Modal animationType="slide" transparent={true} visible={modalList}>
            <ListCommodityEx
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

export default FormExport;

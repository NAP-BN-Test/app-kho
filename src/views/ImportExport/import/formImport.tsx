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
import {KHACHHANG, KHO, NHACUNGCAP} from '../../../types';
const initialValues = {
  email: '',
  password: '',
  type: '',
  test: [{name: 'jared'}, {name: 'brent'}, {name: 'ian'}],
};
function FormImport() {
  const dmkho: Array<KHO> = useSelector((state: RootState) => state.dmkho);
  const dmncc: Array<NHACUNGCAP> = useSelector(
    (state: RootState) => state.dmncc,
  );
  const dmkh: Array<KHACHHANG> = useSelector((state: RootState) => state.dmkh);
  console.log('dmkho:', dmkho);
  console.log('dmncc:', dmncc);
  console.log('dmkh:', dmkh);

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
    getlistkho();
    get_nhacungcap();
    get_khachhang();
  }, []);
  const onSubmit = (values: any) => {
    console.log(values);
    console.log(selectedKHO);
    console.log(datenhap);
    console.log(SelectedKH);
    console.log(SelectedLOAI);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    isSubmitting,
    isValid,
    handleSubmit,
  } = formik;
  const {colors} = useTheme();
  const [selectedKHO, setSelectedKHO] = useState('' as any);
  const [selectedNCC, setSelectedNCC] = useState('' as any);
  const [SelectedLOAI, setSelectedLOAI] = useState('Mua hàng');
  const [Nguoinhan, setNguoinhan] = useState('Dũng');
  const [Phieuxuat, setPhieuxuat] = useState('ABC');
  const [SelectedKH, setSelectedKH] = useState('' as any);
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
  return (
    <View>
      <ScrollView>
        <View style={{flex: 1}}>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Kho
          </Text>
          <Picker
            selectedValue={selectedKHO}
            style={{height: 50}}
            mode="dropdown"
            // onValueChange={handleChange("type")}>
            onValueChange={(item: string) => {
              setSelectedKHO(item);
              setCommoditys([])
            }}>
            <Picker.Item label="Chọn kho..." value={undefined} />
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

        <View style={{flex: 1}}>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Loại phiếu
          </Text>
          <Picker
            // selectedKHO={selectedKHO}
            selectedValue={SelectedLOAI}
            style={{height: 50}}
            mode="dropdown"
            // onValueChange={handleChange("type")}>
            onValueChange={(item: string) => setSelectedLOAI(item)}>
            <Picker.Item label="Mua hàng" value="Mua hàng" />
            <Picker.Item label="Ký gửi" value="Ký gửi" />
            <Picker.Item label="Chuyển kho" value="Chuyển kho" />
            <Picker.Item label="Tồn đầu kỳ" value="Tồn đầu kỳ" />
            <Picker.Item label="Trả lại hàng" value="Trả lại hàng" />
            <Picker.Item label="Loại khác" value="Loại khác" />
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
            Số phiếu
          </Text>
          <View style={styles.action}>
            <FontAwesome name="pencil" color={colors.text} size={20} />
            <TextInput
              placeholder="Nhập số phiếu..."
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
        </View>

        {SelectedLOAI === 'Chuyển kho' ? (
          <View style={{flex: 1}}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Phiếu xuất
            </Text>
            <Picker
              // selectedKHO={selectedKHO}
              selectedValue={Phieuxuat}
              style={{height: 50}}
              mode="dropdown"
              // onValueChange={handleChange("type")}>
              onValueChange={(item: string) => setPhieuxuat(item)}>
              <Picker.Item label="ABC" value="ABC" />
              <Picker.Item label="BBB" value="BBB" />
              <Picker.Item label="CCC" value="CCC" />
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
            {/* Cho cái trên vào để select không lỗi đóng app (Đéo hiểu) */}
          </View>
        ) : null}

        <View style={{flex: 1}}>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Người nhận
          </Text>
          <Picker
            // selectedKHO={selectedKHO}
            selectedValue={Nguoinhan}
            style={{height: 50}}
            mode="dropdown"
            // onValueChange={handleChange("type")}>
            onValueChange={(item: string) => setNguoinhan(item)}>
            <Picker.Item label="Dũng" value="Dũng" />
            <Picker.Item label="Hưng" value="Hưng" />
            <Picker.Item label="Tùng" value="Tùng" />
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
          {/* Cho cái trên vào để select không lỗi đóng app (Đéo hiểu) */}
        </View>

        <View>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Ngày nhập
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
        <View style={styles.inputEnd}>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Người giao
          </Text>
          <View style={styles.action}>
            <FontAwesome name="pencil" color={colors.text} size={20} />
            <TextInput
              placeholder="Nhập người giao..."
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
        </View>

        {SelectedLOAI === 'Ký gửi' ? (
          <>
            <View style={{flex: 1}}>
              <Text
                style={[
                  stylesGlobal.text_footer,
                  {
                    color: colors.text,
                  },
                ]}>
                Khách hàng
              </Text>
              <Picker
                // selectedKHO={selectedKHO}
                selectedValue={SelectedKH}
                style={{height: 50}}
                mode="dropdown"
                // onValueChange={handleChange("type")}>
                onValueChange={(item: string) => {
                  setSelectedKH(item);
                  setCommoditys([]);
                }}>
                <Picker.Item label="Chọn khách hàng..." value={undefined} />
                {dmkh?.map((items: any) => {
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
              <View style={styles.action}>
                <FontAwesome name="pencil" color={colors.text} size={20} />
                <TextInput
                  placeholder="Nhập địa chỉ khách hàng..."
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
            </View>
          </>
        ) : null}

        {SelectedLOAI === 'Mua hàng' ||
        SelectedLOAI === 'Tồn kho đầu kỳ' ||
        SelectedLOAI === 'Loại khác' ? (
          <View style={{flex: 1}}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Nhà cung cấp
            </Text>
            <Picker
              // selectedKHO={selectedKHO}
              selectedValue={selectedNCC}
              style={{height: 50}}
              mode="dropdown"
              // onValueChange={handleChange("type")}>
              onValueChange={(item: string) => {
                setSelectedNCC(item);
                setCommoditys([]);
              }}>
              <Picker.Item label="Chọn nhà cung cấp..." value={undefined} />
              {dmncc?.map((items: any) => {
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

        {SelectedLOAI === 'Mua hàng' ? (
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
            <View style={styles.action}>
              <FontAwesome name="pencil" color={colors.text} size={20} />
              <TextInput
                placeholder="Nhập mã đơn hàng..."
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
        ) : null}

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
          <View style={styles.action}>
            <FontAwesome name="pencil" color={colors.text} size={20} />
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

              // onChangeText={(val) => setSelectedKHO(val)}
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
                idnhacungcap: selectedNCC,
                idkhachhang: SelectedKH,
                tukhoa: null,
                mavach: null,
                idkhoden: null,
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
                Danh sách hàng nhập
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <BasicButton
            title={'Ghi'}
            width={200}
            color={'#009387'}
            onPress={handleSubmit}
            // disabled={!isValid || isSubmitting}
            // loading={isSubmitting}
          />
        </View>

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
    paddingLeft: 5,
    textAlign: 'left',
    backgroundColor: '#fff',
    color: '#424242',
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

  IconDate: {},
  button: {
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
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
});

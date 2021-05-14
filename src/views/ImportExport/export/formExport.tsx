import React, {useState} from 'react';
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
import Commodity from './commodity';
import ServiceComponent from './service';
const initialValues = {
  email: '',
  password: '',
  type: '',
  test: [{name: 'jared'}, {name: 'brent'}, {name: 'ian'}],
};
function FormExport() {
  const onSubmit = (values: any) => {
    console.log(values);
    console.log(selectedKHO);
    console.log(datexuat);
    console.log(SelectedKH);
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
  const [selectedKHO, setSelectedKHO] = useState('KHO1');
  const [SelectedKH, setSelectedKH] = useState('CTY1');
  const [datexuat, setDatexuat] = useState(new Date());
  const [ngayxuat, setNgayxuat] = useState(moment(Date()).format('DD-MM-YYYY'));
  const [showPicker, setShowPicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleService, setModalVisibleService] = useState(false);
  const [Commoditys, setCommoditys] = useState([] as any);
  const [Service, setService] = useState([] as any);
  console.log(Commoditys);

  const toggleCloseModal: any = () => {
    setModalVisible(false);
  };

  const toggleCommodity: any = (data: any) => {
    let ArrOld = Commoditys;
    //Lấy phần tử cuối cùng của mảng
    let elmentEnd = ArrOld.length;
    let id = elmentEnd + 1;

    let newData = {
      ...data,
      id: id,
    };
    console.log('Data mới: ' + newData);

    ArrOld.push(newData);

    setCommoditys(ArrOld);
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
  function delete_Comodity(e: any) {
    const index = Commoditys.indexOf(e);
    const newFileList = Commoditys.slice();
    newFileList.splice(index, 1);
    setCommoditys(newFileList);
  }

  function delete_Service(e: any) {
    const index = Service.indexOf(e);
    const newFileList = Service.slice();
    newFileList.splice(index, 1);
    setService(newFileList);
  }
  return (
    <View>
      <ScrollView>
        <View>
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
        {showPicker ? (
          <DateTimePicker
            style={styles.text_input}
            value={datexuat} // Initial date from state
            mode={'date'}
            is24Hour={false}
            display="default"
            onChange={(event, selectedDate: any) => {
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

        <View style={styles.inputEnd}>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Khách hàng
          </Text>
          <View style={styles.action}>
            <FontAwesome name="pencil" color={colors.text} size={20} />
            <TextInput
              placeholder="Nhập khách hàng..."
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => setSelectedKH(val)}
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
            Số khối cả đơn
          </Text>
          <View style={styles.action}>
            <FontAwesome name="pencil" color={colors.text} size={20} />
            <TextInput
              placeholder="Nhập số khối cả đơn..."
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

        <View style={styles.inputEnd}>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Trọng lượng cả đơn
          </Text>
          <View style={styles.action}>
            <FontAwesome name="pencil" color={colors.text} size={20} />
            <TextInput
              placeholder="Nhập trọng lượng cả đơn..."
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

        <View style={styles.inputEnd}>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Kho nhận
          </Text>
          <View style={styles.action}>
            <FontAwesome name="pencil" color={colors.text} size={20} />
            <TextInput
              placeholder="Nhập kho nhận..."
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => setSelectedKHO(val)}
              // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            />
          </View>
        </View>
        <View style={styles.inputEnd}>
          <View style={styles.lableSquare}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Hàng hóa
            </Text>
            <View>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.btn_Square}>
                  <Text
                    style={[
                      // styles.textSign,
                      {
                        color: '#fff',
                        padding: 5,
                      },
                    ]}>
                    Thêm
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.square}>
            <View>
              {Commoditys && Commoditys?.length > 0
                ? Commoditys.map((x: any, idx: any) => (
                    <View style={[styles.lableSquare, {margin: 10}]} key={idx}>
                      <View style={[styles.lableSquare]}>
                        <Text>{x.codebar}</Text>
                        <Text> </Text>
                        <Text>{x.commodity}</Text>
                      </View>
                      <View>
                        <TouchableOpacity onPress={() => delete_Comodity(x)}>
                          <FontAwesome
                            name="trash"
                            color={colors.text}
                            size={20}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))
                : null}
            </View>
          </View>
        </View>

        <View style={styles.inputEnd}>
          <View style={styles.lableSquare}>
            <Text
              style={[
                stylesGlobal.text_footer,
                {
                  color: colors.text,
                },
              ]}>
              Dịch vụ kèm theo
            </Text>
            <View>
              <TouchableOpacity onPress={() => setModalVisibleService(true)}>
                <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.btn_Square}>
                  <Text
                    style={[
                      // styles.textSign,
                      {
                        color: '#fff',
                        padding: 5,
                      },
                    ]}>
                    Thêm
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.square}>
            <View>
              {Service && Service?.length > 0
                ? Service.map((x: any, idx: any) => (
                    <View style={[styles.lableSquare, {margin: 10}]} key={idx}>
                      <View style={[styles.lableSquare]}>
                        <Text>{x.service}</Text>
                        <Text> </Text>
                        <Text>{x.price}</Text>
                      </View>
                      <View>
                        <TouchableOpacity onPress={() => delete_Service(x)}>
                          <FontAwesome
                            name="trash"
                            color={colors.text}
                            size={20}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))
                : null}
            </View>
          </View>
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

        <View>
          <Commodity
            toggleCloseModal={toggleCloseModal}
            toggleCommodity={toggleCommodity}
            visible={modalVisible}
          />
        </View>

        <View>
          <ServiceComponent
            toggleCloseModalService={toggleCloseModalService}
            toggleService={toggleService}
            visible={modalVisibleService}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default FormExport;
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

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
const initialValues = {
  email: '',
  password: '',
  type: '',
  test: [{name: 'jared'}, {name: 'brent'}, {name: 'ian'}],
};
function FormImport() {
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
  const [selectedKHO, setSelectedKHO] = useState('KHO1');
  const [SelectedLOAI, setSelectedLOAI] = useState('java');
  const [SelectedKH, setSelectedKH] = useState('CTY1');
  const [datenhap, setDatenhap] = useState(new Date());
  const [ngaynhap, setNgaynhap] = useState(moment(Date()).format('DD-MM-YYYY'));
  const [showPicker, setShowPicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [Commoditys, setCommoditys] = useState([] as any);
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

  //Func
  function delete_Comodity(e: any) {
    const index = Commoditys.indexOf(e);
    const newFileList = Commoditys.slice();
    newFileList.splice(index, 1);
    setCommoditys(newFileList);
  }
  return (
    <View>
      <ScrollView>
        {/* <View>
        <BasicInput
          placeholder={'Enter password'}
          iconName="lock"
          iconSize={22}
          secureTextEntry
          onChangeText={handleChange('password')}
          value={values.password}
          errorMessage={touched.password && errors.password}
        />
      </View> */}

        <View>
          <Text
            style={[
              stylesGlobal.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Loại nhập
          </Text>
          <Picker
            // selectedKHO={selectedKHO}
            style={{height: 50}}
            // onValueChange={handleChange("type")}>
            onValueChange={(item: string) => setSelectedLOAI(item)}>
            <Picker.Item label="Mua" value="java" />
            <Picker.Item label="Ký gửi" value="js" />
          </Picker>
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
            onChange={(event, selectedDate: any) => {
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
            Nhà cung cấp
          </Text>
          <View style={styles.action}>
            <FontAwesome name="pencil" color={colors.text} size={20} />
            <TextInput
              placeholder="Nhập nhà cung cấp..."
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
            Người nhận
          </Text>
          <View style={styles.action}>
            <FontAwesome name="pencil" color={colors.text} size={20} />
            <TextInput
              placeholder="Nhập người nhận..."
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
                        <TouchableOpacity
                          onPress={()=>delete_Comodity(x)}>
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
